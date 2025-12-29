<?php

namespace App\Http\Controllers;

class RefactoringController extends Controller
{
    public function index()
    {
        return inertia('Refactoring/Index');
    }
}
