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

            <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
                {/* Background decorative blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Header */}
                    <header className="mb-16 text-center">
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
                            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                                Laravel 学習ガイド
                            </h1>
                            <p className="text-xl text-white/90 drop-shadow">
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
                                className="group bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="text-5xl mb-4">{card.icon}</div>
                                <h2 className="text-2xl font-bold text-white mb-3 drop-shadow">
                                    {card.title}
                                </h2>
                                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                                    {card.description}
                                </p>
                                <span className="inline-block bg-white/30 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full font-medium border border-white/40">
                                    {card.badge}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <footer className="text-center">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <p className="text-sm text-white/90 font-medium">
                                Laravel {laravelVersion || "11.x"} · PHP {phpVersion || "8.x"}
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
