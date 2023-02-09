#!/usr/bin/env node
import * as fs from "fs";

import { Configuration, OpenAIApi } from "openai";

const INST = "コード レビュー";
const INST_EN = "Code review";
const USAGE = "rvw (-a|--api-key) <openai-api-key> <file>";

const [flag, apiKey, file] = process.argv.slice(2);
const isValidArgs = (flag == "-a" || flag == "--api-key") && apiKey && file;
if (!isValidArgs) {
  console.log(USAGE);
  process.exit();
}

const env = process.env;
const lang = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE;
const inst = lang.startsWith("ja") ? INST : INST_EN;
const code = fs.readFileSync(file);
const prompt = `${inst}

${code}`;

const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);
try {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.6,
    max_tokens: 256,
  });
  console.log(completion.data.choices[0].text);
} catch (error) {
  // Consider adjusting the error handling logic for your use case
  if (error.response) {
    console.error(error.response.status, error.response.data);
  } else {
    console.error(`Error with OpenAI API request: ${error.message}`);
  }
}
