@extends('layouts.app')

@section('title', 'Blade エスケープ完全ガイド')
@section('theme', 'theme-bladeescape')

@section('content')
    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
    </div>

    <h1>📝 Blade エスケープ完全ガイド</h1>
    <p>Bladeテンプレートでコードサンプルを表示する際のエスケープ方法を網羅的に解説します。</p>

    <div class="section">
        <h2>❓ なぜエスケープが必要？</h2>
        <p>Bladeテンプレートでは、ディレクティブやecho構文をそのまま書くと、Bladeエンジンが実際のコードとして実行してしまいます。</p>

        <div class="bad">
            <strong>❌ エスケープしない場合（エラー発生）</strong>
            <div class="code-block">
                <pre>&lt;pre&gt;
    @@csrf
    @{{ $user->name }}
    @@error('email')
        エラーメッセージ
    @@enderror
&lt;/pre&gt;</pre>
            </div>
            <p><strong>問題点:</strong> Bladeエンジンがこれらを実際のディレクティブとして解釈し、syntax errorが発生します。</p>
        </div>

        <div class="good">
            <strong>✓ 正しくエスケープした場合</strong>
            <div class="code-block">
                <pre>&lt;pre&gt;
    @@@@csrf
    @@{{ $user->name }}
    @@@@error('email')
        エラーメッセージ
    @@@@enderror
&lt;/pre&gt;</pre>
            </div>
            <p><strong>結果:</strong> ブラウザで正しく表示されます。</p>
        </div>
    </div>

    <div class="section">
        <h2>📚 エスケープルール一覧</h2>
        <table>
            <thead>
                <tr>
                    <th>表示したい内容</th>
                    <th>ファイルに書くコード</th>
                    <th>説明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="command">@@csrf</span></td>
                    <td><span class="command">@@@@csrf</span></td>
                    <td>@を2回重ねる</td>
                </tr>
                <tr>
                    <td><span class="command">@@if</span></td>
                    <td><span class="command">@@@@if</span></td>
                    <td>@を2回重ねる</td>
                </tr>
                <tr>
                    <td><span class="command">@@error</span></td>
                    <td><span class="command">@@@@error</span></td>
                    <td>@を2回重ねる</td>
                </tr>
                <tr>
                    <td><span class="command">@@foreach</span></td>
                    <td><span class="command">@@@@foreach</span></td>
                    <td>@を2回重ねる</td>
                </tr>
                <tr>
                    <td><span class="command">@{{ $var }}</span></td>
                    <td><span class="command">@@{{ $var }}</span></td>
                    <td>@を@@に変更</td>
                </tr>
                <tr>
                    <td><span class="command">@{!! $html !!}</span></td>
                    <td><span class="command">@@{!! $html !!}</span></td>
                    <td>@を@@に変更</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section">
        <h2>🎯 よくあるエスケープ忘れパターン</h2>

        <h3>パターン1: ディレクティブのエスケープ忘れ</h3>
        <div class="bad">
            <strong>❌ 間違い</strong>
            <div class="code-block">
                <pre>&lt;p&gt;使い方: @@csrf をフォーム内に追加&lt;/p&gt;</pre>
            </div>
        </div>
        <div class="good">
            <strong>✓ 正解</strong>
            <div class="code-block">
                <pre>&lt;p&gt;使い方: @@@@csrf をフォーム内に追加&lt;/p&gt;</pre>
            </div>
        </div>

        <h3>パターン2: echo構文のエスケープ忘れ</h3>
        <div class="bad">
            <strong>❌ 間違い</strong>
            <div class="code-block">
                <pre>&lt;code&gt;@{{ $user->name }}&lt;/code&gt;</pre>
            </div>
        </div>
        <div class="good">
            <strong>✓ 正解</strong>
            <div class="code-block">
                <pre>&lt;code&gt;@@{{ $user->name }}&lt;/code&gt;</pre>
            </div>
        </div>

        <h3>パターン3: コードブロック内のエスケープ忘れ</h3>
        <div class="bad">
            <strong>❌ 間違い</strong>
            <div class="code-block">
                <pre>&lt;pre&gt;
@@if($user)
    @{{ $user->name }}
@@endif
&lt;/pre&gt;</pre>
            </div>
        </div>
        <div class="good">
            <strong>✓ 正解</strong>
            <div class="code-block">
                <pre>&lt;pre&gt;
@@@@if($user)
    @@{{ $user->name }}
@@@@endif
&lt;/pre&gt;</pre>
            </div>
        </div>

        <h3>パターン4: 説明文中のエスケープ忘れ</h3>
        <div class="bad">
            <strong>❌ 間違い</strong>
            <div class="code-block">
                <pre>&lt;p&gt;@@error ディレクティブでエラーを表示&lt;/p&gt;</pre>
            </div>
        </div>
        <div class="good">
            <strong>✓ 正解</strong>
            <div class="code-block">
                <pre>&lt;p&gt;@@@@error ディレクティブでエラーを表示&lt;/p&gt;</pre>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>🔧 実践例：フォームのサンプルコード表示</h2>
        <p>以下は、Bladeテンプレートでフォームのサンプルコードを表示する完全な例です。</p>

        <div class="code-block">
            <pre>&lt;div class="example"&gt;
    &lt;h3&gt;フォームの書き方&lt;/h3&gt;
    &lt;pre&gt;
&lt;form method="POST" action="/submit"&gt;
    @@@@csrf

    &lt;input type="text" name="name" value="@@{{ old('name') }}"&gt;
    @@@@error('name')
        &lt;div class="error"&gt;@@{{ $message }}&lt;/div&gt;
    @@@@enderror

    &lt;button type="submit"&gt;送信&lt;/button&gt;
&lt;/form&gt;
    &lt;/pre&gt;
&lt;/div&gt;</pre>
        </div>

        <div class="tip">
            <strong>💡 ポイント:</strong>
            <ul>
                <li>HTMLタグ（&lt;form&gt;、&lt;input&gt;など）は <span class="command">&amp;lt;</span> と <span class="command">&amp;gt;</span> でエスケープ</li>
                <li>Bladeディレクティブ（@@csrf、@@error）は @@@ を @@@@@ に変更</li>
                <li>Blade echo構文（@{{ }}）は @@ を @@@ に変更</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>⚠️ エスケープが不要なケース</h2>

        <h3>1. JavaScript内での使用</h3>
        <p>JavaScriptコード内では、Bladeは実行されないためエスケープ不要です。</p>
        <div class="code-block">
            <pre>&lt;script&gt;
    // エスケープ不要
    const user = @{{ $user->name }};
&lt;/script&gt;</pre>
        </div>

        <h3>2. verbatim ディレクティブの使用</h3>
        <p>@@verbatim と @@endverbatim で囲むと、その中のBladeは無視されます。</p>
        <div class="code-block">
            <pre>@@verbatim
    &lt;p&gt;この中では @@{{ $var }} をエスケープ不要&lt;/p&gt;
    @@if($condition)
        エスケープ不要
    @@endif
@@endverbatim</pre>
        </div>
        <div class="warning">
            <strong>⚠️ 注意:</strong> verbatim内では全てのBladeが無視されるため、実際のBladeコードも動作しません。
        </div>

        <h3>3. コメント内</h3>
        <p>HTMLコメントやBladeコメント内ではエスケープ不要です。</p>
        <div class="code-block">
            <pre>&lt;!-- @@csrf はエスケープ不要 --&gt;

@{{--
    Bladeコメント内も
    @@if や @{{ $var }} のエスケープ不要
--}}</pre>
        </div>
    </div>

    <div class="section">
        <h2>🐛 デバッグ方法</h2>
        <p>エスケープ忘れでエラーが出た場合の対処法：</p>

        <h3>1. エラーメッセージを確認</h3>
        <div class="code-block">
            <pre>syntax error, unexpected end of file, expecting "elseif" or "else" or "endif"</pre>
        </div>
        <p>このエラーは、@@if や @@error が閉じられていない可能性を示します。</p>

        <h3>2. grep で検索</h3>
        <div class="code-block">
            <pre># ディレクティブを検索
grep -n "@@if\|@@error\|@@foreach" yourfile.blade.php

# echo構文を検索
grep -n "@{{ " yourfile.blade.php</pre>
        </div>

        <h3>3. ビューキャッシュをクリア</h3>
        <div class="code-block">
            <pre>php artisan view:clear</pre>
        </div>
    </div>

    <div class="section">
        <h2>📝 チェックリスト</h2>
        <p>コードサンプルを追加する際のチェックリスト：</p>
        <ul>
            <li>☑ @@csrf、@@if、@@error などのディレクティブを @@@@ に変更したか？</li>
            <li>☑ @{{ }}、@{!! !!} のechoを @@{{ }}、@@{!! !!} に変更したか？</li>
            <li>☑ HTMLタグを &amp;lt; と &amp;gt; でエスケープしたか？</li>
            <li>☑ ビューキャッシュをクリアしたか？</li>
            <li>☑ ブラウザで表示を確認したか？</li>
        </ul>
    </div>

    <div class="section">
        <h2>🎓 まとめ</h2>
        <table>
            <thead>
                <tr>
                    <th>シチュエーション</th>
                    <th>対処法</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bladeディレクティブを文字列として表示したい</td>
                    <td>@ を @@ に変更（@@ → @@@@）</td>
                </tr>
                <tr>
                    <td>Blade echo構文を文字列として表示したい</td>
                    <td>@ を @@ に変更（@{{ }} → @@{{ }}）</td>
                </tr>
                <tr>
                    <td>大量のBladeコードをサンプル表示したい</td>
                    <td>@@verbatim ディレクティブで囲む</td>
                </tr>
                <tr>
                    <td>HTMLタグを表示したい</td>
                    <td>&amp;lt; と &amp;gt; を使う</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
    </div>
@endsection
