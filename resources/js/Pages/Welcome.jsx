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
            color: "purple",
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
            color: "rose",
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
            color: "amber",
        },
        {
            href: "/refactoring",
            icon: "♻️",
            title: "リファクタリング",
            description:
                "コードの重複削減とレイアウト共通化の実践。保守性の高いビュー構造への改善ステップを解説します。",
            badge: "基礎",
            color: "teal",
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
        purple: "bg-purple-50 border-purple-200 hover:border-purple-300 hover:bg-purple-100",
        green: "bg-green-50 border-green-200 hover:border-green-300 hover:bg-green-100",
        rose: "bg-rose-50 border-rose-200 hover:border-rose-300 hover:bg-rose-100",
        blue: "bg-blue-50 border-blue-200 hover:border-blue-300 hover:bg-blue-100",
        amber: "bg-amber-50 border-amber-200 hover:border-amber-300 hover:bg-amber-100",
        teal: "bg-teal-50 border-teal-200 hover:border-teal-300 hover:bg-teal-100",
        pink: "bg-pink-50 border-pink-200 hover:border-pink-300 hover:bg-pink-100",
    };

    const badgeColors = {
        purple: "bg-purple-100 text-purple-700 border-purple-200",
        green: "bg-green-100 text-green-700 border-green-200",
        rose: "bg-rose-100 text-rose-700 border-rose-200",
        blue: "bg-blue-100 text-blue-700 border-blue-200",
        amber: "bg-amber-100 text-amber-700 border-amber-200",
        teal: "bg-teal-100 text-teal-700 border-teal-200",
        pink: "bg-pink-100 text-pink-700 border-pink-200",
    };

    return (
        <>
            <Head title="Laravel 学習ガイド" />

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Header */}
                    <header className="mb-16 text-center">
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-purple-100 shadow-sm">
                            <h1 className="text-6xl md:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4">
                                Laravel 学習ガイド
                            </h1>
                            <p className="text-lg text-gray-600">
                                実践的なコード例で Laravel の仕組みを深く理解する
                            </p>
                        </div>
                    </header>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className={`${colorClasses[card.color]} rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                            >
                                <div className="text-5xl mb-4">{card.icon}</div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                    {card.title}
                                </h2>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {card.description}
                                </p>
                                <span className={`inline-block ${badgeColors[card.color]} text-xs px-4 py-1.5 rounded-full font-medium border`}>
                                    {card.badge}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <footer className="text-center">
                        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
                            <p className="text-sm text-gray-500 font-light">
                                Laravel {laravelVersion || "11.x"} · PHP {phpVersion || "8.x"}
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
