export const slugify = (text) =>
  text
    ?.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")        // spaces → hyphens
    .replace(/[^\w\-]+/g, "")    // remove special chars
    .replace(/\-\-+/g, "-")      // multiple hyphens → single
    .replace(/^-+/, "")           // trim leading -
    .replace(/-+$/, "");          // trim trailing -