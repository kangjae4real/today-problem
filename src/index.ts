import { request } from "./client/octokit";
import { encodeUnicode } from "./utils/unicode";
import { makeContent } from "./utils/make-content";

const { OWNER, REPO, TARGET_PATH, MESSAGE, NAME, EMAIL } = process.env;

if (!OWNER || !REPO || !TARGET_PATH || !MESSAGE || !NAME || !EMAIL) {
  console.log("Environment variable is missing. Please check .env");
  process.exit(1);
}

console.log("Get README.md...");

const { data: readmeRaw } = await request(
  "GET /repos/{owner}/{repo}/readme",
  {
    owner: OWNER,
    repo: REPO,
  },
  "application/vnd.github.raw+json",
);
const readme: string = readmeRaw as unknown as string;

if (!readme) {
  console.log("README.md is undefined.");
  process.exit(1);
}

console.log("Get README.md sha...");

const {
  // @ts-ignore
  data: { sha },
} = await request("GET /repos/{owner}/{repo}/contents/{path}", {
  owner: OWNER,
  repo: REPO,
  path: TARGET_PATH,
});

if (!sha) {
  console.log("README.md sha is undefined.");
  process.exit(1);
}

let encodeReadme: string;

try {
  console.log("Encode README.md...");
  encodeReadme = encodeUnicode(
    makeContent(readme, { title: "해시", description: "해시문제", link: "https://www.naver.com" }),
  );
} catch (error: unknown) {
  throw new Error("Encode Failed.");
}

console.log("Update README.md...");

const { data: result } = await request("PUT /repos/{owner}/{repo}/contents/{path}", {
  owner: OWNER,
  repo: REPO,
  path: TARGET_PATH,
  message: MESSAGE,
  committer: {
    name: NAME,
    email: EMAIL,
  },
  content: encodeReadme,
  sha,
});

if (!result) {
  console.log("Update Failed.");
  process.exit(1);
}

console.log("Done!");
