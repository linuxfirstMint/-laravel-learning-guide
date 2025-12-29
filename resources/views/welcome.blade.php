<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel 学習ガイド</title>
    <style>
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
    </style>
</head>

<body>
    <div class="container">
        <div class="hero">
            <h1>🚀 Laravel 学習ガイド</h1>
            <p class="subtitle">実践的なコード例で Laravel の仕組みを深く理解する</p>
        </div>

        <div class="card-grid">
            <a href="/querybuilder" class="card">
                <div class="card-icon">🔍</div>
                <h2 class="card-title">Query Builder 実践</h2>
                <p class="card-description">
                    クエリビルダーの内部状態をリアルタイムで確認。
                    WHERE条件やバインディングの仕組みを視覚的に理解できます。
                </p>
                <span class="badge">データベース</span>
            </a>

            <a href="/validation" class="card">
                <div class="card-icon">✅</div>
                <h2 class="card-title">Validation 実践</h2>
                <p class="card-description">
                    フォームのバリデーション機能を実践。
                    ルール、エラー、検証済みデータの内部構造を確認できます。
                </p>
                <span class="badge">セキュリティ</span>
            </a>

            <a href="/errorfix" class="card">
                <div class="card-icon">🔧</div>
                <h2 class="card-title">エラー修正の流れ</h2>
                <p class="card-description">
                    実際に発生したBladeエラーを例に、デバッグから修正までの
                    実践的な流れを8ステップで解説します。
                </p>
                <span class="badge">デバッグ</span>
            </a>

            <a href="/bladeescape" class="card">
                <div class="card-icon">📝</div>
                <h2 class="card-title">Bladeエスケープ</h2>
                <p class="card-description">
                    コードサンプルを表示する際のエスケープ方法を完全網羅。
                    よくある間違いパターンと正しい書き方を学べます。
                </p>
                <span class="badge">Blade</span>
            </a>

            <a href="/querybuilder/guide" class="card">
                <div class="card-icon">📚</div>
                <h2 class="card-title">実装ガイド</h2>
                <p class="card-description">
                    実装の流れを7ステップで解説。
                    Controller、View、Route、Migrationの作成方法を学べます。
                </p>
                <span class="badge">基礎</span>
            </a>

            <a href="/refactoring" class="card">
                <div class="card-icon">♻️</div>
                <h2 class="card-title">リファクタリング</h2>
                <p class="card-description">
                    コードの重複削減とレイアウト共通化の実践。
                    保守性の高いビュー構造への改善ステップを解説します。
                </p>
                <span class="badge">基礎</span>
            </a>
        </div>

        <div class="footer">
            <p>Laravel {{ app()->version() }} | PHP {{ PHP_VERSION }}</p>
            <p>Made with ❤️ for learning Laravel</p>
        </div>
    </div>
</body>

</html>
