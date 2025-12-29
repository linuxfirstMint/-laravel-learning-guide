@extends('layouts.app')

@section('title', 'Validation 実践')
@section('theme', 'theme-validation')

@section('content')
    <style>
        body {
            max-width: 800px;
        }
    </style>

    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
        <a href="/validation/guide">学習ガイドを見る</a>
    </div>

    <h1>Laravel Validation 実践</h1>

    <div class="section">
        <div class="info">
            <strong>💡 このフォームで試せること:</strong><br>
            送信後に、バリデーションの内部状態（ルール、エラー、検証済みデータ）を確認できます。
        </div>

        <form action="/validation/validate" method="POST">
            @csrf

            <div class="form-group">
                <label for="name">名前 *</label>
                <input type="text" id="name" name="name" placeholder="例: 山田太郎">
                <div class="rules">required | min:3 | max:50</div>
            </div>

            <div class="form-group">
                <label for="email">メールアドレス *</label>
                <input type="text" id="email" name="email" placeholder="例: example@example.com">
                <div class="rules">required | email</div>
            </div>

            <div class="form-group">
                <label for="age">年齢 *</label>
                <input type="number" id="age" name="age" placeholder="例: 25">
                <div class="rules">required | numeric | min:18 | max:100</div>
            </div>

            <div class="form-group">
                <label for="website">ウェブサイト（任意）</label>
                <input type="text" id="website" name="website" placeholder="例: https://example.com">
                <div class="rules">nullable | url</div>
            </div>

            <button type="submit">バリデーションを実行</button>
        </form>
    </div>
@endsection
