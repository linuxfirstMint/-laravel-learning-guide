import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Result({ state }) {
    return (
        <>
            <Head title="Validation 結果" />
            <div className="theme-validation">

                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                    <Link href="/validation">フォームに戻る</Link>
                    <Link href="/validation/guide">学習ガイドを見る</Link>
                </div>

                <h1>Validation 結果</h1>

                <div className="section">
                    <h2>バリデーション結果</h2>
                    {state.passes ? (
                        <div className="status success">✓ バリデーション成功</div>
                    ) : (
                        <div className="status error">✗ バリデーション失敗</div>
                    )}
                </div>

                <div className="section">
                    <h2>入力データ</h2>
                    <div className="code-block">
                        <pre>{JSON.stringify(state.input, null, 2)}</pre>
                    </div>
                </div>

                <div className="section">
                    <h2>バリデーションルール</h2>
                    <div className="code-block">
                        <pre>{JSON.stringify(state.rules, null, 2)}</pre>
                    </div>
                </div>

                {state.fails && (
                    <div className="section">
                        <h2>エラー詳細</h2>
                        <div className="code-block">
                            <pre>{JSON.stringify(state.errors, null, 2)}</pre>
                        </div>
                    </div>
                )}

                {state.passes && (
                    <div className="section">
                        <h2>検証済みデータ</h2>
                        <p>バリデーションを通過したデータのみが含まれます。</p>
                        <div className="code-block">
                            <pre>{JSON.stringify(state.validated, null, 2)}</pre>
                        </div>
                    </div>
                )}

                <div className="section">
                    <h2>内部状態</h2>
                    <span className="label">passes():</span>
                    <div className="code-block">
                        <pre>{state.passes ? "true" : "false"}</pre>
                    </div>

                    <span className="label">fails():</span>
                    <div className="code-block">
                        <pre>{state.fails ? "true" : "false"}</pre>
                    </div>
                </div>

                <div className="section">
                    <h2>ポイント</h2>
                    <ul>
                        <li>
                            <strong>Validator::make()</strong>: バリデーターインスタンスを作成
                        </li>
                        <li>
                            <strong>passes()</strong>: バリデーションが成功したかを返す
                        </li>
                        <li>
                            <strong>fails()</strong>: バリデーションが失敗したかを返す
                        </li>
                        <li>
                            <strong>errors()</strong>: エラーメッセージの配列を取得
                        </li>
                        <li>
                            <strong>validated()</strong>:
                            検証済みデータのみを取得（余計なフィールドを除外）
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
