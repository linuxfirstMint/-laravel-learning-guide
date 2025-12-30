import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="リファクタリング実践" />

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
                    </nav>

                    {/* Page Title */}
                    <div className="border-8 border-black bg-white p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h1 className="text-5xl font-black text-black uppercase tracking-tight">
                            Laravel
                            <br />
                            リファクタリング実践
                        </h1>
                    </div>

                    {/* Intro */}
                    <div className="border-6 border-black bg-cyan-100 p-8 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <p className="text-black font-bold text-lg">
                            実際のプロジェクトで行ったコード重複の削減とレイアウトの共通化を8ステップで解説します。
                        </p>
                    </div>

                    {/* Purpose Section */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-yellow-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                リファクタリングの目的
                            </h2>
                            <p className="text-black font-bold mb-6 text-lg">
                                このLaravel学習ガイドプロジェクトでは、各ページに同じようなCSSとHTMLが重複していました。
                            </p>
                            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-start gap-3 mb-4">
                                    <span className="text-3xl">⚠️</span>
                                    <strong className="text-xl font-black uppercase">リファクタリング前の問題:</strong>
                                </div>
                                <ul className="space-y-3 text-black font-bold">
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl font-black">▸</span>
                                        <span>8つのBladeファイルに約700行のCSS重複（全体の40%）</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl font-black">▸</span>
                                        <span>ナビゲーションリンクが各ファイルに重複</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl font-black">▸</span>
                                        <span>HTML構造（section、code-block等）が重複</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl font-black">▸</span>
                                        <span>テーマカラーの変更に8ファイル修正が必要</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Refactoring Steps */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-pink-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                リファクタリングの流れ
                            </h2>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2 border-2 border-black">1</span>
                                        問題の分析
                                    </h3>
                                    <p className="text-black font-bold mb-4">
                                        まず、プロジェクト全体のコードを分析して重複を特定します。
                                    </p>
                                    <div className="bg-black border-4 border-black p-4 mb-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold overflow-x-auto">{`# Bladeファイルの総行数を確認
find resources/views -name "*.blade.php" -exec wc -l {} + | tail -1

# CSSの重複を確認（style タグ内の行数）
grep -A 1000 "<style>" resources/views/**/*.blade.php | wc -l`}</pre>
                                    </div>
                                    <div className="bg-green-100 border-4 border-black p-4">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="text-2xl">💡</span>
                                            <strong className="font-black uppercase text-lg">発見した問題:</strong>
                                        </div>
                                        <ul className="space-y-2 text-black font-bold">
                                            <li className="flex items-start gap-3">
                                                <span className="font-black">▸</span>
                                                <span>総行数: 1,757行</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="font-black">▸</span>
                                                <span>CSS重複: 約700行（40%）</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="font-black">▸</span>
                                                <span>共通化可能な要素: ナビゲーション、セクション、コードブロック</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2 border-2 border-black">2</span>
                                        共通CSSファイルの作成
                                    </h3>
                                    <p className="text-black font-bold mb-4">
                                        <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-mono font-black">public/css/app.css</span>{" "}
                                        を作成し、重複していたCSSを抽出します。
                                    </p>
                                    <div className="bg-black border-4 border-black p-4 mb-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold overflow-x-auto">{`/* 抽出した共通スタイル */
- Base Styles (body, typography, lists)
- Section Containers (.section)
- Code Blocks (.code-block)
- Alert Boxes (.tip, .note, .warning, .good, .bad)
- Navigation (.nav-links)
- Tables
- Form Elements
- CSS Custom Properties（テーマ用）`}</pre>
                                    </div>
                                    <div className="bg-yellow-100 border-4 border-black p-4">
                                        <strong className="font-black uppercase">結果:</strong>{" "}
                                        <span className="font-bold">300行の共通CSSファイルを作成（元の700行から約60%削減）</span>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2 border-2 border-black">3</span>
                                        CSS Custom Properties でテーマ化
                                    </h3>
                                    <p className="text-black font-bold mb-4">
                                        各ページの色をCSS変数で管理できるようにします。
                                    </p>
                                    <div className="bg-black border-4 border-black p-4 mb-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold overflow-x-auto">{`/* app.css */
:root {
    --primary-color: #667eea;
    --primary-hover: #5568d3;
    --secondary-color: #764ba2;
}

.theme-querybuilder {
    --primary-color: #FF2D20;
    --primary-hover: #e02a1b;
}

.theme-errorfix {
    --primary-color: #e74c3c;
    --primary-hover: #c0392b;
}`}</pre>
                                    </div>
                                    <div className="bg-green-100 border-4 border-black p-4">
                                        <div className="flex items-start gap-3">
                                            <span className="text-2xl">💡</span>
                                            <div>
                                                <strong className="font-black uppercase">メリット:</strong>{" "}
                                                <span className="font-bold">テーマカラーの変更が1行で済むようになりました。</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2 border-2 border-black">4</span>
                                        ベースレイアウトの作成
                                    </h3>
                                    <p className="text-black font-bold mb-4">
                                        <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-mono font-black">
                                            resources/views/layouts/app.blade.php
                                        </span>{" "}
                                        を作成し、共通HTML構造を定義します。
                                    </p>
                                    <div className="bg-black border-4 border-black p-4 mb-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold overflow-x-auto">{`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Laravel 学習ガイド')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body class="@yield('theme', '')">
    @yield('content')
</body>
</html>`}</pre>
                                    </div>
                                    <div className="bg-cyan-100 border-4 border-black p-4">
                                        <strong className="font-black uppercase mb-3 block">ポイント:</strong>
                                        <ul className="space-y-2 text-black font-bold">
                                            <li className="flex items-start gap-3">
                                                <span className="font-black">▸</span>
                                                <div>
                                                    <span className="bg-yellow-200 px-1 border border-black font-mono font-black">@yield('title')</span>:
                                                    各ページで異なるタイトルを設定
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="font-black">▸</span>
                                                <div>
                                                    <span className="bg-yellow-200 px-1 border border-black font-mono font-black">@yield('theme')</span>:
                                                    テーマクラスを動的に設定
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="font-black">▸</span>
                                                <div>
                                                    <span className="bg-yellow-200 px-1 border border-black font-mono font-black">asset('css/app.css')</span>:
                                                    共通CSSを読み込み
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2 border-2 border-black">5</span>
                                        既存ビューの書き換え
                                    </h3>
                                    <p className="text-black font-bold mb-4">
                                        各Bladeファイルを新しいレイアウトを使うように変更します。
                                    </p>
                                    <div className="space-y-4">
                                        <div className="bg-red-50 border-4 border-black p-4">
                                            <strong className="font-black uppercase mb-2 block">Before (115行)</strong>
                                            <div className="bg-black border-4 border-black p-4 mt-3">
                                                <pre className="text-green-400 font-mono text-xs font-bold overflow-x-auto">{`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Query Builder 挙動確認</title>
    <style>
        /* 54行のCSS... */
    </style>
</head>
<body>
    <h1>Laravel Query Builder 内部挙動確認</h1>
    <!-- コンテンツ -->
</body>
</html>`}</pre>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 border-4 border-black p-4">
                                            <strong className="font-black uppercase mb-2 block">After (64行 - 44%削減)</strong>
                                            <div className="bg-black border-4 border-black p-4 mt-3">
                                                <pre className="text-green-400 font-mono text-xs font-bold overflow-x-auto">{`@extends('layouts.app')

@section('title', 'Query Builder 挙動確認')
@section('theme', 'theme-querybuilder')

@section('content')
    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
    </div>

    <h1>Laravel Query Builder 内部挙動確認</h1>
    <!-- コンテンツ -->
@endsection`}</pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 6 */}
                                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2 border-2 border-black">6</span>
                                        クラス名の統一
                                    </h3>
                                    <p className="text-black font-bold mb-4">
                                        異なるクラス名で同じ目的のスタイルを統一します。
                                    </p>
                                    <div className="bg-black border-4 border-black p-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold overflow-x-auto">{`# Before
.query-section { ... }  # querybuilder/index.blade.php
.container { ... }      # validation/index.blade.php

# After
.section { ... }        # 全てのページで統一`}</pre>
                                    </div>
                                </div>

                                {/* Step 7 */}
                                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2 border-2 border-black">7</span>
                                        ビューキャッシュクリア
                                    </h3>
                                    <p className="text-black font-bold mb-4">
                                        変更を反映するため、Bladeのコンパイル済みキャッシュをクリアします。
                                    </p>
                                    <div className="bg-black border-4 border-black p-4 mb-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold">php artisan view:clear</pre>
                                    </div>
                                    <p className="text-black font-bold">
                                        これにより{" "}
                                        <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-mono font-black">storage/framework/views/</span>{" "}
                                        内のキャッシュファイルが削除されます。
                                    </p>
                                </div>

                                {/* Step 8 */}
                                <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                        <span className="bg-black text-white px-4 py-2 border-2 border-black">8</span>
                                        動作確認とテスト
                                    </h3>
                                    <p className="text-black font-bold mb-4">
                                        全てのページが正常に表示されることを確認します。
                                    </p>
                                    <div className="bg-black border-4 border-black p-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold overflow-x-auto">{`# 開発サーバーを起動
php artisan serve --port=8001

# 各ルートにアクセスして確認
curl http://localhost:8001/
curl http://localhost:8001/querybuilder
curl http://localhost:8001/validation
curl http://localhost:8001/errorfix
curl http://localhost:8001/bladeescape`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Results Section */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-green-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                リファクタリングの成果
                            </h2>
                            <div className="bg-white border-4 border-black overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-black text-white">
                                        <tr>
                                            <th className="border-4 border-black p-4 text-left font-black uppercase">項目</th>
                                            <th className="border-4 border-black p-4 text-left font-black uppercase">Before</th>
                                            <th className="border-4 border-black p-4 text-left font-black uppercase">After</th>
                                            <th className="border-4 border-black p-4 text-left font-black uppercase">削減率</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-bold">
                                        <tr className="bg-yellow-50">
                                            <td className="border-4 border-black p-4">総コード行数</td>
                                            <td className="border-4 border-black p-4">1,757行</td>
                                            <td className="border-4 border-black p-4">1,100行</td>
                                            <td className="border-4 border-black p-4 bg-green-200">37%削減</td>
                                        </tr>
                                        <tr className="bg-pink-50">
                                            <td className="border-4 border-black p-4">CSS重複</td>
                                            <td className="border-4 border-black p-4">700行（8ファイル）</td>
                                            <td className="border-4 border-black p-4">300行（1ファイル）</td>
                                            <td className="border-4 border-black p-4 bg-green-200">57%削減</td>
                                        </tr>
                                        <tr className="bg-cyan-50">
                                            <td className="border-4 border-black p-4">平均ファイルサイズ</td>
                                            <td className="border-4 border-black p-4">115行/ファイル</td>
                                            <td className="border-4 border-black p-4">64行/ファイル</td>
                                            <td className="border-4 border-black p-4 bg-green-200">44%削減</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="border-4 border-black p-4">テーマ変更のコスト</td>
                                            <td className="border-4 border-black p-4">8ファイル修正</td>
                                            <td className="border-4 border-black p-4">1ファイル修正</td>
                                            <td className="border-4 border-black p-4 bg-green-200">87%削減</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Learnings Section */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-cyan-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                学んだこと
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white border-4 border-black p-6">
                                    <h3 className="text-2xl font-black uppercase mb-4">Bladeレイアウト機能</h3>
                                    <ul className="space-y-3 text-black font-bold">
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-mono font-black">@extends</span>: 親レイアウトを継承
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-mono font-black">@section / @endsection</span>: コンテンツブロックを定義
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-mono font-black">@yield</span>: 子ビューからのコンテンツを挿入
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white border-4 border-black p-6">
                                    <h3 className="text-2xl font-black uppercase mb-4">CSS設計のベストプラクティス</h3>
                                    <ul className="space-y-3 text-black font-bold">
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <strong className="font-black">CSS Custom Properties</strong>: テーマの動的変更に便利
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <strong className="font-black">クラス名の統一</strong>: 同じ目的には同じクラス名を使う
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <strong className="font-black">外部ファイル化</strong>: HTMLとCSSの分離でメンテナンス性向上
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white border-4 border-black p-6">
                                    <h3 className="text-2xl font-black uppercase mb-4">リファクタリングの原則</h3>
                                    <ul className="space-y-3 text-black font-bold">
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <strong className="font-black">DRY原則</strong>: Don't Repeat Yourself（繰り返しを避ける）
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <strong className="font-black">段階的実施</strong>: 一度に全て変えず、ステップバイステップで
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <div>
                                                <strong className="font-black">動作確認</strong>: 各ステップ後に必ずテストする
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Improvement Ideas Section */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-yellow-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                さらなる改善案
                            </h2>
                            <ul className="space-y-4 text-black font-bold">
                                <li className="flex items-start gap-3 bg-white border-4 border-black p-4">
                                    <span className="text-2xl font-black">▸</span>
                                    <div>
                                        <strong className="font-black">ルートのグループ化</strong>: web.php で関連ルートをまとめる
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 bg-white border-4 border-black p-4">
                                    <span className="text-2xl font-black">▸</span>
                                    <div>
                                        <strong className="font-black">ディレクトリ構造の統一</strong>: snake_case への変更
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 bg-white border-4 border-black p-4">
                                    <span className="text-2xl font-black">▸</span>
                                    <div>
                                        <strong className="font-black">コンポーネント化</strong>: ナビゲーションを Blade コンポーネントに
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 bg-white border-4 border-black p-4">
                                    <span className="text-2xl font-black">▸</span>
                                    <div>
                                        <strong className="font-black">アセットのビルド</strong>: Laravel Mix や Vite でCSSを最適化
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Decision Criteria Section */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-pink-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                リファクタリング判断基準
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-green-100 border-4 border-black p-6">
                                    <div className="flex items-start gap-3 mb-4">
                                        <span className="text-3xl">💡</span>
                                        <strong className="text-xl font-black uppercase">いつリファクタリングすべきか:</strong>
                                    </div>
                                    <ul className="space-y-3 text-black font-bold">
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <span>同じコードが3回以上出現している</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <span>変更時に複数ファイルを修正する必要がある</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <span>ファイルが100行を超えてきた</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <span>新機能追加が困難になってきた</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-red-100 border-4 border-black p-6">
                                    <div className="flex items-start gap-3 mb-4">
                                        <span className="text-3xl">⚠️</span>
                                        <strong className="text-xl font-black uppercase">注意点:</strong>
                                    </div>
                                    <ul className="space-y-3 text-black font-bold">
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <span>動作しているコードを壊さない（テスト必須）</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <span>過度な抽象化は避ける（YAGNI原則）</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl font-black">▸</span>
                                            <span>チーム全体で合意を得る</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Navigation */}
                    <nav className="flex gap-6">
                        <Link
                            href="/"
                            className="bg-yellow-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            ← HOME
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
}
