[English](./README.md) | 日本語

# rvw

`rvw` は、AI でコード レビューするコマンドです。

```
$ rvw -a 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 index.js

// このコードレビューは、`OpenAIApi`を使用してOpenAI APIを呼び出すNode.jsプログラムをレビューするものです。このコードは、OpenAI APIキーを使用してプロンプトを提示し、OpenAI APIからテキスト補完を取得します。

// コード全体として、構造的にはかなりきれいになっています。コードの読みやすさが向上し、関数の再利用性もあります。ただし、エラーハンドリングが不十分です。OpenAI APIが例外をスローする場合、ステータスコードとエラーコードを表示するだけ

```

## インストール

```
npm i -g @asaitoshiya/rvw
```

## 使い方

```
rvw (-a|--api-key) <openai-api-key> <file>
```

## ライセンス

    Copyright (C) 2023  Asai Toshiya

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
