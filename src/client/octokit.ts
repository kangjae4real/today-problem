import { Octokit } from "@octokit/core";
import { Endpoints, RequestParameters } from "@octokit/types";
import env from "../config";

const octokit = new Octokit({
  auth: env.GITHUB_API_ACCESS_TOKEN,
});

export type RequestParams<RouteKey> = RouteKey extends keyof Endpoints
  ? Endpoints[RouteKey]["parameters"] & RequestParameters
  : RequestParameters;

/*
 * @kangjae4real
 * NOTE: Octokit Client를 다시 Wrapping하는 이유.
 * Octokit Instance의 reqeust 메소드는 Parameter와 그 Return value의 Type Hinting이 되지 않습니다.
 * 사용의 불편함이 있어 accept Parameter를 포함하여 Wrapping하고 확장하여 사용합니다.
 */
export const request = <RouteKey extends keyof Endpoints>(
  route: RouteKey,
  params: RequestParams<RouteKey>,
  accept?: string,
): Promise<Endpoints[RouteKey]["response"]> => {
  return octokit.request(route, {
    ...params,
    headers: {
      accept: accept ?? "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};

export default octokit;
