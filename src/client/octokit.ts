import { Octokit } from "@octokit/core";
import { Endpoints, RequestParameters } from "@octokit/types";
import env from "../config";

const octokit = new Octokit({
  auth: env.GITHUB_API_ACCESS_TOKEN,
});

export type RequestParams<RouteKey> = RouteKey extends keyof Endpoints
  ? Endpoints[RouteKey]["parameters"] & RequestParameters
  : RequestParameters;

export const request = <RouteKey extends keyof Endpoints>(
  route: RouteKey,
  params: RequestParams<RouteKey>,
): Promise<Endpoints[RouteKey]["response"]> => {
  return octokit.request(route, {
    ...params,
    headers: {
      accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};

export default octokit;
