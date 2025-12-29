import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="リファクタリング実践" />
            <div className="theme-validation">

                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                </div>

                <h1>🔨 Laravel リファクタリング実践</h1>
                <p>
                    実際のプロジェクトで行ったコード重複の削減とレイアウトの共通化を8ステップで解説します。
                </p>

                <div className="section">
                    <h2>🎯 リファクタリングの目的</h2>
                    <p>
                        このLaravel学習ガイドプロジェクトでは、各ページに同じようなCSSとHTMLが重複していました。
                    </p>
                    <div className="warning">
                        <strong>⚠️ リファクタリング前の問題:</strong>
                        <ul>
                            <li>8つのBladeファイルに約700行のCSS重複（全体の40%）</li>
                            <li>ナビゲーションリンクが各ファイルに重複</li>
                            <li>HTML構造（section、code-block等）が重複</li>
                            <li>テーマカラーの変更に8ファイル修正が必要</li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h2>📋 リファクタリングの流れ</h2>

                    <div className="step">
                        <h3>
                            <span className="step-number">1</span>問題の分析
                        </h3>
                        <p>まず、プロジェクト全体のコードを分析して重複を特定します。</p>
                        <div className="code-block">
                            <pre>
                                {`# Bladeファイルの総行数を確認
find resources/views -name "*.blade.php" -exec wc -l {} + | tail -1

# CSSの重複を確認（style タグ内の行数）
grep -A 1000 "<style>" resources/views/**/*.blade.php | wc -l`}
                            </pre>
                        </div>
                        <div className="tip">
                            <strong>💡 発見した問題:</strong>
                            <ul>
                                <li>総行数: 1,757行</li>
                                <li>CSS重複: 約700行（40%）</li>
                                <li>
                                    共通化可能な要素: ナビゲーション、セクション、コードブロック
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">2</span>共通CSSファイルの作成
                        </h3>
                        <p>
                            <span className="command">public/css/app.css</span>{" "}
                            を作成し、重複していたCSSを抽出します。
                        </p>
                        <div className="code-block">
                            <pre>
                                {`/* 抽出した共通スタイル */
- Base Styles (body, typography, lists)
- Section Containers (.section)
- Code Blocks (.code-block)
- Alert Boxes (.tip, .note, .warning, .good, .bad)
- Navigation (.nav-links)
- Tables
- Form Elements
- CSS Custom Properties（テーマ用）`}
                            </pre>
                        </div>
                        <p>
                            <strong>結果:</strong>{" "}
                            300行の共通CSSファイルを作成（元の700行から約60%削減）
                        </p>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">3</span>CSS Custom Properties でテーマ化
                        </h3>
                        <p>各ページの色をCSS変数で管理できるようにします。</p>
                        <div className="code-block">
                            <pre>
                                {`/* app.css */
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
}`}
                            </pre>
                        </div>
                        <div className="tip">
                            <strong>💡 メリット:</strong>
                            テーマカラーの変更が1行で済むようになりました。
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">4</span>ベースレイアウトの作成
                        </h3>
                        <p>
                            <span className="command">
                                resources/views/layouts/app.blade.php
                            </span>{" "}
                            を作成し、共通HTML構造を定義します。
                        </p>
                        <div className="code-block">
                            <pre>
                                {`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Laravel 学習ガイド')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body class="@yield('theme', '')">
    @yield('content')
</body>
</html>`}
                            </pre>
                        </div>
                        <p>
                            <strong>ポイント:</strong>
                        </p>
                        <ul>
                            <li>
                                <span className="command">@yield('title')</span>:
                                各ページで異なるタイトルを設定
                            </li>
                            <li>
                                <span className="command">@yield('theme')</span>:
                                テーマクラスを動的に設定
                            </li>
                            <li>
                                <span className="command">asset('css/app.css')</span>:
                                共通CSSを読み込み
                            </li>
                        </ul>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">5</span>既存ビューの書き換え
                        </h3>
                        <p>各Bladeファイルを新しいレイアウトを使うように変更します。</p>
                        <div className="good">
                            <strong>✓ Before (115行)</strong>
                            <div className="code-block">
                                <pre>
                                    {`<!DOCTYPE html>
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
</html>`}
                                </pre>
                            </div>
                        </div>
                        <div className="good">
                            <strong>✓ After (64行 - 44%削減)</strong>
                            <div className="code-block">
                                <pre>
                                    {`@extends('layouts.app')

@section('title', 'Query Builder 挙動確認')
@section('theme', 'theme-querybuilder')

@section('content')
    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
    </div>

    <h1>Laravel Query Builder 内部挙動確認</h1>
    <!-- コンテンツ -->
@endsection`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">6</span>クラス名の統一
                        </h3>
                        <p>異なるクラス名で同じ目的のスタイルを統一します。</p>
                        <div className="code-block">
                            <pre>
                                {`# Before
.query-section { ... }  # querybuilder/index.blade.php
.container { ... }      # validation/index.blade.php

# After
.section { ... }        # 全てのページで統一`}
                            </pre>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">7</span>ビューキャッシュクリア
                        </h3>
                        <p>
                            変更を反映するため、Bladeのコンパイル済みキャッシュをクリアします。
                        </p>
                        <div className="code-block">
                            <pre>php artisan view:clear</pre>
                        </div>
                        <p>
                            これにより{" "}
                            <span className="command">storage/framework/views/</span>{" "}
                            内のキャッシュファイルが削除されます。
                        </p>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">8</span>動作確認とテスト
                        </h3>
                        <p>全てのページが正常に表示されることを確認します。</p>
                        <div className="code-block">
                            <pre>
                                {`# 開発サーバーを起動
php artisan serve --port=8001

# 各ルートにアクセスして確認
curl http://localhost:8001/
curl http://localhost:8001/querybuilder
curl http://localhost:8001/validation
curl http://localhost:8001/errorfix
curl http://localhost:8001/bladeescape`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>📊 リファクタリングの成果</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>項目</th>
                                <th>Before</th>
                                <th>After</th>
                                <th>削減率</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>総コード行数</td>
                                <td>1,757行</td>
                                <td>1,100行</td>
                                <td>37%削減</td>
                            </tr>
                            <tr>
                                <td>CSS重複</td>
                                <td>700行（8ファイル）</td>
                                <td>300行（1ファイル）</td>
                                <td>57%削減</td>
                            </tr>
                            <tr>
                                <td>平均ファイルサイズ</td>
                                <td>115行/ファイル</td>
                                <td>64行/ファイル</td>
                                <td>44%削減</td>
                            </tr>
                            <tr>
                                <td>テーマ変更のコスト</td>
                                <td>8ファイル修正</td>
                                <td>1ファイル修正</td>
                                <td>87%削減</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section">
                    <h2>📚 学んだこと</h2>
                    <h3>Bladeレイアウト機能</h3>
                    <ul>
                        <li>
                            <strong>@extends</strong>: 親レイアウトを継承
                        </li>
                        <li>
                            <strong>@section / @endsection</strong>:
                            コンテンツブロックを定義
                        </li>
                        <li>
                            <strong>@yield</strong>: 子ビューからのコンテンツを挿入
                        </li>
                    </ul>

                    <h3>CSS設計のベストプラクティス</h3>
                    <ul>
                        <li>
                            <strong>CSS Custom Properties</strong>:
                            テーマの動的変更に便利
                        </li>
                        <li>
                            <strong>クラス名の統一</strong>: 同じ目的には同じクラス名を使う
                        </li>
                        <li>
                            <strong>外部ファイル化</strong>:
                            HTMLとCSSの分離でメンテナンス性向上
                        </li>
                    </ul>

                    <h3>リファクタリングの原則</h3>
                    <ul>
                        <li>
                            <strong>DRY原則</strong>: Don't Repeat Yourself（繰り返しを避ける）
                        </li>
                        <li>
                            <strong>段階的実施</strong>:
                            一度に全て変えず、ステップバイステップで
                        </li>
                        <li>
                            <strong>動作確認</strong>: 各ステップ後に必ずテストする
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h2>🛠️ さらなる改善案</h2>
                    <ul>
                        <li>
                            <strong>ルートのグループ化</strong>: web.php で関連ルートをまとめる
                        </li>
                        <li>
                            <strong>ディレクトリ構造の統一</strong>: snake_case への変更
                        </li>
                        <li>
                            <strong>コンポーネント化</strong>: ナビゲーションを Blade
                            コンポーネントに
                        </li>
                        <li>
                            <strong>アセットのビルド</strong>: Laravel Mix や Vite
                            でCSSを最適化
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h2>🔍 リファクタリング判断基準</h2>
                    <div className="tip">
                        <strong>💡 いつリファクタリングすべきか:</strong>
                        <ul>
                            <li>同じコードが3回以上出現している</li>
                            <li>変更時に複数ファイルを修正する必要がある</li>
                            <li>ファイルが100行を超えてきた</li>
                            <li>新機能追加が困難になってきた</li>
                        </ul>
                    </div>
                    <div className="warning">
                        <strong>⚠️ 注意点:</strong>
                        <ul>
                            <li>動作しているコードを壊さない（テスト必須）</li>
                            <li>過度な抽象化は避ける（YAGNI原則）</li>
                            <li>チーム全体で合意を得る</li>
                        </ul>
                    </div>
                </div>

                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                </div>
            </div>
        </>
    );
}
