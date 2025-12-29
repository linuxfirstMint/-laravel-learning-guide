import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder 挙動確認" />

            <div className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation */}
                    <nav className="flex gap-6 mb-12">
                        <Link
                            href="/"
                            className="bg-yellow-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            ← HOME
                        </Link>
                        <Link
                            href="/querybuilder/guide"
                            className="bg-cyan-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            GUIDE →
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="border-8 border-black bg-white p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h1 className="text-5xl font-black text-black uppercase tracking-tight">
                            Query Builder
                            <br />
                            内部挙動確認
                        </h1>
                    </div>

                    {/* Simple Query Section */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-yellow-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                シンプルなクエリ
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white border-4 border-black p-4">
                                    <pre className="text-black font-mono text-sm font-bold">{`$query = User::where('age', '>', 18);`}</pre>
                                </div>

                                <div>
                                    <label className="text-xs text-black uppercase tracking-widest mb-2 block font-black">
                                        /// 生成されるSQL
                                    </label>
                                    <div className="bg-black border-4 border-black p-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold">{simpleQuery.sql}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-black uppercase tracking-widest mb-2 block font-black">
                                        /// WHERE条件の内部状態
                                    </label>
                                    <div className="bg-white border-4 border-black p-4 overflow-x-auto">
                                        <pre className="text-black font-mono text-xs">{JSON.stringify(simpleQuery.wheres, null, 2)}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-black uppercase tracking-widest mb-2 block font-black">
                                        /// バインディング
                                    </label>
                                    <div className="bg-white border-4 border-black p-4">
                                        <pre className="text-black font-mono text-xs">{JSON.stringify(simpleQuery.bindings, null, 2)}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Complex Query Section */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-pink-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-8 uppercase border-b-4 border-black pb-4">
                                複雑なクエリ（複数条件）
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white border-4 border-black p-4">
                                    <pre className="text-black font-mono text-sm font-bold">{`$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');`}</pre>
                                </div>

                                <div>
                                    <label className="text-xs text-black uppercase tracking-widest mb-2 block font-black">
                                        /// 生成されるSQL
                                    </label>
                                    <div className="bg-black border-4 border-black p-4">
                                        <pre className="text-green-400 font-mono text-sm font-bold">{complexQuery.sql}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-black uppercase tracking-widest mb-2 block font-black">
                                        /// WHERE条件の内部状態
                                    </label>
                                    <div className="bg-white border-4 border-black p-4 overflow-x-auto">
                                        <pre className="text-black font-mono text-xs">{JSON.stringify(complexQuery.wheres, null, 2)}</pre>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-black uppercase tracking-widest mb-2 block font-black">
                                        /// バインディング
                                    </label>
                                    <div className="bg-white border-4 border-black p-4">
                                        <pre className="text-black font-mono text-xs">{JSON.stringify(complexQuery.bindings, null, 2)}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Points */}
                    <section>
                        <div className="border-6 border-black bg-cyan-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-3xl font-black text-black mb-6 flex items-center uppercase border-b-4 border-black pb-4">
                                <span className="text-4xl mr-3">💡</span>
                                ポイント
                            </h2>
                            <div className="space-y-4 text-black">
                                <div className="flex items-start gap-3 bg-white border-4 border-black p-4">
                                    <span className="text-black text-2xl font-black">▸</span>
                                    <div>
                                        <strong className="font-black uppercase">wheres配列:</strong>{" "}
                                        <span className="font-medium">各WHERE条件がtype, column, operator, value, booleanを持つ配列として格納されている</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white border-4 border-black p-4">
                                    <span className="text-black text-2xl font-black">▸</span>
                                    <div>
                                        <strong className="font-black uppercase">bindings配列:</strong>{" "}
                                        <span className="font-medium">プリペアドステートメントに渡される実際の値が格納されている</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white border-4 border-black p-4">
                                    <span className="text-black text-2xl font-black">▸</span>
                                    <div>
                                        <strong className="font-black uppercase">SQL:</strong>{" "}
                                        <span className="font-medium">実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white border-4 border-black p-4">
                                    <span className="text-black text-2xl font-black">▸</span>
                                    <div>
                                        <strong className="font-black uppercase">boolean:</strong>{" "}
                                        <span className="font-medium">'and'または'or'で、次の条件との論理演算子を示す</span>
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
