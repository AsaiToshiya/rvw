English | [日本語](./README-ja.md)

# rvw

`rvw` is a command to review code by AI.

```
$ rvw -a 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 index.js

// This code looks good. Some possible areas of improvement might include changing the error handling logic to better fit your use case and adding comments to explain the code and make it easier to read.

```

## Install

```
npm i -g @asaitoshiya/rvw
```

## Usage

```
rvw (-a|--api-key) <openai-api-key> <file>
```

## License

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
