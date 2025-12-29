<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ValidationController extends Controller
{
    public function index()
    {
        return inertia('Validation/Index');
    }

    public function validate(Request $request)
    {
        // バリデーションルールを定義
        $rules = [
            'name' => 'required|min:3|max:50',
            'email' => 'required|email',
            'age' => 'required|numeric|min:18|max:100',
            'website' => 'nullable|url',
        ];

        // バリデーターインスタンスを作成
        $validator = Validator::make($request->all(), $rules);

        // バリデーション結果と内部状態を取得
        $validationState = [
            'input' => $request->all(),
            'rules' => $rules,
            'passes' => $validator->passes(),
            'fails' => $validator->fails(),
            'errors' => $validator->errors()->toArray(),
            'validated' => $validator->passes() ? $validator->validated() : null,
        ];

        return inertia('Validation/Result', [
            'state' => $validationState,
        ]);
    }

    public function guide()
    {
        return inertia('Validation/Guide');
    }
}
