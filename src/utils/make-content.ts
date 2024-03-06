const removeSpace = (content: string) => {
  return content.trim().replaceAll("    ", "");
};

interface MakeTemplateParams {
  title: string;
  description?: string;
  link: string;
}

const makeTemplate = ({ title, description, link }: MakeTemplateParams) => {
  return removeSpace(`
    ## 금주 문제
    ### ${title}
    ${description ? `${description} <br />` : ""}
    ${link ? `[Link](${link})` : ""}
  `);
};

export const makeContent = (content: string, params: MakeTemplateParams) => {
  return removeSpace(`
    ${content}
    ${makeTemplate(params)}
  `);
};
