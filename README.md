# 初回実行

以下コマンドを実行してください

1. リポジトリをクローン

```shell
git clone https://github.com/yokomaru/react-spa-memo-app.git
```

2. ディレクトリとブランチを変更

```shell
cd sample-react-memo-spa
git checkout my-react-spa-memo-app
```

3. npmをインストール

```shell
npm install
```

4. アプリを起動し、ブラウザを立ち上げてください

```shell
npm run dev
```

# メモアプリの操作

## ログイン・ログアウト
- ログアウト時はログインボタン、ログイン時はログアウトボタンが表示され、状態によりできることが異なります

### ログアウト時
- メモの閲覧のみ可能

### ログイン時はログアウトボタンを表示
- メモの追加/更新/削除が可能

# メモアプリの操作

## メモの一覧表示画面

- 一覧表示画面がトップ画面となります
- タイトル(内容の1行目)をクリックするとそのメモの編集状態に移行します

### デモ

![画面収録 2025-07-05 10 41 50](https://github.com/user-attachments/assets/86f21eb4-2e3a-4359-afc3-546eefbeab2e)

## メモの新規作成

- +をクリックすると「新規メモ」というメモファイルが作成され、編集状態に移行します。

### デモ

![画面収録 2025-07-05 10 43 03](https://github.com/user-attachments/assets/51e15cb3-20d8-4817-abe8-080717056f68)

## メモの編集

- テキストエリアにメモの内容が表示されるので自由に編集してください。
- 更新ボタンをクリックすると保存されます。
- 前後の改行や空白は除去されます。
- 何も入力がない場合は保存できません。

### デモ

![画面収録 2025-07-05 10 43 23](https://github.com/user-attachments/assets/52640b82-38eb-453f-9755-21c55efce43e)

#### 保存できないときのアラート

<img width="500" alt="スクリーンショット 2025-07-05 10 16 40" src="https://github.com/user-attachments/assets/6c9e1c81-6e79-40a6-8c2b-d316cbc1b111" />

## メモの削除

- 編集状態で削除ボタンをクリックするとメモは削除され、一覧画面に移動します。

### デモ

![画面収録 2025-07-05 10 43 37](https://github.com/user-attachments/assets/54f11300-18e2-4130-864b-5a46a6237263)

# ESLint & Prettier

## スタイルチェック

```shell
npm run lint
```

## スタイル修正

```shell
npm run fix
```
