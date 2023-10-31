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

const rentals = defineEventHandler(async (event) => {
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
    return [item.name, item.location].some((item2) => item2.match(filterRe));
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: "1",
      picture: "/img/illustrations/layouts/rental-1.svg",
      name: "1396 Redmond Street",
      location: "1396 Redmond Street, Apartment 12, Suite H 102, Los Angeles, CA",
      rating: 4,
      details: {
        rooms: 5,
        beds: 3,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true
      }
    },
    {
      id: "2",
      picture: "/img/illustrations/layouts/rental-2.svg",
      name: "24 Mulberry Street",
      location: "24 Mulberry Street, Suite 43, New York, NY",
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        wifi: true,
        cleaning: true
      }
    },
    {
      id: "3",
      picture: "/img/illustrations/layouts/rental-3.svg",
      name: "62 John Walberg Ave",
      location: "62 John Walberg Avenue, Apartment 10, Suite 24, Los Angeles, CA",
      rating: 5,
      details: {
        rooms: 4,
        beds: 2,
        bathrooms: 2
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true
      }
    },
    {
      id: "4",
      picture: "/img/illustrations/layouts/rental-4.svg",
      name: "48 Manhattan Ave",
      location: "48 Manhattan Avenue, Suite G12, New York, NY",
      rating: 5,
      details: {
        rooms: 5,
        beds: 4,
        bathrooms: 3
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true
      }
    },
    {
      id: "5",
      picture: "/img/illustrations/layouts/rental-5.svg",
      name: "12 Charity Street",
      location: "12 Charity Street, Apartment 49, Brooklynn, NY",
      rating: 4,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        cleaning: true
      }
    },
    {
      id: "6",
      picture: "/img/illustrations/layouts/rental-6.svg",
      name: "23 Bakery Street",
      location: "23 Bakery Street, Suite 121, New York, NY",
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true,
        otherGreatCoolThing: true
      }
    },
    {
      id: "7",
      picture: "/img/illustrations/layouts/rental-7.svg",
      name: "1028 Pasadena Ave",
      location: "1028 Pasadena Avenue, Suite F 24, Los Angeles, CA",
      rating: 5,
      details: {
        rooms: 7,
        beds: 5,
        bathrooms: 3
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true
      }
    },
    {
      id: "8",
      picture: "/img/illustrations/layouts/rental-8.svg",
      name: "54 Church Street",
      location: "54 Church Street, Apartment 2, New York, NY",
      rating: 5,
      details: {
        rooms: 2,
        beds: 1,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true
      }
    },
    {
      id: "9",
      picture: "/img/illustrations/layouts/rental-9.svg",
      name: "112 Old City District",
      location: "112 Old City District, Apartment 5 Suite 42, New York, NY",
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true
      }
    },
    {
      id: "10",
      picture: "/img/illustrations/layouts/rental-10.svg",
      name: "51 St Leonard Street",
      location: "51 St Leonard Street, Suite 23, New York, NY",
      rating: 5,
      details: {
        rooms: 4,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true
      }
    }
  ]);
}

export { rentals as default };
//# sourceMappingURL=rentals.mjs.map
