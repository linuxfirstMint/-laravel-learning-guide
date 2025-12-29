import { Head, Link } from "@inertiajs/react";

export default function Welcome({ laravelVersion, phpVersion }) {
    const cards = [
        {
            href: "/querybuilder",
            icon: "🔍",
            title: "Query Builder 実践",
            description:
                "クエリビルダーの内部状態をリアルタイムで確認。WHERE条件やバインディングの仕組みを視覚的に理解できます。",
            badge: "DATABASE",
            color: "bg-cyan-400",
            rotate: "rotate-1",
        },
        {
            href: "/validation",
            icon: "✅",
            title: "Validation 実践",
            description:
                "フォームのバリデーション機能を実践。ルール、エラー、検証済みデータの内部構造を確認できます。",
            badge: "SECURITY",
            color: "bg-lime-400",
            rotate: "-rotate-1",
        },
        {
            href: "/errorfix",
            icon: "🔧",
            title: "エラー修正の流れ",
            description:
                "実際に発生したBladeエラーを例に、デバッグから修正までの実践的な流れを8ステップで解説します。",
            badge: "DEBUG",
            color: "bg-fuchsia-400",
            rotate: "rotate-2",
        },
        {
            href: "/bladeescape",
            icon: "📝",
            title: "Bladeエスケープ",
            description:
                "コードサンプルを表示する際のエスケープ方法を完全網羅。よくある間違いパターンと正しい書き方を学べます。",
            badge: "BLADE",
            color: "bg-orange-400",
            rotate: "-rotate-2",
        },
        {
            href: "/querybuilder/guide",
            icon: "📚",
            title: "実装ガイド",
            description:
                "実装の流れを7ステップで解説。Controller、View、Route、Migrationの作成方法を学べます。",
            badge: "GUIDE",
            color: "bg-violet-400",
            rotate: "rotate-1",
        },
        {
            href: "/refactoring",
            icon: "♻️",
            title: "リファクタリング",
            description:
                "コードの重複削減とレイアウト共通化の実践。保守性の高いビュー構造への改善ステップを解説します。",
            badge: "REFACTOR",
            color: "bg-emerald-400",
            rotate: "-rotate-1",
        },
        {
            href: "/inertia",
            icon: "⚛️",
            title: "Inertia.js + React 導入",
            description:
                "LaravelにInertia.jsとReactを導入し、SPAを実現する完全ガイド。セットアップから問題解決まで。",
            badge: "FRONTEND",
            color: "bg-pink-400",
            rotate: "rotate-2",
        },
    ];

    return (
        <>
            <Head title="Laravel 学習ガイド" />

            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <header className="mb-16 relative">
                        <div className="bg-yellow-300 border-4 border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-1">
                            <h1 className="text-7xl md:text-8xl font-black text-black mb-4 -rotate-1 inline-block">
                                Laravel
                            </h1>
                            <div className="bg-black text-yellow-300 inline-block px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,237,51,1)] ml-4 rotate-2">
                                <span className="text-3xl font-black">学習ガイド</span>
                            </div>
                            <p className="text-xl font-bold text-black mt-6 -rotate-1">
                                実践的なコード例で Laravel の仕組みを深く理解する
                            </p>
                        </div>
                    </header>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className={`group ${card.color} border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all ${card.rotate}`}
                            >
                                <div className="text-6xl mb-4">{card.icon}</div>
                                <h2 className="text-2xl font-black text-black mb-3">
                                    {card.title}
                                </h2>
                                <p className="text-base text-black mb-6 leading-relaxed font-bold">
                                    {card.description}
                                </p>
                                <div className="bg-black text-white inline-block px-4 py-2 font-black text-sm border-4 border-black">
                                    [{card.badge}]
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <footer className="bg-black text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,0,255,1)] -rotate-1">
                        <p className="text-center font-black uppercase tracking-wider">
                            Laravel {laravelVersion || "11.x"} · PHP {phpVersion || "8.x"}
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
