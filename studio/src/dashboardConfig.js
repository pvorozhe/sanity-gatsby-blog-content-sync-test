export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "619c18002de6869e5909a224",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-content-sync-test-studio",
                  apiId: "c1cba021-d2f8-4d79-9b9a-1d541a5a7ca6",
                },
                {
                  buildHookId: "619c180010d20a900d49b6c7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-content-sync-test",
                  apiId: "68c541fd-2efd-4501-906b-958a7b52ec61",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pvorozhe/sanity-gatsby-blog-content-sync-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-content-sync-test.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
