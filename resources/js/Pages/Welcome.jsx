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
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .container {
                    max-width: 900px;
                    width: 100%;
                }

                .hero {
                    background: white;
                    border-radius: 20px;
                    padding: 60px 40px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    text-align: center;
                    margin-bottom: 30px;
                }

                h1 {
                    color: #333;
                    font-size: 3rem;
                    margin-bottom: 15px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .subtitle {
                    color: #666;
                    font-size: 1.2rem;
                    margin-bottom: 40px;
                }

                .card-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                }

                .card {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s, box-shadow 0.3s;
                    text-decoration: none;
                    display: block;
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
                }

                .card-icon {
                    font-size: 3rem;
                    margin-bottom: 20px;
                }

                .card-title {
                    color: #333;
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .card-description {
                    color: #666;
                    font-size: 1rem;
                    line-height: 1.6;
                }

                .badge {
                    display: inline-block;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    margin-top: 15px;
                }

                .footer {
                    text-align: center;
                    color: white;
                    margin-top: 30px;
                    font-size: 0.9rem;
                }

                .footer a {
                    color: white;
                    text-decoration: underline;
                }
            `}</style>

            <div className="container">
                <div className="hero">
                    <h1>🚀 Laravel 学習ガイド</h1>
                    <p className="subtitle">実践的なコード例で Laravel の仕組みを深く理解する</p>
                </div>

                <div className="card-grid">
                    {cards.map((card, index) => (
                        <Link key={index} href={card.href} className="card">
                            <div className="card-icon">{card.icon}</div>
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-description">{card.description}</p>
                            <span className="badge">{card.badge}</span>
                        </Link>
                    ))}
                </div>

                <div className="footer">
                    <p>
                        Laravel {laravelVersion || "11.x"} | PHP {phpVersion || "8.x"}
                    </p>
                    <p>Made with ❤️ for learning Laravel</p>
                </div>
            </div>
        </>
    );
}
