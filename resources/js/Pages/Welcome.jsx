import { Head, Link } from "@inertiajs/react";

export default function Welcome({ laravelVersion, phpVersion }) {
    const cards = [
        {
            href: "/querybuilder",
            icon: "🔍",
            title: "Query Builder 実践",
            description:
                "クエリビルダーの内部状態をリアルタイムで確認。WHERE条件やバインディングの仕組みを視覚的に理解できます。",
            badge: "データベース",
            color: "yellow",
        },
        {
            href: "/validation",
            icon: "✅",
            title: "Validation 実践",
            description:
                "フォームのバリデーション機能を実践。ルール、エラー、検証済みデータの内部構造を確認できます。",
            badge: "セキュリティ",
            color: "green",
        },
        {
            href: "/errorfix",
            icon: "🔧",
            title: "エラー修正の流れ",
            description:
                "実際に発生したBladeエラーを例に、デバッグから修正までの実践的な流れを8ステップで解説します。",
            badge: "デバッグ",
            color: "red",
        },
        {
            href: "/bladeescape",
            icon: "📝",
            title: "Bladeエスケープ",
            description:
                "コードサンプルを表示する際のエスケープ方法を完全網羅。よくある間違いパターンと正しい書き方を学べます。",
            badge: "Blade",
            color: "blue",
        },
        {
            href: "/querybuilder/guide",
            icon: "📚",
            title: "実装ガイド",
            description:
                "実装の流れを7ステップで解説。Controller、View、Route、Migrationの作成方法を学べます。",
            badge: "基礎",
            color: "purple",
        },
        {
            href: "/refactoring",
            icon: "♻️",
            title: "リファクタリング",
            description:
                "コードの重複削減とレイアウト共通化の実践。保守性の高いビュー構造への改善ステップを解説します。",
            badge: "基礎",
            color: "cyan",
        },
        {
            href: "/inertia",
            icon: "⚛️",
            title: "Inertia.js + React 導入",
            description:
                "LaravelにInertia.jsとReactを導入し、SPAを実現する完全ガイド。セットアップから問題解決まで。",
            badge: "フロントエンド",
            color: "pink",
        },
    ];

    const colorClasses = {
        yellow: "border-yellow-400 bg-yellow-400",
        green: "border-green-400 bg-green-400",
        red: "border-red-400 bg-red-400",
        blue: "border-blue-400 bg-blue-400",
        purple: "border-purple-400 bg-purple-400",
        cyan: "border-cyan-400 bg-cyan-400",
        pink: "border-pink-400 bg-pink-400",
    };

    return (
        <>
            <Head title="Laravel 学習ガイド" />

            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Header */}
                    <header className="mb-16">
                        <div className="border-8 border-black bg-white p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <h1 className="text-7xl font-black text-black mb-4 uppercase tracking-tight">
                                Laravel
                                <br />
                                学習ガイド
                            </h1>
                            <div className="border-t-4 border-black mt-6 pt-6">
                                <p className="text-xl font-bold text-black uppercase">
                                    実践的なコード例で Laravel の仕組みを深く理解する
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className="group border-6 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                            >
                                <div className="text-6xl mb-6">{card.icon}</div>
                                <h2 className="text-2xl font-black text-black mb-4 uppercase">
                                    {card.title}
                                </h2>
                                <p className="text-base text-black mb-6 leading-relaxed font-medium">
                                    {card.description}
                                </p>
                                <span className={`inline-block ${colorClasses[card.color]} text-black text-sm px-6 py-2 font-black uppercase border-4 border-black`}>
                                    {card.badge}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <footer className="border-8 border-black bg-black p-6">
                        <p className="text-center text-white font-black uppercase tracking-wider">
                            Laravel {laravelVersion || "11.x"} · PHP {phpVersion || "8.x"}
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
