export const config = {
  github: {
    login: "jonnyan404", // github login name, not user name
    repo: "jonnyan404.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Urodele",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/glink25",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
