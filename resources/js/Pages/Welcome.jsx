import { Head, Link } from "@inertiajs/react";

export default function Welcome({ laravelVersion, phpVersion }) {
    const cards = [
        {
            href: "/querybuilder",
            icon: "[DB]",
            title: "Query Builder",
            description:
                "クエリビルダーの内部状態をリアルタイムで確認。WHERE条件やバインディングの仕組みを視覚的に理解できます。",
            logId: "0x8F4A",
            status: "READ_ONLY",
        },
        {
            href: "/validation",
            icon: "[VAL]",
            title: "Validation",
            description:
                "フォームのバリデーション機能を実践。ルール、エラー、検証済みデータの内部構造を確認できます。",
            logId: "0x9C2B",
            status: "VALIDATED",
        },
        {
            href: "/errorfix",
            icon: "[ERR]",
            title: "Error Fix",
            description:
                "実際に発生したBladeエラーを例に、デバッグから修正までの実践的な流れを8ステップで解説します。",
            logId: "0xA1F3",
            status: "CRITICAL",
        },
        {
            href: "/bladeescape",
            icon: "[ESC]",
            title: "Blade Escape",
            description:
                "コードサンプルを表示する際のエスケープ方法を完全網羅。よくある間違いパターンと正しい書き方を学べます。",
            logId: "0xB7D4",
            status: "SECURE",
        },
        {
            href: "/querybuilder/guide",
            icon: "[DOC]",
            title: "Implementation Guide",
            description:
                "実装の流れを7ステップで解説。Controller、View、Route、Migrationの作成方法を学べます。",
            logId: "0xC3E5",
            status: "ARCHIVED",
        },
        {
            href: "/refactoring",
            icon: "[REF]",
            title: "Refactoring",
            description:
                "コードの重複削減とレイアウト共通化の実践。保守性の高いビュー構造への改善ステップを解説します。",
            logId: "0xD8A6",
            status: "OPTIMIZED",
        },
        {
            href: "/inertia",
            icon: "[SPA]",
            title: "Inertia.js + React",
            description:
                "LaravelにInertia.jsとReactを導入し、SPAを実現する完全ガイド。セットアップから問題解決まで。",
            logId: "0xE4B7",
            status: "ACTIVE",
        },
    ];

    return (
        <>
            <Head title="Laravel System Dump" />

            <div className="min-h-screen bg-black text-gray-300 font-mono relative">
                {/* Grid background */}
                <div className="fixed inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                <div className="relative max-w-6xl mx-auto px-4 py-12">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="border-2 border-white bg-black p-8">
                            <div className="border-b-2 border-white pb-4 mb-4">
                                <div className="font-serif text-sm uppercase tracking-tight text-gray-400 mb-2">
                                    SYSTEM PROCESS: LARAVEL_KERNEL.EXE
                                </div>
                                <h1 className="font-serif text-6xl uppercase tracking-tighter text-white mb-2">
                                    LEARNING GUIDE
                                </h1>
                                <div className="font-serif text-sm uppercase text-gray-400">
                                    /var/www/html/laravel_sandbox/
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-y-1 text-xs">
                                <div className="col-span-3 text-gray-500 uppercase">
                                    System Ver:
                                </div>
                                <div className="col-span-9 text-white">
                                    Laravel {laravelVersion || "11.x"} | PHP{" "}
                                    {phpVersion || "8.x"}
                                </div>
                                <div className="col-span-3 text-gray-500 uppercase">
                                    Status:
                                </div>
                                <div className="col-span-9 text-[#00FF00]">
                                    [RUNNING]
                                </div>
                                <div className="col-span-3 text-gray-500 uppercase">
                                    Purpose:
                                </div>
                                <div className="col-span-9">
                                    実践的なコード例で Laravel の仕組みを深く理解する
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Cards Grid */}
                    <div className="space-y-4 mb-8">
                        {cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className="block border border-white bg-black hover:bg-white hover:text-black transition-colors duration-0"
                            >
                                <div className="border-b border-white bg-white text-black px-3 py-1 font-serif font-bold uppercase text-xs flex justify-between">
                                    <span>LOG_ID: {card.logId}</span>
                                    <span>STATUS: [{card.status}]</span>
                                </div>

                                <div className="p-4 grid grid-cols-12 gap-y-2 text-sm">
                                    <div className="col-span-2 text-gray-500 uppercase text-xs">
                                        Module:
                                    </div>
                                    <div className="col-span-10 flex items-center">
                                        <span className="text-[#0000AA] mr-3 font-bold">
                                            {card.icon}
                                        </span>
                                        <span className="font-serif font-bold uppercase tracking-tight">
                                            {card.title}
                                        </span>
                                    </div>

                                    <div className="col-span-2 text-gray-500 uppercase text-xs">
                                        Detail:
                                    </div>
                                    <div className="col-span-10 text-gray-300 leading-relaxed">
                                        {card.description}
                                    </div>

                                    <div className="col-span-2 text-gray-500 uppercase text-xs">
                                        Action:
                                    </div>
                                    <div className="col-span-10">
                                        <span className="text-[#0000AA] underline">
                                            {">> ACCESS_FULL_DATA"}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <footer className="border-t-2 border-white pt-4">
                        <div className="text-xs text-gray-500 uppercase text-center font-serif tracking-wider">
                            END OF SYSTEM DUMP / PRESS ANY KEY TO CONTINUE
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
