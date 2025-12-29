<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class QueryBuilderController extends Controller
{
    public function index()
    {
        // クエリビルダーの挙動を確認
        $query = User::where('age', '>', 18);

        // 内部状態を取得
        $simpleQuery = [
            'wheres' => $query->getQuery()->wheres,
            'bindings' => $query->getQuery()->getBindings(),
            'sql' => $query->toSql(),
        ];

        // 複数の条件を試す
        $complexQuery = User::where('age', '>', 18)
            ->where('name', 'like', '%John%')
            ->orWhere('email', 'test@example.com');

        $complexQueryState = [
            'wheres' => $complexQuery->getQuery()->wheres,
            'bindings' => $complexQuery->getQuery()->getBindings(),
            'sql' => $complexQuery->toSql(),
        ];

        return inertia('Querybuilder/Index', [
            'simpleQuery' => $simpleQuery,
            'complexQuery' => $complexQueryState,
        ]);
    }

    public function guide()
    {
        return inertia('Querybuilder/Guide');
    }
}
