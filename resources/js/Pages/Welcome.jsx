import { Head, Link } from "@inertiajs/react";

export default function Welcome({ laravelVersion, phpVersion }) {
    const cards = [
        {
            href: "/querybuilder",
            icon: "[DB]",
            title: "Query Builder 実践",
            description:
                "クエリビルダーの内部状態をリアルタイムで確認。WHERE条件やバインディングの仕組みを視覚的に理解できます。",
            badge: "DATABASE",
            cmd: "query_builder.sh",
        },
        {
            href: "/validation",
            icon: "[OK]",
            title: "Validation 実践",
            description:
                "フォームのバリデーション機能を実践。ルール、エラー、検証済みデータの内部構造を確認できます。",
            badge: "SECURITY",
            cmd: "validation.sh",
        },
        {
            href: "/errorfix",
            icon: "[FIX]",
            title: "エラー修正の流れ",
            description:
                "実際に発生したBladeエラーを例に、デバッグから修正までの実践的な流れを8ステップで解説します。",
            badge: "DEBUG",
            cmd: "error_fix.sh",
        },
        {
            href: "/bladeescape",
            icon: "[ESC]",
            title: "Bladeエスケープ",
            description:
                "コードサンプルを表示する際のエスケープ方法を完全網羅。よくある間違いパターンと正しい書き方を学べます。",
            badge: "BLADE",
            cmd: "blade_escape.sh",
        },
        {
            href: "/querybuilder/guide",
            icon: "[DOC]",
            title: "実装ガイド",
            description:
                "実装の流れを7ステップで解説。Controller、View、Route、Migrationの作成方法を学べます。",
            badge: "GUIDE",
            cmd: "implementation.sh",
        },
        {
            href: "/refactoring",
            icon: "[REF]",
            title: "リファクタリング",
            description:
                "コードの重複削減とレイアウト共通化の実践。保守性の高いビュー構造への改善ステップを解説します。",
            badge: "REFACTOR",
            cmd: "refactoring.sh",
        },
        {
            href: "/inertia",
            icon: "[JS]",
            title: "Inertia.js + React 導入",
            description:
                "LaravelにInertia.jsとReactを導入し、SPAを実現する完全ガイド。セットアップから問題解決まで。",
            badge: "FRONTEND",
            cmd: "inertia_setup.sh",
        },
    ];

    return (
        <>
            <Head title="Laravel 学習ガイド" />

            <div className="min-h-screen bg-black text-green-400 font-mono">
                {/* Scanline effect */}
                <div className="fixed inset-0 pointer-events-none opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Terminal Header */}
                    <div className="border-2 border-green-500 mb-8 bg-black/80">
                        <div className="bg-green-500 text-black px-4 py-1 flex items-center justify-between">
                            <span className="font-bold">root@laravel:~$</span>
                            <div className="flex gap-2">
                                <span className="w-3 h-3 bg-black rounded-full"></span>
                                <span className="w-3 h-3 bg-black rounded-full"></span>
                                <span className="w-3 h-3 bg-black rounded-full"></span>
                            </div>
                        </div>
                        <div className="p-8">
                            <pre className="text-green-400 text-sm mb-2">
                                <span className="text-green-600"># Initializing Laravel Learning System...</span>
                            </pre>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                <span className="text-green-500">$</span> ./laravel_learning_guide.sh
                            </h1>
                            <pre className="text-green-600 text-sm">
                                <span className="animate-pulse">▋</span> 実践的なコード例で Laravel の仕組みを深く理解する
                            </pre>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className="group border-2 border-green-500/30 bg-black/60 p-6 hover:border-green-500 hover:bg-green-950/20 transition-all backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-green-500 text-xl font-bold">{card.icon}</span>
                                    <span className="text-green-600 text-xs">./scripts/{card.cmd}</span>
                                </div>
                                <h2 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300">
                                    {card.title}
                                </h2>
                                <p className="text-sm text-green-500/70 mb-4 leading-relaxed">
                                    {card.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-green-600 border border-green-600 px-3 py-1">
                                        [{card.badge}]
                                    </span>
                                    <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        ▶
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="border-2 border-green-500/30 bg-black/60 p-4 backdrop-blur-sm">
                        <pre className="text-green-600 text-xs text-center">
                            <span className="text-green-500">System Info:</span> Laravel {laravelVersion || "11.x"} | PHP {phpVersion || "8.x"} | Status: <span className="text-green-400 animate-pulse">ONLINE</span>
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
}
