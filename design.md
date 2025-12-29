# デザインバリエーション

## design/brutalist - ブルータリズム

### 特徴

#### 配色
- ベース: 白 (`bg-white`)
- アクセント: ビビッドな原色（yellow-400, green-400, red-400, blue-400, purple-400, cyan-400, pink-400）
- テキスト: 黒 (`text-black`)
- 各セクションに異なる淡い背景色（yellow-100, pink-100, cyan-100）

#### ボーダー・シャドウ
- **太いボーダー**: `border-4`, `border-6`, `border-8` - すべて黒
- **ハードシャドウ**: `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]` - 立体的な影
- ホバー時により強いシャドウに変化し、要素が浮き上がる効果

#### タイポグラフィ
- `font-black` - 極太フォントで力強い
- `uppercase` - すべて大文字でインパクト
- `tracking-tight` - タイトな文字間隔

#### レイアウト
- 角丸なし（直角）
- すべてのボックスに太い黒ボーダー
- ボタンやカードのホバーで `translate-x-[-2px] translate-y-[-2px]` - 影が伸びる効果

#### エフェクト
- ホバー時に影を大きくして要素を持ち上げる
- SQLコード部分は黒背景に緑文字（レトロなターミナル風）

#### 雰囲気
- レトロでノスタルジック
- 1990年代のWebデザイン風
- 骨太で力強い印象
- ポップで目立つ

### 向いているケース
- 個性的で印象に残るサイト
- レトロ/ヴィンテージな雰囲気
- アート系・実験的なプロジェクト
- 遊び心のあるデザイン

### 実装のポイント
```jsx
// ハードシャドウの実装
<div className="border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

// ホバー時に影を伸ばす効果
<Link className="shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">

// 大文字・極太フォント
<h1 className="font-black uppercase tracking-tight">

// レトロなターミナル風コード表示
<div className="bg-black border-4 border-black">
    <pre className="text-green-400 font-mono font-bold">
```

### スクリーンショット
- ![Welcome画面](brutalist-welcome.png)
- ![QueryBuilder画面](brutalist-querybuilder.png)

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
