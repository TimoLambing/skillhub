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

const index = defineEventHandler(async (event) => {
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
    return [item.name, item.author.name].some((item2) => item2.match(filterRe));
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      name: "Company UX Guide",
      icon: "/img/icons/files/pdf.svg",
      size: "4.7MB",
      version: "1.5.2",
      uploaded: "2 weeks ago",
      author: {
        name: "Hermann M.",
        picture: "/img/avatars/16.svg"
      }
    },
    {
      id: 1,
      name: "Thech summit expenses",
      icon: "/img/icons/files/sheet.svg",
      size: "34KB",
      version: "1.1.3",
      uploaded: "3 days ago",
      author: {
        name: "Clarissa M.",
        picture: "/img/avatars/5.svg"
      }
    },
    {
      id: 2,
      name: "Project outline",
      icon: "/img/icons/files/doc-2.svg",
      size: "77KB",
      version: "1.0.0",
      uploaded: "5 days ago",
      author: {
        name: "Clark D.",
        picture: "/img/avatars/3.svg"
      }
    },
    {
      id: 3,
      name: "UX presentation",
      icon: "/img/icons/files/ppt.svg",
      size: "2.3MB",
      version: "1.0.0",
      uploaded: "2 weeks ago",
      author: {
        name: "Terry S.",
        picture: "/img/avatars/11.svg"
      }
    },
    {
      id: 4,
      name: "Website Homepage Redesign",
      icon: "/img/icons/files/ai.svg",
      size: "4.8MB",
      version: "1.0.0",
      uploaded: "2 weeks ago",
      author: {
        name: "Lana E.",
        picture: "/img/avatars/4.svg"
      }
    },
    {
      id: 5,
      name: "UX Ramp Up for Interns",
      icon: "/img/icons/files/doc-2.svg",
      size: "1.8MB",
      version: "1.2.0",
      uploaded: "3 days ago",
      author: {
        name: "Howard L.",
        picture: "/img/avatars/20.svg"
      }
    },
    {
      id: 6,
      name: "2020 Projects Digest",
      icon: "/img/icons/files/pdf.svg",
      size: "8.9MB",
      version: "1.3.4",
      uploaded: "3 weeks ago",
      author: {
        name: "Mike T.",
        picture: "/img/avatars/1.svg"
      }
    },
    {
      id: 7,
      name: "Financial Report - 2022",
      icon: "/img/icons/files/doc-2.svg",
      size: "1.2MB",
      version: "1.0.4",
      uploaded: "5 days ago",
      author: {
        name: "John Baxter.",
        picture: "/img/avatars/14.svg"
      }
    },
    {
      id: 8,
      name: "2020 Supplier Expenses",
      icon: "/img/icons/files/doc-2.svg",
      size: "250KB",
      version: "1.0.0",
      uploaded: "6 days ago",
      author: {
        name: "Maya R.",
        picture: "/img/avatars/2.svg"
      }
    },
    {
      id: 9,
      name: "Website About Page Redesign",
      icon: "/img/icons/files/ai.svg",
      size: "3.9MB",
      version: "1.2.4",
      uploaded: "4 days ago",
      author: {
        name: "Emilio R.",
        picture: "/img/avatars/8.svg"
      }
    },
    {
      id: 10,
      name: "Website Pricing Page Redesign",
      icon: "/img/icons/files/ai.svg",
      size: "2.6MB",
      version: "1.2.1",
      uploaded: "3 days ago",
      author: {
        name: "Nicole R.",
        picture: "/img/avatars/9.svg"
      }
    },
    {
      id: 11,
      name: "Financial Report - 2021",
      icon: "/img/icons/files/doc-2.svg",
      size: "1.6MB",
      version: "1.7.2",
      uploaded: "1 year ago",
      author: {
        name: "Alessandra F.",
        picture: "/img/avatars/21.svg"
      }
    },
    {
      id: 12,
      name: "2022 Supplier Expenses",
      icon: "/img/icons/files/doc-2.svg",
      size: "250KB",
      version: "1.0.0",
      uploaded: "6 days ago",
      author: {
        name: "Arthur S.",
        picture: "/img/avatars/7.svg"
      }
    },
    {
      id: 13,
      name: "	Website Contact Page Redesign",
      icon: "/img/icons/files/ai.svg",
      size: "3.8",
      version: "1.1.5",
      uploaded: "8 days ago",
      author: {
        name: "Kendra W.",
        picture: "/img/avatars/10.svg"
      }
    },
    {
      id: 14,
      name: "Company Brand Book",
      icon: "/img/icons/files/pdf.svg",
      size: "7.9MB",
      version: "2.5.1",
      uploaded: "3 weeks ago",
      author: {
        name: "Hermann M.",
        picture: "/img/avatars/16.svg"
      }
    },
    {
      id: 15,
      name: "2021 Projects Digest",
      icon: "/img/icons/files/pdf.svg",
      size: "5.9",
      version: "3.4.8",
      uploaded: "1 year ago",
      author: {
        name: "Tony U.",
        picture: "/img/avatars/23.svg"
      }
    },
    {
      id: 16,
      name: "Landing page redesign",
      icon: "/img/icons/files/ai.svg",
      size: "1.8MB",
      version: "1.0.0",
      uploaded: "3 days ago",
      author: {
        name: "Clara C.",
        picture: "/img/avatars/22.svg"
      }
    },
    {
      id: 17,
      name: "Budget reporting",
      icon: "/img/icons/files/sheet.svg",
      size: "34KB",
      version: "1.0.0",
      uploaded: "5 days ago",
      author: {
        name: "Daniela D.",
        picture: "/img/avatars/24.svg"
      }
    },
    {
      id: 18,
      name: "2023 startegy report",
      icon: "/img/icons/files/pdf.svg",
      size: "4.3MB",
      version: "1.1.0",
      uploaded: "9 days ago",
      author: {
        name: "Helen T.",
        picture: "/img/avatars/25.svg"
      }
    },
    {
      id: 19,
      name: "Investors presentation",
      icon: "/img/icons/files/ppt.svg",
      size: "34KB",
      version: "1.1.5",
      uploaded: "4 days ago",
      author: {
        name: "Kendra W.",
        picture: "/img/avatars/10.svg"
      }
    }
  ]);
}

export { index as default };
//# sourceMappingURL=index3.mjs.map
