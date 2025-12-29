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
            color: "cyan",
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
            color: "yellow",
        },
        {
            href: "/querybuilder/guide",
            icon: "📚",
            title: "実装ガイド",
            description:
                "実装の流れを7ステップで解説。Controller、View、Route、Migrationの作成方法を学べます。",
            badge: "基礎",
            color: "blue",
        },
        {
            href: "/refactoring",
            icon: "♻️",
            title: "リファクタリング",
            description:
                "コードの重複削減とレイアウト共通化の実践。保守性の高いビュー構造への改善ステップを解説します。",
            badge: "基礎",
            color: "purple",
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
        cyan: "border-cyan-500 hover:shadow-cyan-500/50",
        green: "border-green-500 hover:shadow-green-500/50",
        red: "border-red-500 hover:shadow-red-500/50",
        yellow: "border-yellow-500 hover:shadow-yellow-500/50",
        blue: "border-blue-500 hover:shadow-blue-500/50",
        purple: "border-purple-500 hover:shadow-purple-500/50",
        pink: "border-pink-500 hover:shadow-pink-500/50",
    };

    return (
        <>
            <Head title="Laravel 学習ガイド" />

            <div className="min-h-screen bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Header */}
                    <header className="mb-20 text-center">
                        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 animate-pulse">
                            Laravel 学習ガイド
                        </h1>
                        <p className="text-xl text-gray-400">
                            実践的なコード例で Laravel の仕組みを深く理解する
                        </p>
                    </header>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className={`group bg-gray-900 border-2 ${colorClasses[card.color]} rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                            >
                                <div className="text-5xl mb-4">{card.icon}</div>
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                                    {card.title}
                                </h2>
                                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                    {card.description}
                                </p>
                                <span className="inline-block text-xs text-gray-500 font-mono uppercase tracking-widest">
                                    {card.badge}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <footer className="text-center border-t border-gray-800 pt-8">
                        <p className="text-sm text-gray-600 font-mono">
                            Laravel {laravelVersion || "11.x"} · PHP {phpVersion || "8.x"}
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
