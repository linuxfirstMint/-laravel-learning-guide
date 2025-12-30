# Laravel Learning Guide

Laravel 学習のための実験的プロジェクト。
9 種類のデザインパターンを試し、ブランチ戦略で管理。

## デザインパターン

-   Modern Colorful - 紫グラデーション
-   Brutalist - 太いボーダー、ハードシャドウ
-   Terminal Hacker - レトロな緑文字
-   Dark Mode - ネオンアクセント
-   Glassmorphism - 透明感、背景ぼかし
-   Soft Pastel - 優しいパステルカラー
-   Neo-Brutalism - モダンなブルータリズム
-   Minimalist - シンプル、余白重視
-   System Dump - システム風

## ブランチ戦略

```
experiment/design-improvements (実験の起点)
└── css_fw_tailwind (Tailwind CSS)
    ├── design/brutalist
    ├── design/modern-colorful
    └── ... (全9種類)
```

## セットアップ

```bash
git clone https://github.com/[username]/laravel-learning-guide.git
cd laravel-learning-guide
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run dev
```

## デザインの切り替え

```bash
git checkout design/brutalist
npm run dev
```

## 技術スタック

-   Laravel 12
-   React + Inertia.js
-   Tailwind CSS v4
-   MariaDB
-   Docker (DevContainer)

## 学習記録

-   リファクタリング実践
-   エラー解決方法
-   バリデーション実装
-   Query Builder 使い方

## TODO

[Issues](https://github.com/linuxfirstMint/laravel-learning-guide/issues) を参照

## ライセンス

MIT
