import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Blade エスケープ完全ガイド" />

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
                            Blade エスケープ完全ガイド
                        </h1>
                        <div className="border-t-4 border-black pt-6">
                            <p className="text-xl font-bold text-black">
                                Bladeテンプレートでコードサンプルを表示する際のエスケープ方法を網羅的に解説します。
                            </p>
                        </div>
                    </div>

                    {/* Why Escape Section */}
                    <div className="mb-12 border-8 border-black bg-blue-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-6 uppercase">
                            なぜエスケープが必要？
                        </h2>
                        <p className="text-lg font-bold text-black mb-6">
                            Bladeテンプレートでは、ディレクティブやecho構文をそのまま書くと、Bladeエンジンが実際のコードとして実行してしまいます。
                        </p>

                        {/* Bad Example */}
                        <div className="mb-6 border-6 border-black bg-red-100 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <div className="text-2xl font-black text-red-600 mb-4 uppercase">
                                エスケープしない場合（エラー発生）
                            </div>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`<pre>
    @csrf
    {{ $user->name }}
    @error('email')
        エラーメッセージ
    @enderror
</pre>`}
                                </pre>
                            </div>
                            <p className="text-base font-bold text-black">
                                <strong>問題点:</strong> Bladeエンジンがこれらを実際のディレクティブとして解釈し、syntax errorが発生します。
                            </p>
                        </div>

                        {/* Good Example */}
                        <div className="border-6 border-black bg-green-100 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <div className="text-2xl font-black text-green-600 mb-4 uppercase">
                                正しくエスケープした場合
                            </div>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`<pre>
    @@csrf
    @{{ $user->name }}
    @@error('email')
        エラーメッセージ
    @@enderror
</pre>`}
                                </pre>
                            </div>
                            <p className="text-base font-bold text-black">
                                <strong>結果:</strong> ブラウザで正しく表示されます。
                            </p>
                        </div>
                    </div>

                    {/* Escape Rules Section */}
                    <div className="mb-12 border-8 border-black bg-yellow-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-6 uppercase">
                            エスケープルール一覧
                        </h2>
                        <div className="border-6 border-black bg-white overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="border-4 border-black px-6 py-4 text-left font-black uppercase">
                                            表示したい内容
                                        </th>
                                        <th className="border-4 border-black px-6 py-4 text-left font-black uppercase">
                                            ファイルに書くコード
                                        </th>
                                        <th className="border-4 border-black px-6 py-4 text-left font-black uppercase">
                                            説明
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                @csrf
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                @@csrf
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @を2回重ねる
                                        </td>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                @if
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                @@if
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @を2回重ねる
                                        </td>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                @error
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                @@error
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @を2回重ねる
                                        </td>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                @foreach
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                @@foreach
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @を2回重ねる
                                        </td>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                {"{{ $var }}"}
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                {"@{{ $var }}"}
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @を@@に変更
                                        </td>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                {"{!! $html !!}"}
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4">
                                            <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                                {"@{!! $html !!}"}
                                            </span>
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @を@@に変更
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Common Patterns Section */}
                    <div className="mb-12 border-8 border-black bg-red-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            よくあるエスケープ忘れパターン
                        </h2>

                        {/* Pattern 1 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                パターン1: ディレクティブのエスケープ忘れ
                            </h3>
                            <div className="mb-4">
                                <div className="text-lg font-black text-red-600 mb-2 uppercase">
                                    間違い
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre>&lt;p&gt;使い方: @csrf をフォーム内に追加&lt;/p&gt;</pre>
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-black text-green-600 mb-2 uppercase">
                                    正解
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre>&lt;p&gt;使い方: @@csrf をフォーム内に追加&lt;/p&gt;</pre>
                                </div>
                            </div>
                        </div>

                        {/* Pattern 2 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                パターン2: echo構文のエスケープ忘れ
                            </h3>
                            <div className="mb-4">
                                <div className="text-lg font-black text-red-600 mb-2 uppercase">
                                    間違い
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre className="whitespace-pre-wrap">
{`<code>
{{ $user->name }}
</code>`}
                                    </pre>
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-black text-green-600 mb-2 uppercase">
                                    正解
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre className="whitespace-pre-wrap">
{`<code>
@{{ $user->name }}
</code>`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Pattern 3 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                パターン3: コードブロック内のエスケープ忘れ
                            </h3>
                            <div className="mb-4">
                                <div className="text-lg font-black text-red-600 mb-2 uppercase">
                                    間違い
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre className="whitespace-pre-wrap">
{`<pre>
@if($user)
    {{ $user->name }}
@endif
</pre>`}
                                    </pre>
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-black text-green-600 mb-2 uppercase">
                                    正解
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre className="whitespace-pre-wrap">
{`<pre>
@@if($user)
    @{{ $user->name }}
@@endif
</pre>`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Pattern 4 */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                パターン4: 説明文中のエスケープ忘れ
                            </h3>
                            <div className="mb-4">
                                <div className="text-lg font-black text-red-600 mb-2 uppercase">
                                    間違い
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre>&lt;p&gt;@error ディレクティブでエラーを表示&lt;/p&gt;</pre>
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-black text-green-600 mb-2 uppercase">
                                    正解
                                </div>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre>&lt;p&gt;@@error ディレクティブでエラーを表示&lt;/p&gt;</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Practical Example Section */}
                    <div className="mb-12 border-8 border-black bg-purple-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-6 uppercase">
                            実践例：フォームのサンプルコード表示
                        </h2>
                        <p className="text-lg font-bold text-black mb-6">
                            以下は、Bladeテンプレートでフォームのサンプルコードを表示する完全な例です。
                        </p>

                        <div className="border-4 border-black bg-black text-green-400 p-6 font-mono mb-6">
                            <pre className="whitespace-pre-wrap">
{`<div class="example">
    <h3>フォームの書き方</h3>
    <pre>
<form method="POST" action="/submit">
    @@csrf

    <input type="text" name="name" value="@{{ old('name') }}">
    @@error('name')
        <div class="error">@{{ $message }}</div>
    @@enderror

    <button type="submit">送信</button>
</form>
    </pre>
</div>`}
                            </pre>
                        </div>

                        <div className="border-6 border-black bg-yellow-100 p-6">
                            <p className="text-xl font-black text-black mb-4 uppercase">
                                ポイント:
                            </p>
                            <ul className="space-y-2">
                                <li className="text-base font-bold text-black">
                                    • HTMLタグ（&lt;form&gt;、&lt;input&gt;など）は{" "}
                                    <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                        &amp;lt;
                                    </span>{" "}
                                    と{" "}
                                    <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                        &amp;gt;
                                    </span>{" "}
                                    でエスケープ
                                </li>
                                <li className="text-base font-bold text-black">
                                    • Bladeディレクティブ（@csrf、@error）は @ を @@ に変更
                                </li>
                                <li className="text-base font-bold text-black">
                                    • Blade echo構文（{"{{ }}"}）は @ を @@ に変更
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* No Escape Needed Section */}
                    <div className="mb-12 border-8 border-black bg-green-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            エスケープが不要なケース
                        </h2>

                        {/* Case 1 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                1. JavaScript内での使用
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                JavaScriptコード内では、Bladeは実行されないためエスケープ不要です。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                <pre className="whitespace-pre-wrap">
{`<script>
    // エスケープ不要
    const user = {{ $user->name }};
</script>`}
                                </pre>
                            </div>
                        </div>

                        {/* Case 2 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                2. verbatim ディレクティブの使用
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                @verbatim と @endverbatim で囲むと、その中のBladeは無視されます。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`@verbatim
    <p>この中では {{ $var }} をエスケープ不要</p>
    @if($condition)
        エスケープ不要
    @endif
@endverbatim`}
                                </pre>
                            </div>
                            <div className="border-6 border-black bg-yellow-100 p-6">
                                <p className="text-base font-black text-black uppercase mb-2">
                                    注意:
                                </p>
                                <p className="text-base font-bold text-black">
                                    verbatim内では全てのBladeが無視されるため、実際のBladeコードも動作しません。
                                </p>
                            </div>
                        </div>

                        {/* Case 3 */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                3. コメント内
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                HTMLコメントやBladeコメント内ではエスケープ不要です。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                <pre className="whitespace-pre-wrap">
{`<!-- @csrf はエスケープ不要 -->

{{--
    Bladeコメント内も
    @if や {{ $var }} のエスケープ不要
--}}`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Debug Section */}
                    <div className="mb-12 border-8 border-black bg-orange-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            デバッグ方法
                        </h2>
                        <p className="text-lg font-bold text-black mb-6">
                            エスケープ忘れでエラーが出た場合の対処法：
                        </p>

                        {/* Debug Step 1 */}
                        <div className="mb-6 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                1. エラーメッセージを確認
                            </h3>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
                                    syntax error, unexpected end of file, expecting "elseif" or "else" or "endif"
                                </pre>
                            </div>
                            <p className="text-base font-bold text-black">
                                このエラーは、@if や @error が閉じられていない可能性を示します。
                            </p>
                        </div>

                        {/* Debug Step 2 */}
                        <div className="mb-6 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                2. grep で検索
                            </h3>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                <pre className="whitespace-pre-wrap">
{`# ディレクティブを検索
grep -n "@if\\|@error\\|@foreach" yourfile.blade.php

# echo構文を検索
grep -n "{{ " yourfile.blade.php`}
                                </pre>
                            </div>
                        </div>

                        {/* Debug Step 3 */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                3. ビューキャッシュをクリア
                            </h3>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                <pre>php artisan view:clear</pre>
                            </div>
                        </div>
                    </div>

                    {/* Checklist Section */}
                    <div className="mb-12 border-8 border-black bg-pink-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-6 uppercase">
                            チェックリスト
                        </h2>
                        <p className="text-lg font-bold text-black mb-6">
                            コードサンプルを追加する際のチェックリスト：
                        </p>
                        <ul className="space-y-4">
                            <li className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    @csrf、@if、@error などのディレクティブを @@ に変更したか？
                                </p>
                            </li>
                            <li className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    {"{{ }}"}, {"{!! !!}"} のechoを {"@{{ }}"}, {"@{!! !!}"} に変更したか？
                                </p>
                            </li>
                            <li className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    HTMLタグを &amp;lt; と &amp;gt; でエスケープしたか？
                                </p>
                            </li>
                            <li className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    ビューキャッシュをクリアしたか？
                                </p>
                            </li>
                            <li className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    ブラウザで表示を確認したか？
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Summary Section */}
                    <div className="mb-12 border-8 border-black bg-cyan-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            まとめ
                        </h2>
                        <div className="border-6 border-black bg-white overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="border-4 border-black px-6 py-4 text-left font-black uppercase">
                                            シチュエーション
                                        </th>
                                        <th className="border-4 border-black px-6 py-4 text-left font-black uppercase">
                                            対処法
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            Bladeディレクティブを文字列として表示したい
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @ を @@ に変更（@ → @@）
                                        </td>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            Blade echo構文を文字列として表示したい
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @ を @@ に変更（{"{{ }}"} → {"@{{ }}"}）
                                        </td>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            大量のBladeコードをサンプル表示したい
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            @verbatim ディレクティブで囲む
                                        </td>
                                    </tr>
                                    <tr className="border-4 border-black">
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            HTMLタグを表示したい
                                        </td>
                                        <td className="border-4 border-black px-6 py-4 font-bold">
                                            &amp;lt; と &amp;gt; を使う
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
