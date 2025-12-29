# デザインバリエーション

## design/dark-mode - ダークモード（ネオンアクセント）

### 特徴

#### 配色
- ベース: ほぼ黒 (`bg-gray-950`)
- カード背景: ダークグレー (`bg-gray-900`)
- アクセント: ネオンカラー（cyan, green, red, yellow, blue, purple, pink）
- 各カードごとに異なるネオンカラーをボーダーとグロー効果に使用

#### タイポグラフィ
- `font-black` - 力強く印象的なタイトル
- `font-mono` - テクニカルな印象のラベル
- `text-6xl md:text-7xl` - 大胆なタイトルサイズ

#### エフェクト
- グラデーションテキスト (`bg-clip-text`, `bg-gradient-to-r`)
- `animate-pulse` - メインタイトルに脈動効果
- ホバー時のグロー効果 (`shadow-2xl`, `shadow-cyan-500/50`)
- `-translate-y-1` - ホバー時に微妙に持ち上がる
- 透明度付きボーダー (`border-cyan-500/30`)

#### レイアウト
- 最小限のボーダー装飾
- 各カラーコード表示セクションに異なる色を使用:
  - SQL: cyan
  - WHERE条件: yellow
  - バインディング: purple
- テクニカルラベルに `///` プレフィックス

#### 雰囲気
- サイバーパンク/テクニカル
- エネルギッシュで現代的
- 開発者向けツールの雰囲気

### 向いているケース
- テック系サービス、開発者向けツール
- モダンでエネルギッシュな印象を与えたい場合
- ダークモード好きなユーザー向け

### 実装のポイント
```jsx
// カラークラスの動的マッピング
const colorClasses = {
    cyan: "border-cyan-500 hover:shadow-cyan-500/50",
    green: "border-green-500 hover:shadow-green-500/50",
    // ... 各色ごとに定義
};

// グラデーションテキスト
<h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">

// グロー効果付きカード
<Link className={`bg-gray-900 border-2 ${colorClasses[card.color]} hover:shadow-2xl hover:-translate-y-1`}>
```

### スクリーンショット
- ![Welcome画面](dark-mode-welcome.png)
- ![QueryBuilder画面](dark-mode-querybuilder.png)
