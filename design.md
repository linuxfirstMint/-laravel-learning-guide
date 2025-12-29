# デザインパターン一覧

このプロジェクトでは、複数のデザインパターンを実験的に実装しています。各デザインパターンは独立したブランチで管理されています。

## ブランチ構造

```
main
└── experiment/design-improvements
    └── css_fw_tailwind (Tailwind CSS v4 base)
        ├── design/neo-brutalism
        ├── design/terminal-hacker
        ├── design/soft-pastel
        ├── design/brutalist
        └── design/dark-mode
```

---

## 1. Neo-Brutalism（ネオブルータリズム）

### 特徴
- 蛍光色・ネオンカラーの大胆な使用
- 非対称レイアウト（要素の回転）
- 太い黒枠とハードシャドウ
- モダンで遊び心のある「計算された無骨さ」
- 伝統的なブルータリズムの現代的進化版

### カラーパレット
- **背景**: 白 (bg-white)
- **蛍光色**: cyan-400, lime-400, fuchsia-400, orange-400, violet-400, emerald-400, pink-400, yellow-300
- **強調**: 黒 (border-black, text-black)
- **コード表示**: 黒背景 + ライム文字 (bg-black + text-lime-400)

### タイポグラフィ
- **フォントウェイト**: font-black（極太）
- **サイズ**: 大胆な大きさ（text-7xl, text-5xl, text-4xl）

### エフェクト
- **ボーダー**: border-4（太い黒枠）
- **シャドウ**: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`（ハードシャドウ）
- **ホバー**: シャドウ拡大 + 要素移動 (`hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]`)
- **回転**: rotate-1, rotate-2, -rotate-1, -rotate-2（非対称レイアウト）

### レイアウト
- 各カードが異なる蛍光色
- 各要素に異なる回転角度を適用
- 白背景に対する強烈なコントラスト

### 雰囲気
モダン、エネルギッシュ、遊び心、反抗的、若々しい

### 適用場面
- クリエイティブなプロジェクト
- 若年層向けサービス
- デザイン性を強調したい場合
- 印象に残るブランディング

### 実装のポイント
```jsx
// 各カードに異なる色と回転を割り当て
const cards = [
    { color: "bg-cyan-400", rotate: "rotate-1" },
    { color: "bg-lime-400", rotate: "-rotate-1" },
    { color: "bg-fuchsia-400", rotate: "rotate-2" },
];

// ハードシャドウと回転の組み合わせ
<div className={`${card.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${card.rotate}`}>
```

### スクリーンショット
- [Welcome Page](screenshots/neo-brutalism/welcome.png)
- [Query Builder Page](screenshots/neo-brutalism/querybuilder.png)

---

## 2. Terminal / Hacker（ターミナル風）

### 特徴
- レトロなCRTターミナルの再現
- 完全な黒背景＋グリーンテキスト
- コマンドライン風インターフェース
- スキャンライン効果
- 80-90年代のハッカー美学

### カラーパレット
- **背景**: 完全な黒 (bg-black)
- **テキスト**: グリーン (text-green-400, text-green-500)
- **強調**: より明るいグリーン (bg-green-500, text-green-300)

### タイポグラフィ
- **フォント**: font-mono（等幅フォント）
- **スタイル**: font-bold

### エフェクト
- **スキャンライン**: `bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse`
- **ホバー**: 色反転 (`hover:bg-green-400 hover:text-black`)
- **ボーダー**: border-green-500

### レイアウト
- ターミナルのタイトルバー (`root@laravel:~$`)
- コマンドプロンプト表示 (`$ ./script.sh`)
- ログ風のラベル表記 (`[OUTPUT]`, `[DEBUG]`, `[i]`)

### 雰囲気
レトロ、テクニカル、ハッカー、ノスタルジック、クール

### 適用場面
- 開発者向けツール
- CLI/ターミナルアプリケーション
- テック系イベント
- レトロゲーム風プロジェクト

### 実装のポイント
```jsx
// スキャンライン効果
<div className="fixed inset-0 pointer-events-none opacity-10">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse"></div>
</div>

// ターミナルタイトルバー
<div className="bg-green-500 text-black px-4 py-1 font-bold">
    root@laravel:~$
</div>

// コマンドプロンプト
<span className="text-green-500">$</span> ./command.sh
```

### スクリーンショット
- [Welcome Page](screenshots/terminal-hacker/welcome.png)
- [Query Builder Page](screenshots/terminal-hacker/querybuilder.png)

---

## 3. Soft Pastel（ソフトパステル）

### 特徴
- 柔らかいパステルカラー
- グラデーション背景
- 透明度を活用した重なり
- 優しく穏やかな印象
- フェミニンでリラックスした雰囲気

### カラーパレット
- **背景**: グラデーション (from-purple-50 via-pink-50 to-blue-50)
- **カード**: purple-50, green-50, rose-50, blue-50, amber-50, teal-50, pink-50
- **テキスト**: グレー系 (text-gray-700, text-gray-600)

### タイポグラフィ
- **フォントウェイト**: font-light（タイトル）, font-normal（本文）
- **スタイル**: 柔らかく読みやすい

### エフェクト
- **透明度**: bg-white/60, bg-white/80
- **ブラー**: backdrop-blur-sm
- **シャドウ**: shadow-lg（ソフトシャドウ）
- **ホバー**: scale-105（軽い拡大）

### レイアウト
- カード型レイアウト
- 丸みを帯びた角 (rounded-2xl)
- 余白を多めに取った配置

### 雰囲気
優しい、穏やか、フェミニン、リラックス、癒し

### 適用場面
- ウェルネス・ヘルスケア
- 教育コンテンツ
- 女性向けサービス
- カジュアルなドキュメント

### 実装のポイント
```jsx
// グラデーション背景
<div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">

// 半透明カード
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
```

### スクリーンショット
- [Welcome Page](screenshots/soft-pastel/welcome.png)
- [Query Builder Page](screenshots/soft-pastel/querybuilder.png)

---

## 4. Brutalist（ブルータリスト）

### 特徴
- ミニマルで無骨なデザイン
- 太い黒枠
- ハードシャドウ
- ビビッドな原色
- 装飾を排した機能美

### カラーパレット
- **背景**: 白 (bg-white)
- **原色**: yellow-400, green-400, red-400, blue-400, purple-400, cyan-400, pink-400
- **強調**: 黒 (border-black, text-black)
- **コード表示**: 黒背景 + グリーン文字 (bg-black + text-green-400)

### タイポグラフィ
- **フォントウェイト**: font-black（極太）
- **スタイル**: uppercase（大文字）, tracking-tight（文字詰め）

### エフェクト
- **ボーダー**: border-4, border-6, border-8（太い黒枠）
- **シャドウ**: `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`（ハードシャドウ）
- **ホバー**: シャドウ拡大 + 要素移動

### レイアウト
- グリッドレイアウト
- 明確な区画分け
- 直線的な配置

### 雰囲気
無骨、力強い、シンプル、モダン、クリーン

### 適用場面
- ポートフォリオサイト
- アートプロジェクト
- モダンなドキュメント
- デザイン重視のサービス

### 実装のポイント
```jsx
// 太い黒枠とハードシャドウ
<div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

// 大文字＋極太フォント
<h1 className="font-black uppercase tracking-tight">
```

### スクリーンショット
- [Welcome Page](screenshots/brutalist/welcome.png)
- [Query Builder Page](screenshots/brutalist/querybuilder.png)

---

## 5. Dark Mode（ダークモード）

### 特徴
- 目に優しいダークテーマ
- 落ち着いた配色
- 長時間の閲覧に適した視認性
- モダンなグラデーション

### カラーパレット
- **背景**: グラデーション (from-gray-900 via-gray-800 to-gray-900)
- **カード**: gray-800/50（半透明）
- **テキスト**: 白〜グレー (text-white, text-gray-300, text-gray-400)
- **アクセント**: blue-400, purple-400, green-400

### タイポグラフィ
- **フォントウェイト**: font-bold（タイトル）, font-normal（本文）
- **スタイル**: 視認性重視

### エフェクト
- **透明度**: bg-gray-800/50
- **ブラー**: backdrop-blur-sm
- **シャドウ**: shadow-xl（ソフトシャドウ）
- **ホバー**: bg-gray-700/50（背景色変化）

### レイアウト
- カード型レイアウト
- 丸みを帯びた角 (rounded-lg)
- 適度な余白

### 雰囲気
落ち着き、モダン、プロフェッショナル、集中

### 適用場面
- 長時間使用するアプリケーション
- 開発者向けツール
- ナイトモード
- プロフェッショナルなサービス

### 実装のポイント
```jsx
// ダークグラデーション背景
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

// 半透明カード
<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl">
```

### スクリーンショット
- [Welcome Page](screenshots/dark-mode/welcome.png)
- [Query Builder Page](screenshots/dark-mode/querybuilder.png)

---

## デザインパターンの選び方

| デザイン | 適用場面 | 雰囲気 | 実装難易度 |
|---------|---------|--------|-----------|
| Neo-Brutalism | クリエイティブ、若年層向け | エネルギッシュ、遊び心 | 中 |
| Terminal/Hacker | 開発者向け、テック系 | レトロ、クール | 低 |
| Soft Pastel | ウェルネス、教育 | 優しい、穏やか | 低 |
| Brutalist | ポートフォリオ、アート | 無骨、力強い | 低 |
| Dark Mode | 長時間使用、プロ向け | 落ち着き、集中 | 低 |

## 技術スタック

- **フレームワーク**: Laravel 11.x + React
- **CSS**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **SPA**: Inertia.js
- **ビルドツール**: Vite

## ブランチの切り替え方

```bash
# ベースブランチに戻る
git checkout css_fw_tailwind

# 特定のデザインに切り替える
git checkout design/neo-brutalism
git checkout design/terminal-hacker
git checkout design/soft-pastel
git checkout design/brutalist
git checkout design/dark-mode
```
