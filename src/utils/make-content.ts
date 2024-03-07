import { getToday } from "./date";

const removeSpace = (content: string) => {
  return content.trim().replaceAll("    ", "");
};

interface MakeTemplateParams {
  title: string;
  description?: string;
  linkTitle?: string;
  link: string;
}

const makeTemplate = ({ title, description, linkTitle, link }: MakeTemplateParams) => {
  const today = getToday();

  return removeSpace(`
    ## 금주 문제 ${today}
    ### ${title}
    ${description ? `${description} <br /><br />` : ""}
    ${link ? `[${linkTitle ?? "LINK"}](${link})` : ""}
  `);
};

export const makeContent = (content: string, params: MakeTemplateParams) => {
  return removeSpace(`
    ${content}
    ${makeTemplate(params)}
  `);
};
