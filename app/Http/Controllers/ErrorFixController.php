<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ErrorFixController extends Controller
{
    public function index()
    {
        return inertia('Errorfix/Index');
    }
}
