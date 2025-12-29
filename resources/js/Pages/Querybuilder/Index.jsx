import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder 挙動確認" />

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation */}
                    <nav className="flex gap-4 mb-12">
                        <Link
                            href="/"
                            className="bg-purple-100 text-purple-700 px-6 py-2.5 rounded-full border-2 border-purple-200 hover:bg-purple-200 hover:border-purple-300 transition-all font-medium text-sm"
                        >
                            ← HOME
                        </Link>
                        <Link
                            href="/querybuilder/guide"
                            className="bg-pink-100 text-pink-700 px-6 py-2.5 rounded-full border-2 border-pink-200 hover:bg-pink-200 hover:border-pink-300 transition-all font-medium text-sm"
                        >
                            GUIDE →
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-purple-100 shadow-sm">
                        <h1 className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Query Builder 内部挙動確認
                        </h1>
                    </div>

                    {/* Simple Query Section */}
                    <section className="mb-12">
                        <div className="bg-purple-50/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-200 shadow-sm">
                            <h2 className="text-3xl font-semibold text-purple-700 mb-6">
                                シンプルなクエリ
                            </h2>

                            <div className="space-y-5">
                                <div className="bg-white/80 rounded-2xl p-4 border border-purple-100">
                                    <pre className="text-gray-700 font-mono text-sm">{`$query = User::where('age', '>', 18);`}</pre>
                                </div>

                                <div>
                                    <label className="text-xs text-purple-600 uppercase tracking-wider mb-2 block font-semibold">
                                        生成されるSQL
                                    </label>
                                    <div className="bg-purple-100/80 rounded-2xl p-4 border border-purple-200">
                                        <pre className="text-purple-800 font-mono text-sm font-medium">{simpleQuery.sql}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-purple-600 uppercase tracking-wider mb-2 block font-semibold">
                                        WHERE条件の内部状態
                                    </label>
                                    <div className="bg-white/80 rounded-2xl p-4 border border-purple-100 overflow-x-auto">
                                        <pre className="text-gray-600 font-mono text-xs">{JSON.stringify(simpleQuery.wheres, null, 2)}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-purple-600 uppercase tracking-wider mb-2 block font-semibold">
                                        バインディング
                                    </label>
                                    <div className="bg-white/80 rounded-2xl p-4 border border-purple-100">
                                        <pre className="text-gray-600 font-mono text-xs">{JSON.stringify(simpleQuery.bindings, null, 2)}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Complex Query Section */}
                    <section className="mb-12">
                        <div className="bg-pink-50/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-pink-200 shadow-sm">
                            <h2 className="text-3xl font-semibold text-pink-700 mb-6">
                                複雑なクエリ（複数条件）
                            </h2>

                            <div className="space-y-5">
                                <div className="bg-white/80 rounded-2xl p-4 border border-pink-100">
                                    <pre className="text-gray-700 font-mono text-sm">{`$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');`}</pre>
                                </div>

                                <div>
                                    <label className="text-xs text-pink-600 uppercase tracking-wider mb-2 block font-semibold">
                                        生成されるSQL
                                    </label>
                                    <div className="bg-pink-100/80 rounded-2xl p-4 border border-pink-200">
                                        <pre className="text-pink-800 font-mono text-sm font-medium">{complexQuery.sql}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-pink-600 uppercase tracking-wider mb-2 block font-semibold">
                                        WHERE条件の内部状態
                                    </label>
                                    <div className="bg-white/80 rounded-2xl p-4 border border-pink-100 overflow-x-auto">
                                        <pre className="text-gray-600 font-mono text-xs">{JSON.stringify(complexQuery.wheres, null, 2)}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-pink-600 uppercase tracking-wider mb-2 block font-semibold">
                                        バインディング
                                    </label>
                                    <div className="bg-white/80 rounded-2xl p-4 border border-pink-100">
                                        <pre className="text-gray-600 font-mono text-xs">{JSON.stringify(complexQuery.bindings, null, 2)}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Points */}
                    <section>
                        <div className="bg-blue-50/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-200 shadow-sm">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center">
                                <span className="text-3xl mr-3">💡</span>
                                ポイント
                            </h2>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-start gap-3 bg-white/60 rounded-2xl p-4 border border-blue-100">
                                    <span className="text-blue-400 text-lg mt-0.5">▸</span>
                                    <div>
                                        <strong className="text-blue-700 font-semibold">wheres配列:</strong>{" "}
                                        <span className="text-gray-600">各WHERE条件がtype, column, operator, value, booleanを持つ配列として格納されている</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white/60 rounded-2xl p-4 border border-blue-100">
                                    <span className="text-green-400 text-lg mt-0.5">▸</span>
                                    <div>
                                        <strong className="text-blue-700 font-semibold">bindings配列:</strong>{" "}
                                        <span className="text-gray-600">プリペアドステートメントに渡される実際の値が格納されている</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white/60 rounded-2xl p-4 border border-blue-100">
                                    <span className="text-purple-400 text-lg mt-0.5">▸</span>
                                    <div>
                                        <strong className="text-blue-700 font-semibold">SQL:</strong>{" "}
                                        <span className="text-gray-600">実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white/60 rounded-2xl p-4 border border-blue-100">
                                    <span className="text-pink-400 text-lg mt-0.5">▸</span>
                                    <div>
                                        <strong className="text-blue-700 font-semibold">boolean:</strong>{" "}
                                        <span className="text-gray-600">'and'または'or'で、次の条件との論理演算子を示す</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
