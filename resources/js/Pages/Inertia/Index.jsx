import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Inertia.js + React 導入ガイド" />

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
                            Inertia.js + React
                            <br />
                            導入ガイド
                        </h1>
                        <div className="border-t-4 border-black pt-6">
                            <p className="text-xl font-bold text-black">
                                LaravelプロジェクトにInertia.jsとReactを導入し、BladeテンプレートからReactコンポーネントへ移行する完全ガイドです。
                            </p>
                        </div>
                    </div>

                    {/* What is Inertia.js */}
                    <div className="mb-12 border-8 border-black bg-cyan-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-6 uppercase">
                            Inertia.jsとは？
                        </h2>
                        <p className="text-lg font-bold text-black mb-6">
                            Inertia.jsは、モダンなモノリシックアプリケーションを構築するためのフレームワークです。
                        </p>
                        <div className="space-y-4">
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • APIを構築せずにSPA（Single Page Application）を実現
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • サーバーサイドルーティングを維持しながらReact/Vue/Svelteを使用可能
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • ページ全体のリロードなしでスムーズなページ遷移
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • サーバーサイドからReactコンポーネントにデータを直接渡せる
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Installation Steps */}
                    <div className="mb-12 border-8 border-black bg-pink-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            導入手順
                        </h2>

                        {/* Step 1 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    1
                                </span>
                                <span className="uppercase">
                                    Composerパッケージのインストール
                                </span>
                            </h3>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre>composer require inertiajs/inertia-laravel</pre>
                            </div>
                            <p className="text-lg font-bold text-black">
                                Inertia.jsのLaravelアダプターをインストールします。
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    2
                                </span>
                                <span className="uppercase">
                                    NPMパッケージのインストール
                                </span>
                            </h3>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`npm install @inertiajs/react react react-dom
npm install --save-dev @vitejs/plugin-react`}
                                </pre>
                            </div>
                            <p className="text-lg font-bold text-black">
                                React関連のパッケージとInertia.jsのReactアダプターをインストールします。
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    3
                                </span>
                                <span className="uppercase">
                                    Vite設定の更新
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    vite.config.js
                                </span>
                                をReact対応に変更します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
    },
});`}
                                </pre>
                            </div>
                            <div className="border-6 border-black bg-yellow-100 p-6">
                                <p className="text-base font-black text-black uppercase mb-2">
                                    ポイント:
                                </p>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            @vitejs/plugin-react
                                        </span>
                                        を追加
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        • エントリーポイントを app.jsx に変更
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    4
                                </span>
                                <span className="uppercase">
                                    ミドルウェアの作成
                                </span>
                            </h3>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre>php artisan inertia:middleware</pre>
                            </div>
                            <p className="text-lg font-bold text-black mb-4">
                                HandleInertiaRequestsミドルウェアが作成されます。
                            </p>
                            <p className="text-lg font-bold text-black mb-4">
                                次に、
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    bootstrap/app.php
                                </span>
                                でミドルウェアを登録します：
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                <pre className="whitespace-pre-wrap">
{`->withMiddleware(function (Middleware $middleware): void {
    $middleware->web(append: [
        \\App\\Http\\Middleware\\HandleInertiaRequests::class,
    ]);
})`}
                                </pre>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    5
                                </span>
                                <span className="uppercase">
                                    ルートテンプレートの作成
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    resources/views/app.blade.php
                                </span>
                                を作成します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laravel Learning Guide</title>
    <link rel="stylesheet" href="/css/app.css" />
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>`}
                                </pre>
                            </div>
                            <div className="border-6 border-black bg-yellow-100 p-6">
                                <p className="text-base font-black text-black uppercase mb-2">
                                    重要なディレクティブ:
                                </p>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            @viteReactRefresh
                                        </span>
                                        : React Fast Refresh有効化
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            @vite
                                        </span>
                                        : JSファイルの読み込み
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            @inertiaHead
                                        </span>
                                        : Head コンポーネントの出力先
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            @inertia
                                        </span>
                                        : React アプリのマウントポイント
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    6
                                </span>
                                <span className="uppercase">
                                    Reactアプリのエントリーポイント作成
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    resources/js/app.jsx
                                </span>
                                を作成します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[\`./Pages/\${name}.jsx\`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});`}
                                </pre>
                            </div>
                            <div className="border-6 border-black bg-yellow-100 p-6">
                                <p className="text-base font-black text-black uppercase mb-2">
                                    ポイント:
                                </p>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            import.meta.glob
                                        </span>
                                        : Viteの機能で Pages配下のコンポーネントを動的にインポート
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        •{" "}
                                        <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                            eager: true
                                        </span>
                                        : 全ページを事前読み込み
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    7
                                </span>
                                <span className="uppercase">
                                    最初のReactコンポーネント作成
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    resources/js/Pages/Welcome.jsx
                                </span>
                                を作成します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                <pre className="whitespace-pre-wrap">
{`import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <h1>Inertia.js + React 起動成功！</h1>
                <p>LaravelからReactページが表示されました。</p>
            </div>
        </>
    );
}`}
                                </pre>
                            </div>
                        </div>

                        {/* Step 8 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    8
                                </span>
                                <span className="uppercase">
                                    コントローラーとルートの設定
                                </span>
                            </h3>
                            <p className="text-lg font-bold text-black mb-4">
                                コントローラーで
                                <span className="bg-black text-green-400 px-3 py-1 font-mono border-4 border-black">
                                    inertia()
                                </span>
                                ヘルパーを使用します。
                            </p>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`// routes/web.php
Route::get('/', function () {
    return inertia('Welcome', [
        'laravelVersion' => app()->version(),
        'phpVersion' => PHP_VERSION,
    ]);
});`}
                                </pre>
                            </div>
                            <div className="border-6 border-black bg-yellow-100 p-6">
                                <p className="text-base font-black text-black uppercase mb-2">
                                    データの渡し方:
                                </p>
                                <ul className="space-y-2">
                                    <li className="text-base font-bold text-black">
                                        • 第1引数: コンポーネント名（Pages/配下の相対パス）
                                    </li>
                                    <li className="text-base font-bold text-black">
                                        • 第2引数: propsとして渡すデータの配列
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 9 */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 flex items-start gap-4">
                                <span className="bg-black text-white px-4 py-2 border-4 border-black">
                                    9
                                </span>
                                <span className="uppercase">
                                    ビルドと動作確認
                                </span>
                            </h3>
                            <div className="border-4 border-black bg-black text-green-400 p-4 font-mono mb-4">
                                <pre className="whitespace-pre-wrap">
{`# 開発モードでビルド（ホットリロード有効）
npm run dev

# 本番用ビルド
npm run build`}
                                </pre>
                            </div>
                            <p className="text-lg font-bold text-black">
                                ブラウザでアクセスして、Reactページが表示されることを確認します！
                            </p>
                        </div>
                    </div>

                    {/* Troubleshooting */}
                    <div className="mb-12 border-8 border-black bg-red-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            よくある問題と解決方法
                        </h2>

                        {/* Problem 1 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                問題1: 409 Conflictエラーが発生する
                            </h3>
                            <div className="border-6 border-black bg-red-50 p-6 mb-4">
                                <p className="text-xl font-black text-black uppercase mb-2">
                                    原因
                                </p>
                                <p className="text-base font-bold text-black">
                                    アセットバージョンの不一致
                                </p>
                            </div>
                            <div className="border-6 border-black bg-green-50 p-6">
                                <p className="text-xl font-black text-black uppercase mb-3">
                                    解決方法
                                </p>
                                <p className="text-base font-bold text-black mb-4">
                                    HandleInertiaRequestsミドルウェアでバージョン管理を実装：
                                </p>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre className="whitespace-pre-wrap">
{`public function version(Request $request): ?string
{
    if (file_exists($manifest = public_path('build/manifest.json'))) {
        return md5_file($manifest);
    }
    return parent::version($request);
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Problem 2 */}
                        <div className="mb-8 border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                問題2: ページ遷移時にCSSが一瞬消える（FOUC）
                            </h3>
                            <div className="border-6 border-black bg-red-50 p-6 mb-4">
                                <p className="text-xl font-black text-black uppercase mb-2">
                                    原因
                                </p>
                                <p className="text-base font-bold text-black">
                                    各コンポーネントでCSSを読み込んでいる
                                </p>
                            </div>
                            <div className="border-6 border-black bg-green-50 p-6">
                                <p className="text-xl font-black text-black uppercase mb-3">
                                    解決方法
                                </p>
                                <p className="text-base font-bold text-black mb-4">
                                    ルートテンプレート（app.blade.php）でCSSを読み込む：
                                </p>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre className="whitespace-pre-wrap">
{`<head>
    <link rel="stylesheet" href="/css/app.css" />
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</head>`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Problem 3 */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black text-black mb-4 uppercase">
                                問題3: JSX内で構文エラーが発生
                            </h3>
                            <div className="border-6 border-black bg-red-50 p-6 mb-4">
                                <p className="text-xl font-black text-black uppercase mb-2">
                                    原因
                                </p>
                                <p className="text-base font-bold text-black">
                                    JSX内で特殊文字（&lt;, &gt;, {"{"}など）が正しくエスケープされていない
                                </p>
                            </div>
                            <div className="border-6 border-black bg-green-50 p-6">
                                <p className="text-xl font-black text-black uppercase mb-3">
                                    解決方法
                                </p>
                                <p className="text-base font-bold text-black mb-4">
                                    テンプレートリテラルを使用：
                                </p>
                                <div className="border-4 border-black bg-black text-green-400 p-4 font-mono">
                                    <pre className="whitespace-pre-wrap">
{`// ダメな例
<pre>User::where('age', '>', 18)</pre>

// 良い例
<pre>{\`User::where('age', '>', 18)\`}</pre>`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Learnings */}
                    <div className="mb-12 border-8 border-black bg-green-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            学んだこと
                        </h2>
                        <div className="space-y-4">
                            <div className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    Inertia.jsの役割
                                </strong>
                                <p className="text-base font-bold text-black">
                                    LaravelとReactの橋渡しをする
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    SPAのメリット
                                </strong>
                                <p className="text-base font-bold text-black">
                                    ページ遷移が高速でユーザー体験が向上
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    サーバーサイドルーティング
                                </strong>
                                <p className="text-base font-bold text-black">
                                    APIを作らずにReactが使える
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    コンポーネントベース開発
                                </strong>
                                <p className="text-base font-bold text-black">
                                    再利用可能なUIパーツを作成
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <strong className="text-xl font-black text-black uppercase block mb-2">
                                    Vite
                                </strong>
                                <p className="text-base font-bold text-black">
                                    高速なビルドツールでホットリロードも快適
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="mb-12 border-8 border-black bg-purple-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black text-black mb-8 uppercase">
                            次のステップ
                        </h2>
                        <div className="space-y-4">
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • 既存のBladeページをReactコンポーネントに移行
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • useFormフックでフォーム処理を実装
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • 共有データの設定（認証情報など）
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • ページネーションの実装
                                </p>
                            </div>
                            <div className="border-6 border-black bg-white p-6">
                                <p className="text-base font-bold text-black">
                                    • ファイルアップロードの処理
                                </p>
                            </div>
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
