import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="エラー修正の流れ" />

            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Navigation */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-block border-6 border-black bg-yellow-400 px-8 py-4 font-black text-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            ← HOME
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="mb-16 border-8 border-black bg-white p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h1 className="text-6xl font-black text-black mb-6 uppercase tracking-tight">
                            Laravel エラー修正の流れ
                        </h1>
                        <div className="border-t-4 border-black pt-6">
                            <p className="text-xl font-bold text-black">
                                実際に発生したBladeテンプレートのsyntax
                                errorを例に、エラー修正の流れを学びます。
                            </p>
                        </div>
                    </div>

                    {/* Error Section */}
                    <div className="mb-12 border-8 border-black bg-red-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-6 uppercase">
                            発生したエラー
                        </h2>
                        <div className="border-6 border-black bg-white p-6 mb-6">
                            <div className="text-2xl font-black text-red-600 mb-4 uppercase">
                                ParseError
                            </div>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                <pre className="whitespace-pre-wrap">
                                    {`syntax error, unexpected end of file, expecting "elseif" or "else" or "endif"

Location: /workspace/resources/views/validation/guide.blade.php
HTTP Status: 500`}
                                </pre>
                            </div>
                        </div>
                        <p className="text-lg font-bold text-black">
                            ブラウザで{" "}
                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                /validation/guide
                            </span>{" "}
                            にアクセスすると500エラーが発生しました。
                        </p>
                    </div>

                    {/* Steps Section */}
                    <div className="mb-12 border-8 border-black bg-blue-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            エラー修正の手順
                        </h2>

                        {/* Step 1 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    1
                                </span>
                                <span className="uppercase">
                                    エラーメッセージを確認
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                まず、エラーメッセージから以下の情報を読み取ります：
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="text-base font-bold text-black">
                                    • <strong>エラーの種類</strong>: ParseError
                                    (構文エラー)
                                </li>
                                <li className="text-base font-bold text-black">
                                    • <strong>エラー内容</strong>: unexpected end
                                    of file, expecting "elseif" or "else" or
                                    "endif"
                                </li>
                                <li className="text-base font-bold text-black">
                                    • <strong>発生場所</strong>:
                                    validation/guide.blade.php
                                </li>
                            </ul>
                            <div className="border-6 border-black bg-yellow-100 p-6">
                                <p className="text-base font-black text-black uppercase mb-2">
                                    ポイント:
                                </p>
                                <p className="text-base font-bold text-black">
                                    "expecting endif" というエラーは、@if や
                                    @error
                                    などのBladeディレクティブが閉じられていない可能性を示唆しています。
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    2
                                </span>
                                <span className="uppercase">
                                    ビューキャッシュをクリア
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                Laravelはビューをキャッシュするため、まずキャッシュをクリアします。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre>php artisan view:clear</pre>
                            </div>
                            <p className="text-lg font-bold text-black">
                                これにより{" "}
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    storage/framework/views/
                                </span>{" "}
                                内のコンパイル済みビューが削除されます。
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    3
                                </span>
                                <span className="uppercase">
                                    Laravelのログを確認
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                より詳細な情報を得るため、ログファイルを確認します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre>
                                    tail -50
                                    /workspace/storage/logs/laravel.log
                                </pre>
                            </div>
                            <p className="text-lg font-bold text-black mb-4">
                                ログから以下の情報が得られました：
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-6">
                                <pre className="whitespace-pre-wrap">
                                    {`ParseError(code: 0): syntax error, unexpected end of file,
expecting "elseif" or "else" or "endif"
at /workspace/storage/framework/views/181514fb91e1a583a6ded8d0aacd403c.php:361`}
                                </pre>
                            </div>
                            <div className="border-6 border-black bg-yellow-100 p-6">
                                <p className="text-base font-black text-black uppercase mb-2">
                                    ポイント:
                                </p>
                                <p className="text-base font-bold text-black">
                                    コンパイルされたビューの361行目でエラーが発生していることがわかります。
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    4
                                </span>
                                <span className="uppercase">
                                    Bladeディレクティブを探す
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                ファイル内のBladeディレクティブを確認します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
                                    {`grep -n "@if\\|@endif\\|@else\\|@error" validation/guide.blade.php`}
                                </pre>
                            </div>
                            <p className="text-lg font-bold text-black">
                                この時点では特に問題は見つかりませんでした。
                            </p>
                        </div>

                        {/* Step 5 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    5
                                </span>
                                <span className="uppercase">
                                    Blade echo構文を探す
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                次に、Bladeのecho構文{" "}
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    {"{{ }}"}
                                </span>{" "}
                                を探します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
                                    {`grep -n "@{{ " /workspace/resources/views/validation/guide.blade.php`}
                                </pre>
                            </div>
                            <p className="text-lg font-bold text-black mb-4">
                                結果：
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                <pre className="whitespace-pre-wrap">
                                    {`306:    <input type="text" name="name" value="@{{ old('name') }}">
308:        <div class="error">@{{ $message }}</div>
311:    <input type="email" name="email" value="@{{ old('email') }}">
313:        <div class="error">@{{ $message }}</div>`}
                                </pre>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    6
                                </span>
                                <span className="uppercase">問題を特定</span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                コードブロック内（HTMLエスケープされた部分）で、Bladeディレクティブがエスケープされていないことが判明しました。
                            </p>
                            <div className="border-6 border-black bg-white p-6 mb-6">
                                <div className="text-2xl font-black text-red-600 mb-4 uppercase">
                                    問題のコード
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre className="whitespace-pre-wrap">
                                        {`<pre>
    @csrf
    <input type="text" name="name" value="@{{ old('name') }}">
    @error('name')
        <div class="error">@{{ $message }}</div>
    @enderror
</pre>`}
                                    </pre>
                                </div>
                            </div>
                            <p className="text-lg font-bold text-black mb-4">
                                HTMLタグは &lt; と &gt;
                                でエスケープされていますが、Bladeディレクティブ（@csrf、@error）と
                                echo構文（{"@{{ }}"}
                                ）はエスケープされていません。
                            </p>
                            <p className="text-lg font-bold text-black">
                                Bladeエンジンはこれらを実際のディレクティブとして解釈しようとし、正しく閉じられていないためエラーが発生しました。
                            </p>
                        </div>

                        {/* Step 7 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    7
                                </span>
                                <span className="uppercase">修正を実施</span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                Bladeディレクティブを正しくエスケープします。
                            </p>
                            <div className="border-6 border-black bg-green-100 p-6">
                                <p className="text-2xl font-black text-black mb-4 uppercase">
                                    修正後のコード
                                </p>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-6">
                                    <pre className="whitespace-pre-wrap">
                                        {`<pre>
    @@csrf
    <input type="text" name="name" value="@@{{ old('name') }}">
    @@error('name')
        <div class="error">@@{{ $message }}</div>
    @@enderror
</pre>`}
                                    </pre>
                                </div>
                                <p className="text-xl font-black text-black mb-3 uppercase">
                                    エスケープルール:
                                </p>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            @
                                        </span>{" "}
                                        →{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            @@
                                        </span>{" "}
                                        (@を2回重ねる)
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            {"{{ }}"}
                                        </span>{" "}
                                        →{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            {"@{{ }}"}
                                        </span>{" "}
                                        (@を@@に変更)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 8 */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    8
                                </span>
                                <span className="uppercase">
                                    キャッシュクリアと確認
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                再度ビューキャッシュをクリアして、修正を確認します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre>php artisan view:clear</pre>
                            </div>
                            <p className="text-lg font-bold text-black">
                                ブラウザで{" "}
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    /validation/guide
                                </span>{" "}
                                にアクセスして、エラーが解消されたことを確認します。
                            </p>
                        </div>
                    </div>

                    {/* Learnings Section */}
                    <div className="mb-12 border-8 border-black bg-green-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            学んだこと
                        </h2>
                        <ul className="space-y-4">
                            <li className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    エラーログの重要性
                                </strong>
                                <p className="text-base font-bold text-black">
                                    storage/logs/laravel.log
                                    には詳細な情報が記録される
                                </p>
                            </li>
                            <li className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    ビューキャッシュ
                                </strong>
                                <p className="text-base font-bold text-black">
                                    変更が反映されない時は php artisan
                                    view:clear を実行
                                </p>
                            </li>
                            <li className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    Bladeエスケープ
                                </strong>
                                <p className="text-base font-bold text-black mb-2">
                                    コードサンプルとして表示したいBladeディレクティブは必ずエスケープする
                                </p>
                                <p className="text-base font-bold text-black">
                                    @@ を使ってディレクティブをエスケープできる
                                </p>
                            </li>
                            <li className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    grep コマンド
                                </strong>
                                <p className="text-base font-bold text-black">
                                    ファイル内の特定パターンを検索するのに便利
                                </p>
                            </li>
                            <li className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    段階的デバッグ
                                </strong>
                                <p className="text-base font-bold text-black">
                                    エラーメッセージ → ログ →
                                    ディレクティブ → echo構文と順に調査
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Common Errors Section */}
                    <div className="mb-12 border-8 border-black bg-yellow-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            よくあるBladeエラーと対処法
                        </h2>

                        <div className="space-y-6">
                            <div className="border-6 border-black bg-white p-6">
                                <h3 className="text-2xl font-black text-black mb-3 uppercase">
                                    1. unexpected end of file
                                </h3>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        • @if、@foreach、@error
                                        などが閉じられていない
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        • 対処: 対応する @endif、@endforeach、@enderror
                                        を確認
                                    </li>
                                </ul>
                            </div>

                            <div className="border-6 border-black bg-white p-6">
                                <h3 className="text-2xl font-black text-black mb-3 uppercase">
                                    2. Undefined variable
                                </h3>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        •
                                        コントローラーからビューに渡していない変数を使用
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        •
                                        対処: コントローラーで変数を渡しているか確認
                                    </li>
                                </ul>
                            </div>

                            <div className="border-6 border-black bg-white p-6">
                                <h3 className="text-2xl font-black text-black mb-3 uppercase">
                                    3. Call to undefined method
                                </h3>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        • 存在しないメソッドを呼び出している
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        •
                                        対処: メソッド名のスペルミスや、メソッドの存在を確認
                                    </li>
                                </ul>
                            </div>

                            <div className="border-6 border-black bg-white p-6">
                                <h3 className="text-2xl font-black text-black mb-3 uppercase">
                                    4. CSRF token mismatch
                                </h3>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        • POSTフォームに @csrf
                                        ディレクティブがない
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        • 対処: フォーム内に @csrf を追加
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Commands Section */}
                    <div className="mb-12 border-8 border-black bg-purple-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            デバッグに便利なコマンド
                        </h2>
                        <div className="border-4 border-black bg-black text-green-400 p-6 font-mono">
                            <pre className="whitespace-pre-wrap">
                                {`# ビューキャッシュをクリア
php artisan view:clear

# 全キャッシュをクリア
php artisan cache:clear

# ログをリアルタイムで監視
tail -f storage/logs/laravel.log

# ファイル内を検索
grep -n "検索文字列" ファイル名

# ルート一覧を表示
php artisan route:list`}
                            </pre>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-block border-6 border-black bg-yellow-400 px-8 py-4 font-black text-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            ← HOME
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
