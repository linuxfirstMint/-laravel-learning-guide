import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder System Dump" />

            <div className="min-h-screen bg-black text-gray-300 font-mono relative">
                {/* Grid background */}
                <div className="fixed inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                <div className="relative max-w-6xl mx-auto px-4 py-12">
                    {/* Navigation */}
                    <nav className="mb-8 flex gap-4">
                        <Link
                            href="/"
                            className="border border-white bg-black text-white px-4 py-2 text-xs uppercase font-serif hover:bg-white hover:text-black transition-colors duration-0"
                        >
                            {"<< BACK_TO_INDEX"}
                        </Link>
                        <Link
                            href="/querybuilder/guide"
                            className="border border-white bg-black text-white px-4 py-2 text-xs uppercase font-serif hover:bg-white hover:text-black transition-colors duration-0"
                        >
                            {">> VIEW_GUIDE"}
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="border-2 border-white bg-black p-8 mb-12">
                        <div className="border-b-2 border-white pb-4 mb-4">
                            <div className="font-serif text-sm uppercase tracking-tight text-gray-400 mb-2">
                                PROCESS_ID: 0x1A2B / THREAD: QUERYBUILDER.EXE
                            </div>
                            <h1 className="font-serif text-5xl uppercase tracking-tighter text-white">
                                INTERNAL STATE DUMP
                            </h1>
                        </div>
                        <div className="text-xs text-gray-400">
                            MEMORY ADDRESS: /Illuminate/Database/Query/Builder.php
                        </div>
                    </div>

                    {/* Simple Query Section */}
                    <section className="mb-8">
                        <div className="border-2 border-white bg-black">
                            <div className="border-b-2 border-white bg-white text-black px-3 py-2 font-serif font-bold uppercase text-sm flex justify-between">
                                <span>SEGMENT_01: SIMPLE_QUERY</span>
                                <span>[EXECUTED]</span>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-2 font-serif">
                                        [INPUT_CODE]
                                    </div>
                                    <div className="border border-gray-600 bg-black p-3">
                                        <pre className="text-white text-sm">
                                            {`$query = User::where('age', '>', 18);`}
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-2 font-serif">
                                        [GENERATED_SQL]
                                    </div>
                                    <div className="border border-gray-600 bg-black p-3">
                                        <pre className="text-[#00FF00] text-sm">
                                            {simpleQuery.sql}
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-2 font-serif">
                                        [WHERES_ARRAY_DUMP]
                                    </div>
                                    <div className="border border-gray-600 bg-black p-3 overflow-x-auto">
                                        <pre className="text-gray-300 text-xs">
                                            {JSON.stringify(
                                                simpleQuery.wheres,
                                                null,
                                                2
                                            )}
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-2 font-serif">
                                        [BINDINGS_DUMP]
                                    </div>
                                    <div className="border border-gray-600 bg-black p-3">
                                        <pre className="text-gray-300 text-xs">
                                            {JSON.stringify(
                                                simpleQuery.bindings,
                                                null,
                                                2
                                            )}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Complex Query Section */}
                    <section className="mb-8">
                        <div className="border-2 border-white bg-black">
                            <div className="border-b-2 border-white bg-white text-black px-3 py-2 font-serif font-bold uppercase text-sm flex justify-between">
                                <span>SEGMENT_02: COMPLEX_QUERY</span>
                                <span>[EXECUTED]</span>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-2 font-serif">
                                        [INPUT_CODE]
                                    </div>
                                    <div className="border border-gray-600 bg-black p-3">
                                        <pre className="text-white text-sm">{`$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');`}</pre>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-2 font-serif">
                                        [GENERATED_SQL]
                                    </div>
                                    <div className="border border-gray-600 bg-black p-3">
                                        <pre className="text-[#00FF00] text-sm">
                                            {complexQuery.sql}
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-2 font-serif">
                                        [WHERES_ARRAY_DUMP]
                                    </div>
                                    <div className="border border-gray-600 bg-black p-3 overflow-x-auto">
                                        <pre className="text-gray-300 text-xs">
                                            {JSON.stringify(
                                                complexQuery.wheres,
                                                null,
                                                2
                                            )}
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-2 font-serif">
                                        [BINDINGS_DUMP]
                                    </div>
                                    <div className="border border-gray-600 bg-black p-3">
                                        <pre className="text-gray-300 text-xs">
                                            {JSON.stringify(
                                                complexQuery.bindings,
                                                null,
                                                2
                                            )}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Points */}
                    <section>
                        <div className="border-2 border-white bg-black">
                            <div className="border-b-2 border-white bg-white text-black px-3 py-2 font-serif font-bold uppercase text-sm flex justify-between">
                                <span>ANALYSIS_NOTES</span>
                                <span>[READONLY]</span>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-12 gap-x-4 border-b border-gray-700 pb-3">
                                    <div className="col-span-3 text-xs uppercase text-gray-500 font-serif">
                                        wheres:
                                    </div>
                                    <div className="col-span-9 text-sm leading-relaxed">
                                        各WHERE条件がtype, column, operator, value,
                                        booleanを持つ配列として格納されている
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 gap-x-4 border-b border-gray-700 pb-3">
                                    <div className="col-span-3 text-xs uppercase text-gray-500 font-serif">
                                        bindings:
                                    </div>
                                    <div className="col-span-9 text-sm leading-relaxed">
                                        プリペアドステートメントに渡される実際の値が格納されている
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 gap-x-4 border-b border-gray-700 pb-3">
                                    <div className="col-span-3 text-xs uppercase text-gray-500 font-serif">
                                        sql:
                                    </div>
                                    <div className="col-span-9 text-sm leading-relaxed">
                                        実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 gap-x-4">
                                    <div className="col-span-3 text-xs uppercase text-gray-500 font-serif">
                                        boolean:
                                    </div>
                                    <div className="col-span-9 text-sm leading-relaxed">
                                        'and'または'or'で、次の条件との論理演算子を示す
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="border-t-2 border-white pt-4 mt-12">
                        <div className="text-xs text-gray-500 uppercase text-center font-serif tracking-wider">
                            END OF DUMP / MEMORY DEALLOCATED
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
