## Nextjs 15.1 (React19.0.0)と特定のライブラリの検証用リポジトリ

- tailwindcss v3 → tailwind v4へ自動アップデートコマンド

```
npx @tailwindcss/upgrade@next
```

## daisy UI 5.0.0-beta.7 のインストール
```
npm i -D daisyui@beta
```

global.cssに以下追記
```css
@plugin "daisyui";
```