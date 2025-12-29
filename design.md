# デザインバリエーション

## design/glassmorphism - グラスモーフィズム

### 特徴

#### 配色
- ベース: カラフルなグラデーション背景 (`bg-gradient-to-br from-purple-400 via-pink-500 to-red-500`)
- カード: 半透明の白 (`bg-white/20`, `bg-white/10`)
- テキスト: 白 (`text-white`)

#### エフェクト
- **backdrop-filter**: ガラス風のぼかし効果 (`backdrop-blur-lg`, `backdrop-blur-md`, `backdrop-blur-sm`)
- **透明度**: 様々なレベルの透明度を使い分け (`/10`, `/20`, `/30`, `/40`)
- **装飾的なblob**: 背景に大きなぼかし円を配置 (`blur-3xl`)
- **drop-shadow**: テキストに影をつけて読みやすく
- **ホバー効果**: `scale-105` で微妙に拡大、背景透明度を上げる

#### レイアウト
- `rounded-2xl`, `rounded-3xl` - 大きな角丸で柔らかい印象
- `border-white/20` - 繊細な白いボーダー
- `shadow-xl`, `shadow-2xl` - 深い影で浮き上がる効果

#### タイポグラフィ
- `font-bold` - しっかりした印象
- `font-semibold` - ラベルに使用
- `drop-shadow-lg` - タイトルを際立たせる

#### 雰囲気
- モダンで洗練された
- iOS風のデザイン
- 軽やかで透明感がある
- 視覚的に美しい

### 向いているケース
- デザイン性を重視したサイト
- クリエイティブなプロジェクト
- モダンでスタイリッシュな印象を与えたい場合

### 実装のポイント
```jsx
// グラデーション背景
<div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">

// 装飾的なblob（ぼかし円）
<div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>

// ガラス風カード
<div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">

// ホバー効果
<Link className="bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-105 hover:shadow-2xl">
```

### スクリーンショット
- ![Welcome画面](glassmorphism-welcome.png)
- ![QueryBuilder画面](glassmorphism-querybuilder.png)

---

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
