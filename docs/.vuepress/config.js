module.exports = {
  base: "/vuepress-play/",
  title: "Hello VuePress",
  description: "Just playing around",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "Learn",
        items: [
          {
            text: "learn",
            link: "/learn/",
          },
          {
            text: "learn2",
            link: "/learn/learn2.md",
          },
        ],
      },
      { text: "External", link: "https://google.com" },
      //   {
      //     text: "External_2",
      //     link: "https://google.com",
      //     target: "_self",
      //     rel: "",
      //   },
      //   {
      //     text: "Languages",
      //     ariaLabel: "Language Menu",
      //     items: [
      //       { text: "Chinese", link: "/language/chinese/" },
      //       { text: "Japanese", link: "/language/japanese/" },
      //     ],
      //   },
    ],
    sidebar: "auto",
    // displayAllHeaders: true, // 默认值：false
  },
};
