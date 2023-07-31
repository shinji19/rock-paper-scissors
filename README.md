# rock-paper-scissors

## 環境構築

```sh
# install node:20.3.0
npm install
npm run dev
```
or
```
docker compose up -d
docker compose exec frontend bash
npm install
npm run dev
```

## 実行の流れ

- MetaMaskをインストール
- Astar networkのテストネットShibuyaをMetaMaskに追加し、切り替える
  - https://docs.astar.network/docs/build/environment/endpoints/
  - ページ中程にあるShibuya Networkタブをクリックすると設定項目が確認できる
- テスト用のトークンを取得
  - https://docs.astar.network/docs/build/EVM/first-contract/deploy-shibuya/#obtain-sby-token-from-the-faucet
- http://localhost:5176を開く
- ページ上部の「METAMASK CONNECT」をクリック


<img width="1421" alt="Vite___React___TS" src="https://github.com/shinji19/rock-paper-scissors/assets/6725960/9c45ce9d-2a0d-4ea1-b7a0-011055b0ca83">

## 何を考えて実装したか

- Solidtyを書くときにテスト・デプロイを簡単にするために、メジャーなhardhatを利用
- フロントはメジャーなReact(Vite)を利用。ブロックチェーンの繋ぎ込みはEthers.jsを使ったことがあるので、これを利用
- 主催者のジャンケンの手を秘匿化
  - ハッシュ化した手を保存
  - ハッシュ化した際に使ったソルトをlocalStrageに保存しておき、勝敗判定する際にソルトをコントラクトに送り、手に問題ないことを検証
  - 主催者は対戦相手が手を登録した時点で勝敗がわかるため、自分が負けていると勝敗確定しないケースがありえる。対策として、一定時間経過すれば対戦相手がデポジットされた資産を受け取れるようにした

