import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="エラー修正の流れ" />
            <div className="theme-errorfix">

                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                </div>

                <h1>🔧 Laravel エラー修正の流れ</h1>
                <p>
                    実際に発生したBladeテンプレートのsyntax
                    errorを例に、エラー修正の流れを学びます。
                </p>

                <div className="section">
                    <h2>❌ 発生したエラー</h2>
                    <div className="error-box">
                        <div className="error-title">ParseError</div>
                        <pre>
                            {`syntax error, unexpected end of file, expecting "elseif" or "else" or "endif"

Location: /workspace/resources/views/validation/guide.blade.php
HTTP Status: 500`}
                        </pre>
                    </div>
                    <p>
                        ブラウザで <span className="command">/validation/guide</span>{" "}
                        にアクセスすると500エラーが発生しました。
                    </p>
                </div>

                <div className="section">
                    <h2>🔍 エラー修正の手順</h2>

                    <div className="step">
                        <h3>
                            <span className="step-number">1</span>エラーメッセージを確認
                        </h3>
                        <p>まず、エラーメッセージから以下の情報を読み取ります：</p>
                        <ul>
                            <li>
                                <strong>エラーの種類</strong>: ParseError (構文エラー)
                            </li>
                            <li>
                                <strong>エラー内容</strong>: unexpected end of file, expecting
                                "elseif" or "else" or "endif"
                            </li>
                            <li>
                                <strong>発生場所</strong>: validation/guide.blade.php
                            </li>
                        </ul>
                        <div className="tip">
                            <strong>💡 ポイント:</strong>
                            <br />
                            "expecting endif" というエラーは、@if や @error
                            などのBladeディレクティブが閉じられていない可能性を示唆しています。
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">2</span>ビューキャッシュをクリア
                        </h3>
                        <p>Laravelはビューをキャッシュするため、まずキャッシュをクリアします。</p>
                        <div className="code-block">
                            <pre>php artisan view:clear</pre>
                        </div>
                        <p>
                            これにより{" "}
                            <span className="command">storage/framework/views/</span>{" "}
                            内のコンパイル済みビューが削除されます。
                        </p>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">3</span>Laravelのログを確認
                        </h3>
                        <p>より詳細な情報を得るため、ログファイルを確認します。</p>
                        <div className="code-block">
                            <pre>tail -50 /workspace/storage/logs/laravel.log</pre>
                        </div>
                        <p>ログから以下の情報が得られました：</p>
                        <div className="code-block">
                            <pre>
                                {`ParseError(code: 0): syntax error, unexpected end of file,
expecting "elseif" or "else" or "endif"
at /workspace/storage/framework/views/181514fb91e1a583a6ded8d0aacd403c.php:361`}
                            </pre>
                        </div>
                        <div className="tip">
                            <strong>💡 ポイント:</strong>
                            <br />
                            コンパイルされたビューの361行目でエラーが発生していることがわかります。
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">4</span>Bladeディレクティブを探す
                        </h3>
                        <p>ファイル内のBladeディレクティブを確認します。</p>
                        <div className="code-block">
                            <pre>
                                grep -n "@if\|@endif\|@else\|@error"
                                validation/guide.blade.php
                            </pre>
                        </div>
                        <p>この時点では特に問題は見つかりませんでした。</p>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">5</span>Blade echo構文を探す
                        </h3>
                        <p>
                            次に、Bladeのecho構文{" "}
                            <span className="command">{"{{ }}"}</span> を探します。
                        </p>
                        <div className="code-block">
                            <pre>
                                {`grep -n "@{{ " /workspace/resources/views/validation/guide.blade.php`}
                            </pre>
                        </div>
                        <p>結果：</p>
                        <div className="code-block">
                            <pre>
                                {`306:    <input type="text" name="name" value="@{{ old('name') }}">
308:        <div class="error">@{{ $message }}</div>
311:    <input type="email" name="email" value="@{{ old('email') }}">
313:        <div class="error">@{{ $message }}</div>`}
                            </pre>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">6</span>問題を特定
                        </h3>
                        <p>
                            コードブロック内（HTMLエスケープされた部分）で、Bladeディレクティブがエスケープされていないことが判明しました。
                        </p>
                        <div className="error-box">
                            <div className="error-title">問題のコード</div>
                            <pre>
                                {`<pre>
    @csrf
    <input type="text" name="name" value="@{{ old('name') }}">
    @error('name')
        <div class="error">@{{ $message }}</div>
    @enderror
</pre>`}
                            </pre>
                        </div>
                        <p>
                            HTMLタグは &lt; と &gt;
                            でエスケープされていますが、Bladeディレクティブ（@csrf、@error）と
                            echo構文（{"@{{ }}"}）はエスケープされていません。
                        </p>
                        <p>
                            Bladeエンジンはこれらを実際のディレクティブとして解釈しようとし、正しく閉じられていないためエラーが発生しました。
                        </p>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">7</span>修正を実施
                        </h3>
                        <p>Bladeディレクティブを正しくエスケープします。</p>
                        <div className="success">
                            <strong>✓ 修正後のコード</strong>
                            <div className="code-block">
                                <pre>
                                    {`<pre>
    @@csrf
    <input type="text" name="name" value="@@{{ old('name') }}">
    @@error('name')
        <div class="error">@@{{ $message }}</div>
    @@enderror
</pre>`}
                                </pre>
                            </div>
                            <p>
                                <strong>エスケープルール:</strong>
                            </p>
                            <ul>
                                <li>
                                    <span className="command">@</span> →{" "}
                                    <span className="command">@@</span> (@を2回重ねる)
                                </li>
                                <li>
                                    <span className="command">{"{{ }}"}</span> →{" "}
                                    <span className="command">{"@{{ }}"}</span> (@を@@に変更)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="step">
                        <h3>
                            <span className="step-number">8</span>キャッシュクリアと確認
                        </h3>
                        <p>再度ビューキャッシュをクリアして、修正を確認します。</p>
                        <div className="code-block">
                            <pre>php artisan view:clear</pre>
                        </div>
                        <p>
                            ブラウザで <span className="command">/validation/guide</span>{" "}
                            にアクセスして、エラーが解消されたことを確認します。
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h2>📚 学んだこと</h2>
                    <ul>
                        <li>
                            <strong>エラーログの重要性</strong>:
                            storage/logs/laravel.log には詳細な情報が記録される
                        </li>
                        <li>
                            <strong>ビューキャッシュ</strong>: 変更が反映されない時は php
                            artisan view:clear を実行
                        </li>
                        <li>
                            <strong>Bladeエスケープ</strong>:
                            <ul>
                                <li>
                                    コードサンプルとして表示したいBladeディレクティブは必ずエスケープする
                                </li>
                                <li>@@ を使ってディレクティブをエスケープできる</li>
                            </ul>
                        </li>
                        <li>
                            <strong>grep コマンド</strong>:
                            ファイル内の特定パターンを検索するのに便利
                        </li>
                        <li>
                            <strong>段階的デバッグ</strong>: エラーメッセージ → ログ →
                            ディレクティブ → echo構文と順に調査
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h2>🛠️ よくあるBladeエラーと対処法</h2>

                    <h3>1. unexpected end of file</h3>
                    <ul>
                        <li>@if、@foreach、@error などが閉じられていない</li>
                        <li>対処: 対応する @endif、@endforeach、@enderror を確認</li>
                    </ul>

                    <h3>2. Undefined variable</h3>
                    <ul>
                        <li>コントローラーからビューに渡していない変数を使用</li>
                        <li>対処: コントローラーで変数を渡しているか確認</li>
                    </ul>

                    <h3>3. Call to undefined method</h3>
                    <ul>
                        <li>存在しないメソッドを呼び出している</li>
                        <li>
                            対処: メソッド名のスペルミスや、メソッドの存在を確認
                        </li>
                    </ul>

                    <h3>4. CSRF token mismatch</h3>
                    <ul>
                        <li>POSTフォームに @csrf ディレクティブがない</li>
                        <li>対処: フォーム内に @csrf を追加</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>🔧 デバッグに便利なコマンド</h2>
                    <div className="code-block">
                        <pre>
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

                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                </div>
            </div>
        </>
    );
}
