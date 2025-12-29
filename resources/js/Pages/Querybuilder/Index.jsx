import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder 挙動確認" />

            <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
                {/* Background decorative blobs */}
                <div className="absolute top-10 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation */}
                    <nav className="flex gap-6 mb-12">
                        <Link
                            href="/"
                            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-all font-medium"
                        >
                            ← HOME
                        </Link>
                        <Link
                            href="/querybuilder/guide"
                            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-all font-medium"
                        >
                            GUIDE →
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl">
                        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
                            Query Builder 内部挙動確認
                        </h1>
                    </div>

                    {/* Simple Query Section */}
                    <section className="mb-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
                            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow">
                                シンプルなクエリ
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-l-4 border-white/50">
                                    <pre className="text-white font-mono text-sm">{`$query = User::where('age', '>', 18);`}</pre>
                                </div>

                                <div>
                                    <label className="text-xs text-white/70 uppercase tracking-widest mb-2 block font-semibold">
                                        生成されるSQL
                                    </label>
                                    <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-lg">
                                        <pre className="text-blue-900 font-mono text-sm font-semibold">{simpleQuery.sql}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-white/70 uppercase tracking-widest mb-2 block font-semibold">
                                        WHERE条件の内部状態
                                    </label>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 overflow-x-auto">
                                        <pre className="text-yellow-100 font-mono text-xs">{JSON.stringify(simpleQuery.wheres, null, 2)}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-white/70 uppercase tracking-widest mb-2 block font-semibold">
                                        バインディング
                                    </label>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <pre className="text-pink-100 font-mono text-xs">{JSON.stringify(simpleQuery.bindings, null, 2)}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Complex Query Section */}
                    <section className="mb-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
                            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow">
                                複雑なクエリ（複数条件）
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-l-4 border-white/50">
                                    <pre className="text-white font-mono text-sm">{`$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');`}</pre>
                                </div>

                                <div>
                                    <label className="text-xs text-white/70 uppercase tracking-widest mb-2 block font-semibold">
                                        生成されるSQL
                                    </label>
                                    <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-lg">
                                        <pre className="text-blue-900 font-mono text-sm font-semibold">{complexQuery.sql}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-white/70 uppercase tracking-widest mb-2 block font-semibold">
                                        WHERE条件の内部状態
                                    </label>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 overflow-x-auto">
                                        <pre className="text-yellow-100 font-mono text-xs">{JSON.stringify(complexQuery.wheres, null, 2)}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-white/70 uppercase tracking-widest mb-2 block font-semibold">
                                        バインディング
                                    </label>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <pre className="text-pink-100 font-mono text-xs">{JSON.stringify(complexQuery.bindings, null, 2)}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Points */}
                    <section>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center drop-shadow">
                                <span className="text-3xl mr-3">💡</span>
                                ポイント
                            </h2>
                            <div className="space-y-4 text-white/90">
                                <div className="flex items-start gap-3">
                                    <span className="text-cyan-200 text-lg mt-1">▸</span>
                                    <div>
                                        <strong className="text-white drop-shadow">wheres配列:</strong>{" "}
                                        各WHERE条件がtype, column, operator, value, booleanを持つ配列として格納されている
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-green-200 text-lg mt-1">▸</span>
                                    <div>
                                        <strong className="text-white drop-shadow">bindings配列:</strong>{" "}
                                        プリペアドステートメントに渡される実際の値が格納されている
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-yellow-200 text-lg mt-1">▸</span>
                                    <div>
                                        <strong className="text-white drop-shadow">SQL:</strong>{" "}
                                        実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-pink-200 text-lg mt-1">▸</span>
                                    <div>
                                        <strong className="text-white drop-shadow">boolean:</strong>{" "}
                                        'and'または'or'で、次の条件との論理演算子を示す
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
