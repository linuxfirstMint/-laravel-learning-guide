import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder 挙動確認" />
            <div className="theme-querybuilder">
                <link rel="stylesheet" href="/css/app.css" />

                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                    <Link href="/querybuilder/guide">学習ガイドを見る</Link>
                </div>

                <h1>Laravel Query Builder 内部挙動確認</h1>

                <div className="section">
                    <h2>シンプルなクエリ</h2>
                    <div className="code-block">
                        <pre>$query = User::where('age', '>', 18);</pre>
                    </div>

                    <span className="label">生成されるSQL:</span>
                    <div className="code-block">
                        <pre className="sql">{simpleQuery.sql}</pre>
                    </div>

                    <span className="label">WHERE条件の内部状態:</span>
                    <div className="code-block">
                        <pre>{JSON.stringify(simpleQuery.wheres, null, 2)}</pre>
                    </div>

                    <span className="label">バインディング:</span>
                    <div className="code-block">
                        <pre>{JSON.stringify(simpleQuery.bindings, null, 2)}</pre>
                    </div>
                </div>

                <div className="section">
                    <h2>複雑なクエリ（複数条件）</h2>
                    <div className="code-block">
                        <pre>{`$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');`}</pre>
                    </div>

                    <span className="label">生成されるSQL:</span>
                    <div className="code-block">
                        <pre className="sql">{complexQuery.sql}</pre>
                    </div>

                    <span className="label">WHERE条件の内部状態:</span>
                    <div className="code-block">
                        <pre>{JSON.stringify(complexQuery.wheres, null, 2)}</pre>
                    </div>

                    <span className="label">バインディング:</span>
                    <div className="code-block">
                        <pre>{JSON.stringify(complexQuery.bindings, null, 2)}</pre>
                    </div>
                </div>

                <div className="section">
                    <h2>ポイント</h2>
                    <ul>
                        <li>
                            <strong>wheres配列</strong>: 各WHERE条件がtype, column, operator, value,
                            booleanを持つ配列として格納されている
                        </li>
                        <li>
                            <strong>bindings配列</strong>:
                            プリペアドステートメントに渡される実際の値が格納されている
                        </li>
                        <li>
                            <strong>SQL</strong>:
                            実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）
                        </li>
                        <li>
                            <strong>boolean</strong>:
                            'and'または'or'で、次の条件との論理演算子を示す
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
