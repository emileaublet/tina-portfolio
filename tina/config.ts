import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
      static: false,
    },
  },
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "mdx",
        ui: {
          router({ document }) {
            return `/projects/${document._sys.filename}`;
          },
          allowedActions: {
            createNestedFolder: false,
          },
        },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: true,
            description: "The main image for the project.",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            description: "A short summary of the project.",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "section",
                label: "Section",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    isTitle: true,
                    required: true,
                  },
                  {
                    name: "children",
                    label: "Content",
                    type: "rich-text",
                    isBody: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "mdx",
        ui: {
          router: () => {
            return "/";
          },

          allowedActions: {
            createNestedFolder: false,
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: true,
            description: "The main image of the homepage.",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "lead",
            label: "Lead",
            required: true,
            description: "The lead text for the homepage.",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            required: true,
            description: "The main body content for the homepage.",
            isBody: true,
          },
          {
            type: "string",
            name: "featuresTitle",
            label: "Features Title",
            required: true,
            description: "The title for the features section.",
          },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              {
                type: "object",
                name: "feature",
                label: "Feature",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    list: true,
                  },
                ],
              },
            ],
          },
          {
            type: "string",
            name: "achievementsTitle",
            label: "Achievements Title",
            required: true,
            description: "The title for the achievements section.",
          },
          {
            type: "object",
            name: "achievements",
            label: "Achievements",
            list: true,
            fields: [
              {
                type: "string",
                name: "certification",
                label: "Certification",
                required: true,
              },
              {
                type: "string",
                name: "entity",
                label: "Entity",
                required: true,
              },
              {
                type: "string",
                name: "date",
                label: "Date",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
              {
                type: "string",
                name: "urlDescription",
                label: "Url Description",
              },
            ],
          },
        ],
      },
      {
        name: "global",
        label: "Global Settings",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "metaTitle",
            label: "Meta Title",
            description: "Default meta title for the site.",
            required: true,
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
            description: "Default meta description for the site.",
            required: true,
          },
          {
            type: "rich-text",
            name: "footerText",
            label: "Footer Text",
            description: "Text displayed in the footer.",
            toolbarOverride: ["bold", "italic"],
          },
        ],
      },
    ],
  },
});
