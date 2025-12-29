#!/bin/bash

# Exit on error
set -e

echo "Checking Laravel project setup..."

# Check if Laravel is already fully set up
if [ -f "composer.json" ] && [ -d "vendor" ] && [ -f ".env" ]; then
    echo "Laravel project is already set up. Skipping installation."
    echo "Run 'php artisan serve --host=0.0.0.0' to start the development server"
    exit 0
fi

# Check if composer.json exists (Laravel already installed)
if [ ! -f "composer.json" ]; then
    echo "Creating new Laravel project..."
    # Create Laravel in a temporary directory
    TMP_DIR=$(mktemp -d)
    composer create-project laravel/laravel "$TMP_DIR"

    # Move all files from temp directory to workspace (excluding .devcontainer)
    shopt -s dotglob
    for item in "$TMP_DIR"/*; do
        if [ "$(basename "$item")" != ".devcontainer" ]; then
            mv "$item" ./
        fi
    done
    shopt -u dotglob
    rm -rf "$TMP_DIR"

    echo "Configuring environment..."
    # Update .env file for MariaDB
    sed -i 's/DB_CONNECTION=sqlite/DB_CONNECTION=mysql/' .env
    sed -i 's/# DB_HOST=127.0.0.1/DB_HOST=db/' .env
    sed -i 's/# DB_PORT=3306/DB_PORT=3306/' .env
    sed -i 's/# DB_DATABASE=laravel/DB_DATABASE=laravel/' .env
    sed -i 's/# DB_USERNAME=root/DB_USERNAME=laravel/' .env
    sed -i 's/# DB_PASSWORD=/DB_PASSWORD=laravel/' .env

    # Wait for database to be ready
    echo "Waiting for database connection..."
    MAX_TRIES=30
    COUNT=0
    until mysql -h db -u laravel -plaravel -e "SELECT 1" &> /dev/null; do
        COUNT=$((COUNT + 1))
        if [ $COUNT -ge $MAX_TRIES ]; then
            echo "Error: Could not connect to database after $MAX_TRIES attempts"
            exit 1
        fi
        echo "Waiting for MariaDB to be ready... ($COUNT/$MAX_TRIES)"
        sleep 2
    done

    echo "Database is ready!"

    # Run migrations
    echo "Running migrations..."
    php artisan migrate --force
else
    echo "Laravel project already exists. Installing dependencies..."
    composer install
fi

echo "Laravel setup complete!"
echo "Run 'php artisan serve --host=0.0.0.0' to start the development server"
