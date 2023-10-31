import { d as defineEventHandler, g as getQuery } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki-es';
import 'consola/core';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'vue';
import 'ipx';

const freelancers = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = parseInt(query.perPage || "5", 10);
  const page = parseInt(query.page || "1", 10);
  const filter = query.filter || "";
  if (perPage >= 50) {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
  }
  const data = await getDemoData();
  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage)
  };
});
function filterDemoData(data, filter, page, perPage) {
  const offset = (page - 1) * perPage;
  if (!filter) {
    return data.slice(offset, offset + perPage);
  }
  const filterRe = new RegExp(filter, "i");
  return data.filter((item) => {
    return [item.name, item.location, item.role].some(
      (item2) => item2.match(filterRe)
    );
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: "5",
      name: "Mary Lebowski",
      location: "San Diego, CA",
      role: "Project Manager",
      roleColor: "primary",
      medias: {
        avatar: "/img/avatars/5.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 14,
        replies: 97,
        posts: 16
      },
      teams: [{ src: "/img/avatars/9.svg" }, { src: "/img/avatars/11.svg" }]
    },
    {
      id: "34",
      name: "Daniel Redbird",
      location: "Toronto, Canada",
      role: "Web Developer",
      roleColor: "orange",
      medias: {
        avatar: "/img/avatars/20.svg",
        flag: "/img/icons/flags/canada.svg"
      },
      stats: {
        projects: 45,
        replies: 12,
        posts: 5
      },
      teams: [
        { src: "/img/avatars/12.svg" },
        { src: "/img/avatars/22.svg" },
        { src: "/img/avatars/10.svg" }
      ]
    },
    {
      id: "8",
      name: "Hermann Mayer",
      location: "New York, NY",
      role: "Product Manager",
      roleColor: "secondary",
      medias: {
        avatar: "/img/avatars/16.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 14,
        replies: 97,
        posts: 16
      },
      teams: [{ src: "/img/avatars/7.svg" }, { src: "/img/avatars/23.svg" }]
    },
    {
      id: "40",
      name: "Jeanne Marchand",
      location: "Paris, France",
      role: "Mobile Developer",
      roleColor: "orange",
      medias: {
        avatar: "/img/avatars/19.svg",
        flag: "/img/icons/flags/france.svg"
      },
      stats: {
        projects: 6,
        replies: 12,
        posts: 8
      },
      teams: [
        { src: "/img/avatars/18.svg" },
        { src: "/img/avatars/13.svg" },
        { src: "/img/avatars/8.svg" },
        { src: "/img/avatars/4.svg" },
        { src: "/img/avatars/5.svg" },
        { src: "/img/avatars/6.svg" },
        { src: "/img/avatars/7.svg" },
        { src: "/img/avatars/9.svg" }
      ]
    },
    {
      id: "27",
      name: "Carmen Escudero",
      location: "Madrid, Spain",
      role: "HR Manager",
      roleColor: "primary",
      medias: {
        avatar: "/img/avatars/21.svg",
        flag: "/img/icons/flags/spain.svg"
      },
      stats: {
        projects: 8,
        replies: 158,
        posts: 54
      },
      teams: [{ src: "/img/avatars/18.svg" }]
    },
    {
      id: "9",
      name: "Anna Baker",
      location: "San Francisco, CA",
      role: "UI/UX Designer",
      roleColor: "green",
      medias: {
        avatar: "/img/avatars/9.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 19,
        replies: 28,
        posts: 12
      },
      teams: [{ src: "/img/avatars/12.svg" }, { src: "/img/avatars/5.svg" }]
    },
    {
      id: "18",
      name: "Esteban Castellanos",
      location: "Miami, FL",
      role: "UI/UX Designer",
      roleColor: "green",
      medias: {
        avatar: "/img/avatars/18.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 59,
        replies: 158,
        posts: 16
      },
      teams: [
        { src: "/img/avatars/19.svg" },
        { src: "/img/avatars/16.svg" },
        { src: "/img/avatars/22.svg" },
        { src: "/img/avatars/4.svg" },
        { src: "/img/avatars/5.svg" },
        { src: "/img/avatars/2.svg" },
        { src: "/img/avatars/6.svg" },
        { src: "/img/avatars/9.svg" },
        { src: "/img/avatars/7.svg" },
        { src: "/img/avatars/3.svg" }
      ]
    },
    {
      id: "10",
      name: "Kendra Wilson",
      location: "Miami, FL",
      role: "Business Analyst",
      roleColor: "primary",
      medias: {
        avatar: "/img/avatars/10.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 42,
        replies: 15,
        posts: 2
      },
      teams: [{ src: "/img/avatars/15.svg" }, { src: "/img/avatars/22.svg" }]
    },
    {
      id: "25",
      name: "Melany Wallace",
      location: "San Jose, CA",
      role: "Web Developer",
      roleColor: "orange",
      medias: {
        avatar: "/img/avatars/25.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 17,
        replies: 22,
        posts: 4
      },
      teams: [
        { src: "/img/avatars/10.svg" },
        { src: "/img/avatars/23.svg" },
        { src: "/img/avatars/16.svg" },
        { src: "/img/avatars/5.svg" },
        { src: "/img/avatars/4.svg" }
      ]
    },
    {
      id: "7",
      name: "Thomas Anderson",
      location: "San Diego, CA",
      role: "Software Engineer",
      roleColor: "orange",
      medias: {
        avatar: "/img/avatars/7.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 31,
        replies: 82,
        posts: 14
      },
      teams: [{ src: "/img/avatars/9.svg" }, { src: "/img/avatars/14.svg" }]
    }
  ]);
}

export { freelancers as default };
//# sourceMappingURL=freelancers.mjs.map
