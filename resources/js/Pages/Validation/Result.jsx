import { Head, Link } from "@inertiajs/react";

export default function Result({ state }) {
    return (
        <>
            <Head title="Validation 結果" />

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
                            href="/validation"
                            className="bg-cyan-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            FORM
                        </Link>
                        <Link
                            href="/validation/guide"
                            className="bg-purple-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            GUIDE
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="border-8 border-black bg-white p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h1 className="text-5xl font-black text-black uppercase tracking-tight">
                            Validation
                            <br />
                            結果
                        </h1>
                    </div>

                    {/* Validation Result Status */}
                    <section className="mb-12">
                        {state.passes ? (
                            <div className="border-8 border-black bg-green-400 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <p className="text-4xl font-black text-black uppercase">
                                    ✓ バリデーション成功
                                </p>
                            </div>
                        ) : (
                            <div className="border-8 border-black bg-red-400 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <p className="text-4xl font-black text-black uppercase">
                                    ✗ バリデーション失敗
                                </p>
                            </div>
                        )}
                    </section>

                    {/* Input Data */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-blue-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                入力データ
                            </h2>
                            <div className="bg-black text-green-400 p-6 font-mono border-4 border-black overflow-x-auto">
                                <pre>{JSON.stringify(state.input, null, 2)}</pre>
                            </div>
                        </div>
                    </section>

                    {/* Validation Rules */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-yellow-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                バリデーションルール
                            </h2>
                            <div className="bg-black text-green-400 p-6 font-mono border-4 border-black overflow-x-auto">
                                <pre>{JSON.stringify(state.rules, null, 2)}</pre>
                            </div>
                        </div>
                    </section>

                    {/* Error Details (if validation failed) */}
                    {state.fails && (
                        <section className="mb-12">
                            <div className="border-6 border-black bg-red-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                    エラー詳細
                                </h2>
                                <div className="bg-black text-green-400 p-6 font-mono border-4 border-black overflow-x-auto">
                                    <pre>{JSON.stringify(state.errors, null, 2)}</pre>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Validated Data (if validation passed) */}
                    {state.passes && (
                        <section className="mb-12">
                            <div className="border-6 border-black bg-green-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                    検証済みデータ
                                </h2>
                                <p className="text-lg font-bold text-black mb-4">
                                    バリデーションを通過したデータのみが含まれます。
                                </p>
                                <div className="bg-black text-green-400 p-6 font-mono border-4 border-black overflow-x-auto">
                                    <pre>{JSON.stringify(state.validated, null, 2)}</pre>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Internal State */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-purple-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                内部状態
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xl font-black text-black uppercase mb-3">
                                        passes():
                                    </p>
                                    <div className="bg-black text-green-400 p-4 font-mono border-4 border-black">
                                        <pre>{state.passes ? "true" : "false"}</pre>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xl font-black text-black uppercase mb-3">
                                        fails():
                                    </p>
                                    <div className="bg-black text-green-400 p-4 font-mono border-4 border-black">
                                        <pre>{state.fails ? "true" : "false"}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Points */}
                    <section className="mb-12">
                        <div className="border-6 border-black bg-pink-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-4xl font-black text-black mb-6 uppercase border-b-4 border-black pb-4">
                                ポイント
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <div>
                                        <span className="font-black text-black text-lg">Validator::make()</span>
                                        <span className="font-bold text-black">: バリデーターインスタンスを作成</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <div>
                                        <span className="font-black text-black text-lg">passes()</span>
                                        <span className="font-bold text-black">: バリデーションが成功したかを返す</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <div>
                                        <span className="font-black text-black text-lg">fails()</span>
                                        <span className="font-bold text-black">: バリデーションが失敗したかを返す</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <div>
                                        <span className="font-black text-black text-lg">errors()</span>
                                        <span className="font-bold text-black">: エラーメッセージの配列を取得</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">▸</span>
                                    <div>
                                        <span className="font-black text-black text-lg">validated()</span>
                                        <span className="font-bold text-black">: 検証済みデータのみを取得（余計なフィールドを除外）</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
