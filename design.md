# デザインバリエーション

このプロジェクトでは、複数のデザインパターンを実験的に実装しています。

## design/terminal-hacker - ターミナル/ハッカー風

### 特徴

#### 配色
- ベース: 完全な黒 (`bg-black`)
- テキスト: 緑（`text-green-400`, `text-green-500`, `text-green-600`）
- レトロなCRT端末風の配色

#### タイポグラフィ
- `font-mono` - すべてモノスペースフォント
- `font-bold` - タイトルに使用
- コマンドプロンプト表示（`$`, `root@laravel:~$`）

#### エフェクト
- **スキャンライン効果**: `animate-pulse`のグラデーションでCRT画面風
- **ホバー効果**: 緑背景に黒文字の反転（`hover:bg-green-500 hover:text-black`）
- `backdrop-blur-sm` - 半透明効果
- 透明度を使った階層表現（`/30`, `/50`, `/60`）

#### レイアウト
- ターミナル風のタイトルバー（緑背景に黒文字で`root@laravel:~$`）
- コマンド形式の見出し（`$ ./script.sh`）
- ログ風のラベル（`[OUTPUT]`, `[DEBUG]`, `[i]`）
- アイコンをテキスト表記に（`[DB]`, `[OK]`, `[FIX]`, `[ESC]`, `[DOC]`, `[REF]`, `[JS]`）
- スクリプトファイル名表示（`./scripts/query_builder.sh`）

#### 雰囲気
- レトロなハッカー/コーダー風
- 1980-90年代のCRT端末
- テクニカルで玄人好み
- ノスタルジックでクール

### 向いているケース
- 開発者向けツール・ドキュメント
- テクニカルなサービス
- レトロ/ヴィンテージなデザインが好きな層
- ハッカー文化を好む層

### 実装のポイント
```jsx
// 黒背景に緑文字
<div className="min-h-screen bg-black text-green-400 font-mono">

// スキャンライン効果
<div className="fixed inset-0 pointer-events-none opacity-10">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse"></div>
</div>

// ターミナル風タイトルバー
<div className="bg-green-500 text-black px-4 py-1 font-bold">
    root@laravel:~$
</div>

// コマンドプロンプト
<h1 className="text-3xl font-bold">
    <span className="text-green-500">$</span> ./show_query_internals.sh
</h1>

// ホバー時の反転効果
<Link className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black">
```

### スクリーンショット
- ![Welcome画面](terminal-hacker-welcome.png)
- ![QueryBuilder画面](terminal-hacker-querybuilder.png)

---

## design/soft-pastel - ソフトパステル

### 特徴

#### 配色
- ベース: パステルグラデーション背景 (`bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50`)
- カード: 各カードごとに異なる淡いパステルカラー（purple-50, green-50, rose-50, blue-50, amber-50, teal-50, pink-50）
- ボーダー: 同系色の控えめなボーダー（purple-200, green-200など）
- テキスト: グレー系 (`text-gray-800`, `text-gray-600`)

#### タイポグラフィ
- `font-light` - タイトルに使用、軽やかで優雅
- `font-semibold` - 見出しに使用
- `font-medium` - バッジに使用

#### エフェクト
- グラデーションテキスト（`bg-clip-text from-purple-400 via-pink-400 to-blue-400`）
- `backdrop-blur-sm` - 軽いぼかし効果
- 半透明の白背景（`bg-white/60`, `bg-white/80`）
- ホバー時に `-translate-y-1` で微妙に浮き上がる
- `shadow-sm`, `shadow-lg` - 控えめな影

#### レイアウト
- `rounded-2xl`, `rounded-3xl` - 大きな角丸で柔らかい
- `border-2` - 細めのボーダー
- 各カードがパステルカラーで色分け

#### 雰囲気
- 優しく穏やか
- フェミニン
- リラックスした印象
- 柔らかく親しみやすい

### 向いているケース
- 女性向けサービス
- ウェルネス・ヘルスケア系
- 教育・学習サービス
- 優しく親しみやすい印象を与えたい場合

### 実装のポイント
```jsx
// パステルグラデーション背景
<div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">

// カードごとに異なるパステルカラー
const colorClasses = {
    purple: "bg-purple-50 border-purple-200 hover:border-purple-300 hover:bg-purple-100",
    green: "bg-green-50 border-green-200 hover:border-green-300 hover:bg-green-100",
    // ...
};

// グラデーションテキスト
<h1 className="font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">

// 半透明背景とぼかし
<div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-purple-100">
```

### スクリーンショット
- ![Welcome画面](soft-pastel-welcome.png)
- ![QueryBuilder画面](soft-pastel-querybuilder.png)

---

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
