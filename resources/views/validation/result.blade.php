@extends('layouts.app')

@section('title', 'Validation 結果')
@section('theme', 'theme-validation')

@section('content')
    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
        <a href="/validation">フォームに戻る</a>
        <a href="/validation/guide">学習ガイドを見る</a>
    </div>

    <h1>Validation 結果</h1>

    <div class="section">
        <h2>バリデーション結果</h2>
        @if($state['passes'])
            <div class="status success">✓ バリデーション成功</div>
        @else
            <div class="status error">✗ バリデーション失敗</div>
        @endif
    </div>

    <div class="section">
        <h2>入力データ</h2>
        <div class="code-block">
            <pre>{{ json_encode($state['input'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>
    </div>

    <div class="section">
        <h2>バリデーションルール</h2>
        <div class="code-block">
            <pre>{{ json_encode($state['rules'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>
    </div>

    @if($state['fails'])
    <div class="section">
        <h2>エラー詳細</h2>
        <div class="code-block">
            <pre>{{ json_encode($state['errors'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>
    </div>
    @endif

    @if($state['passes'])
    <div class="section">
        <h2>検証済みデータ</h2>
        <p>バリデーションを通過したデータのみが含まれます。</p>
        <div class="code-block">
            <pre>{{ json_encode($state['validated'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>
    </div>
    @endif

    <div class="section">
        <h2>内部状態</h2>
        <span class="label">passes():</span>
        <div class="code-block">
            <pre>{{ $state['passes'] ? 'true' : 'false' }}</pre>
        </div>

        <span class="label">fails():</span>
        <div class="code-block">
            <pre>{{ $state['fails'] ? 'true' : 'false' }}</pre>
        </div>
    </div>

    <div class="section">
        <h2>ポイント</h2>
        <ul>
            <li><strong>Validator::make()</strong>: バリデーターインスタンスを作成</li>
            <li><strong>passes()</strong>: バリデーションが成功したかを返す</li>
            <li><strong>fails()</strong>: バリデーションが失敗したかを返す</li>
            <li><strong>errors()</strong>: エラーメッセージの配列を取得</li>
            <li><strong>validated()</strong>: 検証済みデータのみを取得（余計なフィールドを除外）</li>
        </ul>
    </div>
@endsection
