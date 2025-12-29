import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Inertia.js + React 導入ガイド" />
            <div className="theme-validation">
                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                </div>

                <h1>⚛️ Inertia.js + React 導入ガイド</h1>
                <p>
                    LaravelプロジェクトにInertia.jsとReactを導入し、BladeテンプレートからReactコンポーネントへ移行する完全ガイドです。
                </p>

                <div className="section">
                    <h2>🎯 Inertia.jsとは？</h2>
                    <p>
                        Inertia.jsは、モダンなモノリシックアプリケーションを構築するためのフレームワークです。
                    </p>
                    <ul>
                        <li>APIを構築せずにSPA（Single Page Application）を実現</li>
                        <li>
                            サーバーサイドルーティングを維持しながらReact/Vue/Svelteを使用可能
                        </li>
                        <li>ページ全体のリロードなしでスムーズなページ遷移</li>
                        <li>サーバーサイドからReactコンポーネントにデータを直接渡せる</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>📋 導入手順</h2>

                    <div className="step">
                        <h3>
                            <span className="step-number">1</span>Composerパッケージのインストール
                        </h3>
                        <div className="code-block">
                            <pre>composer require inertiajs/inertia-laravel</pre>
                        </div>
                        <p>Inertia.jsのLaravelアダプターをインストールします。</p>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">2</span>NPMパッケージのインストール
                        </h3>
                        <div className="code-block">
                            <pre>
                                {`npm install @inertiajs/react react react-dom
npm install --save-dev @vitejs/plugin-react`}
                            </pre>
                        </div>
                        <p>React関連のパッケージとInertia.jsのReactアダプターをインストールします。</p>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">3</span>Vite設定の更新
                        </h3>
                        <p>
                            <span className="command">vite.config.js</span>をReact対応に変更します。
                        </p>
                        <div className="code-block">
                            <pre>
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
                        <div className="tip">
                            <strong>💡 ポイント:</strong>
                            <ul>
                                <li>
                                    <span className="command">@vitejs/plugin-react</span>を追加
                                </li>
                                <li>エントリーポイントを app.jsx に変更</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">4</span>ミドルウェアの作成
                        </h3>
                        <div className="code-block">
                            <pre>php artisan inertia:middleware</pre>
                        </div>
                        <p>HandleInertiaRequestsミドルウェアが作成されます。</p>
                        <p>
                            次に、<span className="command">bootstrap/app.php</span>
                            でミドルウェアを登録します：
                        </p>
                        <div className="code-block">
                            <pre>
                                {`->withMiddleware(function (Middleware $middleware): void {
    $middleware->web(append: [
        \\App\\Http\\Middleware\\HandleInertiaRequests::class,
    ]);
})`}
                            </pre>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">5</span>ルートテンプレートの作成
                        </h3>
                        <p>
                            <span className="command">resources/views/app.blade.php</span>
                            を作成します。
                        </p>
                        <div className="code-block">
                            <pre>
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
                        <div className="tip">
                            <strong>💡 重要なディレクティブ:</strong>
                            <ul>
                                <li>
                                    <span className="command">@viteReactRefresh</span>: React
                                    Fast Refresh有効化
                                </li>
                                <li>
                                    <span className="command">@vite</span>: JSファイルの読み込み
                                </li>
                                <li>
                                    <span className="command">@inertiaHead</span>: Head
                                    コンポーネントの出力先
                                </li>
                                <li>
                                    <span className="command">@inertia</span>: React
                                    アプリのマウントポイント
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">6</span>Reactアプリのエントリーポイント作成
                        </h3>
                        <p>
                            <span className="command">resources/js/app.jsx</span>を作成します。
                        </p>
                        <div className="code-block">
                            <pre>
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
                        <div className="tip">
                            <strong>💡 ポイント:</strong>
                            <ul>
                                <li>
                                    <span className="command">import.meta.glob</span>: Viteの機能で
                                    Pages配下のコンポーネントを動的にインポート
                                </li>
                                <li>
                                    <span className="command">eager: true</span>:
                                    全ページを事前読み込み
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">7</span>最初のReactコンポーネント作成
                        </h3>
                        <p>
                            <span className="command">
                                resources/js/Pages/Welcome.jsx
                            </span>
                            を作成します。
                        </p>
                        <div className="code-block">
                            <pre>
                                {`import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <h1>🚀 Inertia.js + React 起動成功！</h1>
                <p>LaravelからReactページが表示されました。</p>
            </div>
        </>
    );
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">8</span>コントローラーとルートの設定
                        </h3>
                        <p>
                            コントローラーで<span className="command">inertia()</span>
                            ヘルパーを使用します。
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// routes/web.php
Route::get('/', function () {
    return inertia('Welcome', [
        'laravelVersion' => app()->version(),
        'phpVersion' => PHP_VERSION,
    ]);
});`}
                            </pre>
                        </div>
                        <div className="tip">
                            <strong>💡 データの渡し方:</strong>
                            <ul>
                                <li>第1引数: コンポーネント名（Pages/配下の相対パス）</li>
                                <li>第2引数: propsとして渡すデータの配列</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">9</span>ビルドと動作確認
                        </h3>
                        <div className="code-block">
                            <pre>
                                {`# 開発モードでビルド（ホットリロード有効）
npm run dev

# 本番用ビルド
npm run build`}
                            </pre>
                        </div>
                        <p>ブラウザでアクセスして、Reactページが表示されることを確認します！</p>
                    </div>
                </div>

                <div className="section">
                    <h2>🔧 よくある問題と解決方法</h2>

                    <h3>問題1: 409 Conflictエラーが発生する</h3>
                    <div className="error-box">
                        <div className="error-title">原因</div>
                        <p>アセットバージョンの不一致</p>
                    </div>
                    <div className="good">
                        <strong>✓ 解決方法</strong>
                        <p>
                            HandleInertiaRequestsミドルウェアでバージョン管理を実装：
                        </p>
                        <div className="code-block">
                            <pre>
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

                    <h3>問題2: ページ遷移時にCSSが一瞬消える（FOUC）</h3>
                    <div className="error-box">
                        <div className="error-title">原因</div>
                        <p>各コンポーネントでCSSを読み込んでいる</p>
                    </div>
                    <div className="good">
                        <strong>✓ 解決方法</strong>
                        <p>ルートテンプレート（app.blade.php）でCSSを読み込む：</p>
                        <div className="code-block">
                            <pre>
                                {`<head>
    <link rel="stylesheet" href="/css/app.css" />
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</head>`}
                            </pre>
                        </div>
                    </div>

                    <h3>問題3: JSX内で構文エラーが発生</h3>
                    <div className="error-box">
                        <div className="error-title">原因</div>
                        <p>
                            JSX内で特殊文字（&lt;, &gt;, {"{"}など）が正しくエスケープされていない
                        </p>
                    </div>
                    <div className="good">
                        <strong>✓ 解決方法</strong>
                        <p>テンプレートリテラルを使用：</p>
                        <div className="code-block">
                            <pre>
                                {`// ❌ ダメな例
<pre>User::where('age', '>', 18)</pre>

// ✓ 良い例
<pre>{\`User::where('age', '>', 18)\`}</pre>`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>📚 学んだこと</h2>
                    <ul>
                        <li>
                            <strong>Inertia.jsの役割</strong>:
                            LaravelとReactの橋渡しをする
                        </li>
                        <li>
                            <strong>SPAのメリット</strong>:
                            ページ遷移が高速でユーザー体験が向上
                        </li>
                        <li>
                            <strong>サーバーサイドルーティング</strong>:
                            APIを作らずにReactが使える
                        </li>
                        <li>
                            <strong>コンポーネントベース開発</strong>:
                            再利用可能なUIパーツを作成
                        </li>
                        <li>
                            <strong>Vite</strong>: 高速なビルドツールでホットリロードも快適
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h2>🚀 次のステップ</h2>
                    <ul>
                        <li>既存のBladeページをReactコンポーネントに移行</li>
                        <li>useFormフックでフォーム処理を実装</li>
                        <li>共有データの設定（認証情報など）</li>
                        <li>ページネーションの実装</li>
                        <li>ファイルアップロードの処理</li>
                    </ul>
                </div>

                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                </div>
            </div>
        </>
    );
}
