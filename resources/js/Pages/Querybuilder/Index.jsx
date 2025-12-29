import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder 挙動確認" />

            <div className="min-h-screen bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation */}
                    <nav className="flex gap-6 mb-12 text-sm">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                            ← ホーム
                        </Link>
                        <Link
                            href="/querybuilder/guide"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            学習ガイド →
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <h1 className="text-4xl font-light text-gray-900 mb-16 border-b border-gray-200 pb-6">
                        Query Builder 内部挙動確認
                    </h1>

                    {/* Simple Query Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-light text-gray-900 mb-6">
                            シンプルなクエリ
                        </h2>

                        <div className="space-y-6">
                            <div className="border-l-2 border-gray-300 pl-4">
                                <pre className="text-sm text-gray-700 font-mono">{`$query = User::where('age', '>', 18);`}</pre>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                                    生成されるSQL
                                </label>
                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <pre className="text-sm text-gray-800 font-mono">{simpleQuery.sql}</pre>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                                    WHERE条件の内部状態
                                </label>
                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <pre className="text-xs text-gray-700 font-mono overflow-x-auto">{JSON.stringify(simpleQuery.wheres, null, 2)}</pre>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                                    バインディング
                                </label>
                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <pre className="text-xs text-gray-700 font-mono">{JSON.stringify(simpleQuery.bindings, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Complex Query Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-light text-gray-900 mb-6">
                            複雑なクエリ（複数条件）
                        </h2>

                        <div className="space-y-6">
                            <div className="border-l-2 border-gray-300 pl-4">
                                <pre className="text-sm text-gray-700 font-mono">{`$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');`}</pre>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                                    生成されるSQL
                                </label>
                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <pre className="text-sm text-gray-800 font-mono">{complexQuery.sql}</pre>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                                    WHERE条件の内部状態
                                </label>
                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <pre className="text-xs text-gray-700 font-mono overflow-x-auto">{JSON.stringify(complexQuery.wheres, null, 2)}</pre>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                                    バインディング
                                </label>
                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <pre className="text-xs text-gray-700 font-mono">{JSON.stringify(complexQuery.bindings, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Points */}
                    <section className="border-t border-gray-200 pt-12">
                        <h2 className="text-2xl font-light text-gray-900 mb-6">ポイント</h2>
                        <dl className="space-y-4">
                            <div>
                                <dt className="font-medium text-gray-900 mb-1">wheres配列</dt>
                                <dd className="text-sm text-gray-600">
                                    各WHERE条件がtype, column, operator, value, booleanを持つ配列として格納されている
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900 mb-1">bindings配列</dt>
                                <dd className="text-sm text-gray-600">
                                    プリペアドステートメントに渡される実際の値が格納されている
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900 mb-1">SQL</dt>
                                <dd className="text-sm text-gray-600">
                                    実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900 mb-1">boolean</dt>
                                <dd className="text-sm text-gray-600">
                                    'and'または'or'で、次の条件との論理演算子を示す
                                </dd>
                            </div>
                        </dl>
                    </section>
                </div>
            </div>
        </>
    );
}
