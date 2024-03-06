export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_API_ACCESS_TOKEN?: string;
    }
  }
}
