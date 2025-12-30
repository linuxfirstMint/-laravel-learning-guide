import { Head, Link } from "@inertiajs/react";

export default function Guide() {
    return (
        <>
            <Head title="Validation 学習ガイド" />

            <div className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation */}
                    <nav className="flex gap-6 mb-12">
                        <Link
                            href="/"
                            className="bg-yellow-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            ← HOME
                        </Link>
                        <Link
                            href="/validation"
                            className="bg-cyan-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            DEMO →
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="border-8 border-black bg-white p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h1 className="text-5xl font-black text-black uppercase tracking-tight mb-4">
                            Validation
                            <br />
                            学習ガイド
                        </h1>
                        <p className="text-lg font-bold text-black">
                            Laravel のバリデーション機能の基本から実装方法まで解説します。
                        </p>
                    </div>

                    {/* What is Validation */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-green-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                🎯 Validation とは
                            </h2>
                            <p className="text-black font-bold mb-4 text-lg">
                                バリデーション（検証）は、ユーザーからの入力データが正しい形式かどうかをチェックする機能です。
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <span className="font-bold text-black">不正なデータがデータベースに保存されるのを防ぐ</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <span className="font-bold text-black">セキュリティリスクを軽減する</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <span className="font-bold text-black">ユーザーに適切なエラーメッセージを表示する</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Implementation Flow */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-blue-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                📋 実装の流れ
                            </h2>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="border-4 border-black bg-white p-6">
                                    <h3 className="text-2xl font-black text-black mb-4 uppercase flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2">1</span>
                                        Controller の作成
                                    </h3>
                                    <pre className="bg-black text-green-400 p-4 font-mono text-sm border-2 border-black overflow-x-auto">
php artisan make:controller ValidationController
                                    </pre>
                                </div>

                                {/* Step 2 */}
                                <div className="border-4 border-black bg-white p-6">
                                    <h3 className="text-2xl font-black text-black mb-4 uppercase flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2">2</span>
                                        バリデーションロジックの実装
                                    </h3>
                                    <pre className="bg-black text-green-400 p-4 font-mono text-sm border-2 border-black overflow-x-auto">
{`use Illuminate\\Support\\Facades\\Validator;

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
}`}
                                    </pre>
                                </div>

                                {/* Step 3 */}
                                <div className="border-4 border-black bg-white p-6">
                                    <h3 className="text-2xl font-black text-black mb-4 uppercase flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2">3</span>
                                        より簡潔な書き方（推奨）
                                    </h3>
                                    <pre className="bg-black text-green-400 p-4 font-mono text-sm border-2 border-black overflow-x-auto">
{`public function store(Request $request)
{
    // validate() メソッドを使用（失敗時は自動でリダイレクト）
    $validated = $request->validate([
        'name' => 'required|min:3|max:50',
        'email' => 'required|email',
        'age' => 'required|numeric|min:18',
    ]);

    // $validated には検証済みデータのみが含まれる
    User::create($validated);
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Validation Rules Table */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-yellow-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                📚 主なバリデーションルール
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-4 border-black">
                                    <thead>
                                        <tr className="bg-black text-white">
                                            <th className="border-2 border-black p-4 text-left font-black uppercase">ルール</th>
                                            <th className="border-2 border-black p-4 text-left font-black uppercase">説明</th>
                                            <th className="border-2 border-black p-4 text-left font-black uppercase">例</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">required</td>
                                            <td className="border-2 border-black p-4 font-bold">必須フィールド</td>
                                            <td className="border-2 border-black p-4 font-mono">'name' =&gt; 'required'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">email</td>
                                            <td className="border-2 border-black p-4 font-bold">有効なメールアドレス</td>
                                            <td className="border-2 border-black p-4 font-mono">'email' =&gt; 'email'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">min:value</td>
                                            <td className="border-2 border-black p-4 font-bold">最小値または最小文字数</td>
                                            <td className="border-2 border-black p-4 font-mono">'age' =&gt; 'min:18'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">max:value</td>
                                            <td className="border-2 border-black p-4 font-bold">最大値または最大文字数</td>
                                            <td className="border-2 border-black p-4 font-mono">'name' =&gt; 'max:50'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">numeric</td>
                                            <td className="border-2 border-black p-4 font-bold">数値であること</td>
                                            <td className="border-2 border-black p-4 font-mono">'age' =&gt; 'numeric'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">url</td>
                                            <td className="border-2 border-black p-4 font-bold">有効なURL</td>
                                            <td className="border-2 border-black p-4 font-mono">'website' =&gt; 'url'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">nullable</td>
                                            <td className="border-2 border-black p-4 font-bold">NULL を許可</td>
                                            <td className="border-2 border-black p-4 font-mono">'phone' =&gt; 'nullable|numeric'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">unique:table</td>
                                            <td className="border-2 border-black p-4 font-bold">データベースで一意</td>
                                            <td className="border-2 border-black p-4 font-mono">'email' =&gt; 'unique:users'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">confirmed</td>
                                            <td className="border-2 border-black p-4 font-bold">確認フィールドと一致</td>
                                            <td className="border-2 border-black p-4 font-mono">'password' =&gt; 'confirmed'</td>
                                        </tr>
                                        <tr>
                                            <td className="border-2 border-black p-4 font-mono font-bold">in:foo,bar</td>
                                            <td className="border-2 border-black p-4 font-bold">指定した値のいずれか</td>
                                            <td className="border-2 border-black p-4 font-mono">'role' =&gt; 'in:admin,user'</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Internal Methods */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-purple-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                🔍 バリデーターの内部メソッド
                            </h2>
                            <pre className="bg-black text-green-400 p-4 font-mono text-sm border-4 border-black overflow-x-auto">
{`$validator = Validator::make($data, $rules);

// バリデーション結果を確認
$validator->passes();      // true: 成功, false: 失敗
$validator->fails();       // true: 失敗, false: 成功

// エラーメッセージを取得
$validator->errors();      // MessageBag インスタンス
$validator->errors()->all();  // 全エラーメッセージの配列
$validator->errors()->get('email');  // 特定フィールドのエラー

// 検証済みデータを取得
$validator->validated();   // 検証を通過したデータのみ`}
                            </pre>
                        </div>
                    </section>

                    {/* Custom Error Messages */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-pink-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                💡 カスタムエラーメッセージ
                            </h2>
                            <pre className="bg-black text-green-400 p-4 font-mono text-sm border-4 border-black overflow-x-auto">
{`$messages = [
    'name.required' => '名前は必須です。',
    'email.email' => '有効なメールアドレスを入力してください。',
    'age.min' => '年齢は18歳以上である必要があります。',
];

$validator = Validator::make($data, $rules, $messages);`}
                            </pre>
                        </div>
                    </section>

                    {/* Form Error Display */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-cyan-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                🎨 フォームでエラーを表示
                            </h2>
                            <pre className="bg-black text-green-400 p-4 font-mono text-sm border-4 border-black overflow-x-auto mb-6">
{`<form method="POST" action="/submit">
    @csrf

    <input type="text" name="name" value="{{ old('name') }}">
    @error('name')
        <div class="error">{{ $message }}</div>
    @enderror

    <input type="email" name="email" value="{{ old('email') }}">
    @error('email')
        <div class="error">{{ $message }}</div>
    @enderror
</form>`}
                            </pre>
                            <div className="bg-yellow-100 border-4 border-black p-6">
                                <p className="font-black text-black mb-3 text-lg">💡 ポイント:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-2xl mr-3">▸</span>
                                        <span className="font-bold text-black">
                                            <code className="bg-black text-green-400 px-2 py-1 font-mono">old('name')</code>:
                                            バリデーション失敗時に入力値を保持
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-2xl mr-3">▸</span>
                                        <span className="font-bold text-black">
                                            <code className="bg-black text-green-400 px-2 py-1 font-mono">@error</code>:
                                            エラーがある場合のみ表示
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-red-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                🚀 次のステップ
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <span className="font-bold text-black">Form Request を使った大規模なバリデーション</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <span className="font-bold text-black">カスタムバリデーションルールの作成</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <span className="font-bold text-black">条件付きバリデーション（sometimes ルール）</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <span className="font-bold text-black">配列データのバリデーション</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <span className="font-bold text-black">ファイルアップロードのバリデーション</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
