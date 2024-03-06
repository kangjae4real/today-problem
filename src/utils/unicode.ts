export const encodeUnicode = (str: string) => {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, args: number) =>
      String.fromCharCode(parseInt(`0x${args}`, 16)),
    ),
  );
};

export const decodeUnicode = (str: string) => {
  return decodeURIComponent(
    atob(str)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join(""),
  );
};
