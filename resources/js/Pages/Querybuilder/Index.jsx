import { Head, Link } from "@inertiajs/react";

export default function Index({ simpleQuery, complexQuery }) {
    return (
        <>
            <Head title="Query Builder 挙動確認" />

            <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation */}
                    <div className="flex gap-4 mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 hover:shadow transition-all"
                        >
                            ← ホームに戻る
                        </Link>
                        <Link
                            href="/querybuilder/guide"
                            className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-red-700 hover:shadow-lg transition-all"
                        >
                            学習ガイドを見る
                        </Link>
                    </div>

                    {/* Page Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        🔍 Laravel Query Builder 内部挙動確認
                    </h1>

                    {/* Simple Query Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
                            シンプルなクエリ
                        </h2>

                        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
                            <pre className="text-green-400 text-sm font-mono">{`$query = User::where('age', '>', 18);`}</pre>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <span className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-100 px-3 py-1 rounded-full">
                                    生成されるSQL
                                </span>
                                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-2">
                                    <pre className="text-blue-900 text-sm font-mono whitespace-pre-wrap">{simpleQuery.sql}</pre>
                                </div>
                            </div>

                            <div>
                                <span className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-100 px-3 py-1 rounded-full">
                                    WHERE条件の内部状態
                                </span>
                                <div className="bg-gray-900 rounded-lg p-4 mt-2 overflow-x-auto">
                                    <pre className="text-yellow-300 text-sm font-mono">{JSON.stringify(simpleQuery.wheres, null, 2)}</pre>
                                </div>
                            </div>

                            <div>
                                <span className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-100 px-3 py-1 rounded-full">
                                    バインディング
                                </span>
                                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-4 mt-2">
                                    <pre className="text-purple-900 text-sm font-mono whitespace-pre-wrap">{JSON.stringify(simpleQuery.bindings, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Complex Query Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
                            複雑なクエリ（複数条件）
                        </h2>

                        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
                            <pre className="text-green-400 text-sm font-mono">{`$query = User::where('age', '>', 18)
    ->where('name', 'like', '%John%')
    ->orWhere('email', 'test@example.com');`}</pre>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <span className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-100 px-3 py-1 rounded-full">
                                    生成されるSQL
                                </span>
                                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-2">
                                    <pre className="text-blue-900 text-sm font-mono whitespace-pre-wrap">{complexQuery.sql}</pre>
                                </div>
                            </div>

                            <div>
                                <span className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-100 px-3 py-1 rounded-full">
                                    WHERE条件の内部状態
                                </span>
                                <div className="bg-gray-900 rounded-lg p-4 mt-2 overflow-x-auto">
                                    <pre className="text-yellow-300 text-sm font-mono">{JSON.stringify(complexQuery.wheres, null, 2)}</pre>
                                </div>
                            </div>

                            <div>
                                <span className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-100 px-3 py-1 rounded-full">
                                    バインディング
                                </span>
                                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-4 mt-2">
                                    <pre className="text-purple-900 text-sm font-mono whitespace-pre-wrap">{JSON.stringify(complexQuery.bindings, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Points Section */}
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6">💡 ポイント</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <strong className="font-semibold">wheres配列:</strong>{" "}
                                    各WHERE条件がtype, column, operator, value, booleanを持つ配列として格納されている
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <strong className="font-semibold">bindings配列:</strong>{" "}
                                    プリペアドステートメントに渡される実際の値が格納されている
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <strong className="font-semibold">SQL:</strong>{" "}
                                    実際に実行されるSQLクエリ（値は?でプレースホルダー化されている）
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <strong className="font-semibold">boolean:</strong>{" "}
                                    'and'または'or'で、次の条件との論理演算子を示す
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
