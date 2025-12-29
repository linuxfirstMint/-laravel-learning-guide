import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder 挙動確認" />

            <div className="min-h-screen bg-gray-950 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation */}
                    <nav className="flex gap-6 mb-12">
                        <Link
                            href="/"
                            className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm"
                        >
                            ← HOME
                        </Link>
                        <Link
                            href="/querybuilder/guide"
                            className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm"
                        >
                            GUIDE →
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-16">
                        Query Builder 内部挙動確認
                    </h1>

                    {/* Simple Query Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                            シンプルなクエリ
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-900 border-l-4 border-cyan-500 p-4">
                                <pre className="text-green-400 font-mono text-sm">{`$query = User::where('age', '>', 18);`}</pre>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block font-mono">
                                    /// 生成されるSQL
                                </label>
                                <div className="bg-black border border-cyan-500/30 p-4 rounded-lg shadow-lg shadow-cyan-500/10">
                                    <pre className="text-cyan-300 font-mono text-sm">{simpleQuery.sql}</pre>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block font-mono">
                                    /// WHERE条件の内部状態
                                </label>
                                <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg overflow-x-auto">
                                    <pre className="text-yellow-300 font-mono text-xs">{JSON.stringify(simpleQuery.wheres, null, 2)}</pre>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block font-mono">
                                    /// バインディング
                                </label>
                                <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg">
                                    <pre className="text-purple-300 font-mono text-xs">{JSON.stringify(simpleQuery.bindings, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Complex Query Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-pink-400 mb-8">
                            複雑なクエリ（複数条件）
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-900 border-l-4 border-pink-500 p-4">
                                <pre className="text-green-400 font-mono text-sm">{`$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');`}</pre>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block font-mono">
                                    /// 生成されるSQL
                                </label>
                                <div className="bg-black border border-pink-500/30 p-4 rounded-lg shadow-lg shadow-pink-500/10">
                                    <pre className="text-pink-300 font-mono text-sm">{complexQuery.sql}</pre>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block font-mono">
                                    /// WHERE条件の内部状態
                                </label>
                                <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg overflow-x-auto">
                                    <pre className="text-yellow-300 font-mono text-xs">{JSON.stringify(complexQuery.wheres, null, 2)}</pre>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block font-mono">
                                    /// バインディング
                                </label>
                                <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg">
                                    <pre className="text-purple-300 font-mono text-xs">{JSON.stringify(complexQuery.bindings, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Points */}
                    <section className="bg-gray-900 border-2 border-gray-700 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <span className="text-3xl mr-3">💡</span>
                            ポイント
                        </h2>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-cyan-400 font-mono text-sm mt-1">▸</span>
                                <div>
                                    <strong className="text-white">wheres配列:</strong>{" "}
                                    各WHERE条件がtype, column, operator, value, booleanを持つ配列として格納されている
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-400 font-mono text-sm mt-1">▸</span>
                                <div>
                                    <strong className="text-white">bindings配列:</strong>{" "}
                                    プリペアドステートメントに渡される実際の値が格納されている
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-yellow-400 font-mono text-sm mt-1">▸</span>
                                <div>
                                    <strong className="text-white">SQL:</strong>{" "}
                                    実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-pink-400 font-mono text-sm mt-1">▸</span>
                                <div>
                                    <strong className="text-white">boolean:</strong>{" "}
                                    'and'または'or'で、次の条件との論理演算子を示す
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
