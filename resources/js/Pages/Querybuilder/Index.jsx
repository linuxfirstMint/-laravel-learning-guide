import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder 挙動確認" />

            <div className="min-h-screen bg-black text-green-400 font-mono">
                {/* Scanline effect */}
                <div className="fixed inset-0 pointer-events-none opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Navigation */}
                    <nav className="flex gap-4 mb-8">
                        <Link
                            href="/"
                            className="border-2 border-green-500 text-green-400 px-4 py-2 hover:bg-green-500 hover:text-black transition-all"
                        >
                            <span className="text-green-500">$</span> cd ../
                        </Link>
                        <Link
                            href="/querybuilder/guide"
                            className="border-2 border-green-500 text-green-400 px-4 py-2 hover:bg-green-500 hover:text-black transition-all"
                        >
                            <span className="text-green-500">$</span> cat guide.md
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="border-2 border-green-500 mb-8 bg-black/80">
                        <div className="bg-green-500 text-black px-4 py-1 font-bold">
                            root@laravel:~/query-builder$
                        </div>
                        <div className="p-6">
                            <h1 className="text-3xl font-bold">
                                <span className="text-green-500">$</span> ./show_query_internals.sh
                            </h1>
                            <pre className="text-green-600 text-sm mt-2">
                                <span className="animate-pulse">▋</span> Query Builder 内部挙動確認
                            </pre>
                        </div>
                    </div>

                    {/* Simple Query Section */}
                    <section className="mb-8">
                        <div className="border-2 border-green-500/50 bg-black/60 p-6 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-green-500/50 pb-2">
                                # シンプルなクエリ
                            </h2>

                            <div className="space-y-5">
                                <div className="bg-green-950/30 border border-green-500/30 p-4">
                                    <pre className="text-green-400 font-mono text-sm">
                                        <span className="text-green-600">// Input:</span>
                                        {"\n"}$query = User::where('age', '{'>'}, 18);
                                    </pre>
                                </div>

                                <div>
                                    <pre className="text-green-600 text-xs mb-2">
                                        <span className="text-green-500">[OUTPUT]</span> 生成されるSQL:
                                    </pre>
                                    <div className="bg-black border-2 border-green-500 p-4">
                                        <pre className="text-green-400 font-mono text-sm">{simpleQuery.sql}</pre>
                                    </div>
                                </div>

                                <div>
                                    <pre className="text-green-600 text-xs mb-2">
                                        <span className="text-green-500">[DEBUG]</span> WHERE条件の内部状態:
                                    </pre>
                                    <div className="bg-green-950/30 border border-green-500/30 p-4 overflow-x-auto">
                                        <pre className="text-green-500/80 font-mono text-xs">{JSON.stringify(simpleQuery.wheres, null, 2)}</pre>
                                    </div>
                                </div>

                                <div>
                                    <pre className="text-green-600 text-xs mb-2">
                                        <span className="text-green-500">[DEBUG]</span> バインディング:
                                    </pre>
                                    <div className="bg-green-950/30 border border-green-500/30 p-4">
                                        <pre className="text-green-500/80 font-mono text-xs">{JSON.stringify(simpleQuery.bindings, null, 2)}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Complex Query Section */}
                    <section className="mb-8">
                        <div className="border-2 border-green-500/50 bg-black/60 p-6 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-green-500/50 pb-2">
                                # 複雑なクエリ（複数条件）
                            </h2>

                            <div className="space-y-5">
                                <div className="bg-green-950/30 border border-green-500/30 p-4">
                                    <pre className="text-green-400 font-mono text-sm">
                                        <span className="text-green-600">// Input:</span>
                                        {"\n"}$query = User::where('age', '{'>'}, 18)
    {"\n"}    -&gt;where('name', 'like', '%John%')
    {"\n"}    -&gt;orWhere('email', 'test@example.com');
                                    </pre>
                                </div>

                                <div>
                                    <pre className="text-green-600 text-xs mb-2">
                                        <span className="text-green-500">[OUTPUT]</span> 生成されるSQL:
                                    </pre>
                                    <div className="bg-black border-2 border-green-500 p-4">
                                        <pre className="text-green-400 font-mono text-sm">{complexQuery.sql}</pre>
                                    </div>
                                </div>

                                <div>
                                    <pre className="text-green-600 text-xs mb-2">
                                        <span className="text-green-500">[DEBUG]</span> WHERE条件の内部状態:
                                    </pre>
                                    <div className="bg-green-950/30 border border-green-500/30 p-4 overflow-x-auto">
                                        <pre className="text-green-500/80 font-mono text-xs">{JSON.stringify(complexQuery.wheres, null, 2)}</pre>
                                    </div>
                                </div>

                                <div>
                                    <pre className="text-green-600 text-xs mb-2">
                                        <span className="text-green-500">[DEBUG]</span> バインディング:
                                    </pre>
                                    <div className="bg-green-950/30 border border-green-500/30 p-4">
                                        <pre className="text-green-500/80 font-mono text-xs">{JSON.stringify(complexQuery.bindings, null, 2)}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Points */}
                    <section>
                        <div className="border-2 border-green-500/50 bg-black/60 p-6 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center border-b border-green-500/50 pb-2">
                                <span className="text-green-500 mr-2">[i]</span> ポイント
                            </h2>
                            <div className="space-y-3 text-green-400">
                                <div className="bg-green-950/30 border border-green-500/30 p-4">
                                    <pre className="text-green-500 text-sm">
                                        <span className="text-green-400">▸ wheres配列:</span> 各WHERE条件がtype, column, operator, value, booleanを持つ配列として格納されている
                                    </pre>
                                </div>
                                <div className="bg-green-950/30 border border-green-500/30 p-4">
                                    <pre className="text-green-500 text-sm">
                                        <span className="text-green-400">▸ bindings配列:</span> プリペアドステートメントに渡される実際の値が格納されている
                                    </pre>
                                </div>
                                <div className="bg-green-950/30 border border-green-500/30 p-4">
                                    <pre className="text-green-500 text-sm">
                                        <span className="text-green-400">▸ SQL:</span> 実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）
                                    </pre>
                                </div>
                                <div className="bg-green-950/30 border border-green-500/30 p-4">
                                    <pre className="text-green-500 text-sm">
                                        <span className="text-green-400">▸ boolean:</span> 'and'または'or'で、次の条件との論理演算子を示す
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
