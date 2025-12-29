@extends('layouts.app')

@section('title', 'Validation 学習ガイド')
@section('theme', 'theme-validation')

@section('content')
    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
        <a href="/validation">Validation デモを見る</a>
    </div>

    <h1>Laravel Validation 学習ガイド</h1>
    <p>このページでは、Laravel のバリデーション機能の基本から実装方法まで解説します。</p>

    <div class="section">
        <h2>🎯 Validation とは</h2>
        <p>バリデーション（検証）は、ユーザーからの入力データが正しい形式かどうかをチェックする機能です。</p>
        <ul>
            <li>不正なデータがデータベースに保存されるのを防ぐ</li>
            <li>セキュリティリスクを軽減する</li>
            <li>ユーザーに適切なエラーメッセージを表示する</li>
        </ul>
    </div>

    <div class="section">
        <h2>📋 実装の流れ</h2>

        <div class="step">
            <h3><span class="step-number">1</span>Controller の作成</h3>
            <div class="code-block">
                <pre>php artisan make:controller ValidationController</pre>
            </div>
        </div>

        <div class="step">
            <h3><span class="step-number">2</span>バリデーションロジックの実装</h3>
            <div class="code-block">
                <pre>use Illuminate\Support\Facades\Validator;

public function validate(Request $request)
{
    // ルールを定義
    $rules = [
        'name' => 'required|min:3|max:50',
        'email' => 'required|email',
        'age' => 'required|numeric|min:18',
    ];

    // バリデーターを作成
    $validator = Validator::make($request->all(), $rules);

    // 検証
    if ($validator->fails()) {
        // エラーがある場合
        return back()->withErrors($validator)->withInput();
    }

    // 成功した場合
    $validated = $validator->validated();
    // データベースに保存など...
}</pre>
            </div>
        </div>

        <div class="step">
            <h3><span class="step-number">3</span>より簡潔な書き方（推奨）</h3>
            <div class="code-block">
                <pre>public function store(Request $request)
{
    // validate() メソッドを使用（失敗時は自動でリダイレクト）
    $validated = $request->validate([
        'name' => 'required|min:3|max:50',
        'email' => 'required|email',
        'age' => 'required|numeric|min:18',
    ]);

    // $validated には検証済みデータのみが含まれる
    User::create($validated);
}</pre>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>📚 主なバリデーションルール</h2>
        <table>
            <thead>
                <tr>
                    <th>ルール</th>
                    <th>説明</th>
                    <th>例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="command">required</span></td>
                    <td>必須フィールド</td>
                    <td>'name' => 'required'</td>
                </tr>
                <tr>
                    <td><span class="command">email</span></td>
                    <td>有効なメールアドレス</td>
                    <td>'email' => 'email'</td>
                </tr>
                <tr>
                    <td><span class="command">min:value</span></td>
                    <td>最小値または最小文字数</td>
                    <td>'age' => 'min:18'</td>
                </tr>
                <tr>
                    <td><span class="command">max:value</span></td>
                    <td>最大値または最大文字数</td>
                    <td>'name' => 'max:50'</td>
                </tr>
                <tr>
                    <td><span class="command">numeric</span></td>
                    <td>数値であること</td>
                    <td>'age' => 'numeric'</td>
                </tr>
                <tr>
                    <td><span class="command">url</span></td>
                    <td>有効なURL</td>
                    <td>'website' => 'url'</td>
                </tr>
                <tr>
                    <td><span class="command">nullable</span></td>
                    <td>NULL を許可</td>
                    <td>'phone' => 'nullable|numeric'</td>
                </tr>
                <tr>
                    <td><span class="command">unique:table</span></td>
                    <td>データベースで一意</td>
                    <td>'email' => 'unique:users'</td>
                </tr>
                <tr>
                    <td><span class="command">confirmed</span></td>
                    <td>確認フィールドと一致</td>
                    <td>'password' => 'confirmed'</td>
                </tr>
                <tr>
                    <td><span class="command">in:foo,bar</span></td>
                    <td>指定した値のいずれか</td>
                    <td>'role' => 'in:admin,user'</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section">
        <h2>🔍 バリデーターの内部メソッド</h2>
        <div class="code-block">
            <pre>$validator = Validator::make($data, $rules);

// バリデーション結果を確認
$validator->passes();      // true: 成功, false: 失敗
$validator->fails();       // true: 失敗, false: 成功

// エラーメッセージを取得
$validator->errors();      // MessageBag インスタンス
$validator->errors()->all();  // 全エラーメッセージの配列
$validator->errors()->get('email');  // 特定フィールドのエラー

// 検証済みデータを取得
$validator->validated();   // 検証を通過したデータのみ</pre>
        </div>
    </div>

    <div class="section">
        <h2>💡 カスタムエラーメッセージ</h2>
        <div class="code-block">
            <pre>$messages = [
    'name.required' => '名前は必須です。',
    'email.email' => '有効なメールアドレスを入力してください。',
    'age.min' => '年齢は18歳以上である必要があります。',
];

$validator = Validator::make($data, $rules, $messages);</pre>
        </div>
    </div>

    <div class="section">
        <h2>🎨 フォームでエラーを表示</h2>
        <div class="code-block">
            <pre>&lt;form method="POST" action="/submit"&gt;
    @@csrf

    &lt;input type="text" name="name" value="@{{ old('name') }}"&gt;
    @@error('name')
        &lt;div class="error"&gt;@{{ $message }}&lt;/div&gt;
    @@enderror

    &lt;input type="email" name="email" value="@{{ old('email') }}"&gt;
    @@error('email')
        &lt;div class="error"&gt;@{{ $message }}&lt;/div&gt;
    @@enderror
&lt;/form&gt;</pre>
        </div>
        <div class="tip">
            <strong>💡 ポイント:</strong>
            <ul>
                <li><span class="command">old('name')</span>: バリデーション失敗時に入力値を保持</li>
                <li><span class="command">@@error</span>: エラーがある場合のみ表示</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>🚀 次のステップ</h2>
        <ul>
            <li>Form Request を使った大規模なバリデーション</li>
            <li>カスタムバリデーションルールの作成</li>
            <li>条件付きバリデーション（sometimes ルール）</li>
            <li>配列データのバリデーション</li>
            <li>ファイルアップロードのバリデーション</li>
        </ul>
    </div>
@endsection
