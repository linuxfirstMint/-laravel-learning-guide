<?php

namespace App\Http\Controllers;

class InertiaController extends Controller
{
    public function index()
    {
        return inertia('Inertia/Index');
    }
}
