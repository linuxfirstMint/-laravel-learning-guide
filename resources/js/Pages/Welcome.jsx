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
        },
        {
            href: "/validation",
            icon: "✅",
            title: "Validation 実践",
            description:
                "フォームのバリデーション機能を実践。ルール、エラー、検証済みデータの内部構造を確認できます。",
            badge: "セキュリティ",
        },
        {
            href: "/errorfix",
            icon: "🔧",
            title: "エラー修正の流れ",
            description:
                "実際に発生したBladeエラーを例に、デバッグから修正までの実践的な流れを8ステップで解説します。",
            badge: "デバッグ",
        },
        {
            href: "/bladeescape",
            icon: "📝",
            title: "Bladeエスケープ",
            description:
                "コードサンプルを表示する際のエスケープ方法を完全網羅。よくある間違いパターンと正しい書き方を学べます。",
            badge: "Blade",
        },
        {
            href: "/querybuilder/guide",
            icon: "📚",
            title: "実装ガイド",
            description:
                "実装の流れを7ステップで解説。Controller、View、Route、Migrationの作成方法を学べます。",
            badge: "基礎",
        },
        {
            href: "/refactoring",
            icon: "♻️",
            title: "リファクタリング",
            description:
                "コードの重複削減とレイアウト共通化の実践。保守性の高いビュー構造への改善ステップを解説します。",
            badge: "基礎",
        },
        {
            href: "/inertia",
            icon: "⚛️",
            title: "Inertia.js + React 導入",
            description:
                "LaravelにInertia.jsとReactを導入し、SPAを実現する完全ガイド。セットアップから問題解決まで。",
            badge: "フロントエンド",
        },
    ];

    return (
        <>
            <Head title="Laravel 学習ガイド" />

            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                            🚀 Laravel 学習ガイド
                        </h1>
                        <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                            実践的なコード例で Laravel の仕組みを深く理解する
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
                            >
                                <div className="text-5xl mb-4">{card.icon}</div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                    {card.title}
                                </h2>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {card.description}
                                </p>
                                <span className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {card.badge}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="text-center text-white space-y-2">
                        <p className="text-purple-200">
                            Laravel {laravelVersion || "11.x"} | PHP {phpVersion || "8.x"}
                        </p>
                        <p className="text-purple-100">
                            Made with ❤️ for learning Laravel
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
