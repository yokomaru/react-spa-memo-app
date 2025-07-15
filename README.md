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


![画面収録-2025-07-15-7 47 27](https://github.com/user-attachments/assets/dc356dcd-029c-4a6f-8b6e-1ef36b33b528)

### ログアウト時

- メモの閲覧のみ可能

<img width="800" height="620" alt="スクリーンショット 2025-07-15 7 45 22" src="https://github.com/user-attachments/assets/6118c59d-ba42-4af1-879e-44a44694dbab" />


### ログイン時はログアウトボタンを表示

- メモの追加/更新/削除が可能

<img width="800" height="602" alt="スクリーンショット 2025-07-15 7 45 27" src="https://github.com/user-attachments/assets/8e22a1d7-0d44-4adf-abef-b9e454639e59" />

# メモアプリの操作

## メモの一覧表示画面

- 一覧表示画面がトップ画面となります
- タイトル(内容の1行目)をクリックするとそのメモの編集状態に移行します

### デモ
![画面収録-2025-07-16-6 23 46](https://github.com/user-attachments/assets/50278e44-d20a-496e-8794-23c16fe3cfb6)

## メモの新規作成

- +をクリックすると「新規メモ」というメモファイルが作成され、編集状態に移行します

### デモ

![画面収録-2025-07-15-7 47 43](https://github.com/user-attachments/assets/7a3a5352-c173-4ff5-aa23-8742a07b9874)

## メモの編集

- テキストエリアにメモの内容が表示されるので自由に編集してください
- 更新ボタンをクリックすると保存されます
- 前後の改行や空白は除去されます
- 何も入力がない場合は保存できません

### デモ

![画面収録-2025-07-15-7 48 09](https://github.com/user-attachments/assets/f397c800-2889-44c3-bd15-95de1616b20e)
#### 保存できないときのアラート

![画面収録-2025-07-15-7 48 40](https://github.com/user-attachments/assets/7411f05d-5dd8-4143-adce-c5be6fbb8a5e)

## メモの削除

- 編集状態で削除ボタンをクリックするとメモは削除され、一覧画面に移動します

### デモ

![画面収録-2025-07-15-7 48 27](https://github.com/user-attachments/assets/3aa250a8-c558-4c15-ac26-4c2528e8edce)

# ESLint & Prettier

## スタイルチェック

```shell
npm run lint
```

## スタイル修正

```shell
npm run fix
```
