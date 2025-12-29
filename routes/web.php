<?php

use App\Http\Controllers\BladeEscapeController;
use App\Http\Controllers\ErrorFixController;
use App\Http\Controllers\QueryBuilderController;
use App\Http\Controllers\RefactoringController;
use App\Http\Controllers\ValidationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Welcome');
});
Route::get('/querybuilder', [QueryBuilderController::class, 'index']);
Route::get('/querybuilder/guide', [QueryBuilderController::class, 'guide']);

Route::get('/validation', [ValidationController::class, 'index']);
Route::post('/validation/validate', [ValidationController::class, 'validate']);
Route::get('/validation/guide', [ValidationController::class, 'guide']);

Route::get('/errorfix', [ErrorFixController::class, 'index']);
Route::get('/bladeescape', [BladeEscapeController::class, 'index']);
Route::get('/refactoring', [RefactoringController::class, 'index']);
