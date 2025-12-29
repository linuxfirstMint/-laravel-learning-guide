@extends('layouts.app')

@section('title', 'Query Builder 挙動確認')
@section('theme', 'theme-querybuilder')

@section('content')
    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
        <a href="/querybuilder/guide">学習ガイドを見る</a>
    </div>

    <h1>Laravel Query Builder 内部挙動確認</h1>

    <div class="section">
        <h2>シンプルなクエリ</h2>
        <div class="code-block">
            <pre>$query = User::where('age', '>', 18);</pre>
        </div>

        <span class="label">生成されるSQL:</span>
        <div class="code-block">
            <pre class="sql">{{ $simpleQuery['sql'] }}</pre>
        </div>

        <span class="label">WHERE条件の内部状態:</span>
        <div class="code-block">
            <pre>{{ json_encode($simpleQuery['wheres'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>

        <span class="label">バインディング:</span>
        <div class="code-block">
            <pre>{{ json_encode($simpleQuery['bindings'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>
    </div>

    <div class="section">
        <h2>複雑なクエリ（複数条件）</h2>
        <div class="code-block">
            <pre>$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');</pre>
        </div>

        <span class="label">生成されるSQL:</span>
        <div class="code-block">
            <pre class="sql">{{ $complexQuery['sql'] }}</pre>
        </div>

        <span class="label">WHERE条件の内部状態:</span>
        <div class="code-block">
            <pre>{{ json_encode($complexQuery['wheres'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>

        <span class="label">バインディング:</span>
        <div class="code-block">
            <pre>{{ json_encode($complexQuery['bindings'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>
    </div>

    <div class="section">
        <h2>ポイント</h2>
        <ul>
            <li><strong>wheres配列</strong>: 各WHERE条件がtype, column, operator, value, booleanを持つ配列として格納されている</li>
            <li><strong>bindings配列</strong>: プリペアドステートメントに渡される実際の値が格納されている</li>
            <li><strong>SQL</strong>: 実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）</li>
            <li><strong>boolean</strong>: 'and'または'or'で、次の条件との論理演算子を示す</li>
        </ul>
    </div>
@endsection
