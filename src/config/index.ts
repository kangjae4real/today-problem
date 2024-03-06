import dotenv from "dotenv";

dotenv.config();

export interface Environment {
  GITHUB_API_ACCESS_TOKEN?: string;
}

const env: Environment = process.env;

export default env;
