<?php

namespace App\Http\Controllers;

class BladeEscapeController extends Controller
{
    public function index()
    {
        return inertia('Bladeescape/Index');
    }
}
