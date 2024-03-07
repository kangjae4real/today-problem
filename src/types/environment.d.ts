export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_API_ACCESS_TOKEN?: string;
      OWNER?: string;
      REPO?: string;
      TARGET_PATH?: string;
      MESSAGE?: string;
      NAME?: string;
      EMAIL?: string;
      TITLE?: string;
      DESCRIPTION?: string;
      LINK_TITLE?: string;
      LINK?: string;
    }
  }
}
