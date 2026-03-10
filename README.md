# 星座早見盤 - Star Chart & Fortune Telling

モダンなWeb技術で再現した、インタラクティブな星座早見盤と運勢占いサイト

## 🌟 プロジェクト概要

小学校の頃に配られた懐かしい「星座早見盤」をSvelteとモダンなWeb技術で再現しました。

日本天文学会が編集した『星座早見』は1907年（明治40年）9月に初版発行され、1950年代に宇宙への関心が高まったことで、学校教育や一般向けに広く普及したアイテムです。そんな100年以上の長い歴史のある教具を、最新のWeb技術で蘇らせました。

## ✨ 主な機能

- **星座早見盤ビューワー** - インタラクティブな星座早見盤で星座を探索
- **星座占い** - 日々の運勢を星座別に表示
- **レスポンシブデザイン** - スマートフォンやタブレットに対応
- **スムーズなアニメーション** - SVGとカスタムトランジションの活用

## 🛠 技術スタック

- **フレームワーク** - Svelte + SvelteKit
- **スタイリング** - Tailwind CSS
- **言語** - TypeScript
- **その他** - Vite, PostCSS, ESLint

## 🚀 セットアップと実行

### 必要な環境

- Node.js 18 以上
- npm, yarn, または pnpm

### インストール

```sh
npm install
```

### 開発サーバーの起動

```sh
npm run dev

# ブラウザで自動的に開く
npm run dev -- --open
```

開発サーバーは `http://localhost:5173` で起動します。

### ビルド

```sh
npm run build
```

### プレビュー

```sh
npm run preview
```

## 📁 プロジェクト構成

```
src/
├── lib/
│   ├── components/      # Svelteコンポーネント
│   │   ├── organisms/   # 大規模なコンポーネント
│   │   └── ui/          # UIコンポーネント
│   ├── data/            # データファイル
│   ├── utils.ts         # ユーティリティ関数
│   └── stores/          # Svelte Store
├── routes/              # ページルーティング
│   ├── +page.svelte     # ホームページ（星座早見盤）
│   ├── fortune-telling/ # 星座占いページ
│   └── profile/         # プロフィールページ
└── app.css              # グローバルスタイル
```

## 📝 ライセンス

MIT

## 👤 作成者

**Tomoru Nishie**

- GitHub: https://github.com/fewblocks
- Qiita: https://qiita.com/mark_posts_stocker
