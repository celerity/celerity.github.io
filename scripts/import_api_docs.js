const fs = require("fs");
const path = require("path");

// TODO: Change so we copy files from a source directory to a destination and only include what we actually need
// TODO: Do we actually need the api_docs.js file? Or can we just write it inline?
// TODO: Write a _category_.json file for each subdirectory

if (process.argv[2] == null) {
  console.error(
    `Usage: node ${path.basename(process.argv[1])} <input directory>`
  );
  process.exit(1);
}

const inputPath = process.argv[2];
const outputPath = "./celerity-runtime/docs/api";
const baseUrl = "/docs/api";

if (!fs.existsSync(inputPath)) {
  console.error(`Input directory does not exist: ${inputPath}`);
  process.exit(1);
}

/**
 * Write the _category_.json settings file for a subdirectory.
 * Importantly, here we disable collapsing of entries in the sidebar.
 * This is required because we hide all of the entries except for the index file
 * using the custom `sidebar_class_name` that is set in writeMdx.
 */
function writeCategorySettings(subdir) {
  const label = subdir.charAt(0).toUpperCase() + subdir.slice(1);
  const settings = {
    label,
    collapsible: false,
  };
  const json = JSON.stringify(settings, null, 2);
  fs.writeFileSync(path.join(outputPath, subdir, "_category_.json"), json);
}

function writeMdx(subdir, fileName, title) {
  const mdxContent = `\
---
hide_title: true
pagination_next: null
pagination_prev: null
custom_edit_url: null
sidebar_class_name: "${fileName === "index" ? "sidebar-show" : "sidebar-hidden"}"
title: "${title}"
---
import html from "!!raw-loader!./${fileName}.html";

<head>
  <script src="/js/highlight.min.js" />
  <script src="/js/api_docs.js" defer />
</head>

<div dangerouslySetInnerHTML={{ __html: html }} />`;

  fs.writeFile(
    path.join(outputPath, subdir, `${fileName}.mdx`),
    mdxContent,
    (err) => {
      if (err) throw err;
      console.log(`Generated ${subdir}/${fileName}.mdx`);
    }
  );
}

function parseTitle(html) {
  let title = "";
  const match = html.match(/<h1>(.*?)<\/h1>/);
  if (match != null) {
    title = match[1];
  } else {
    // We have to fiddle it out of the breadcrumbs...
    // If that doesn't work, give up.
    const breadcrumbMatch = html.match(/<li class="is-active">(.*?)<\/nav>/);
    if (breadcrumbMatch != null) {
      const spanMatch = breadcrumbMatch[1].match(/<span>(.*?)<\/span>/);
      if (spanMatch != null) {
        title = spanMatch[1];
      }
    }
  }
  // Undo HTML escaping
  title = title.replace(/&gt;/g, ">");
  title = title.replace(/&lt;/g, "<");
  return title;
}

function fixUrls(html, allDirs) {
  // We have to remove links to `index.html` as well as all trailing `.html` to make it work with Docusaurus
  // FIXME: This should be done during generation instead
  html = html.replace(/index\.html/g, "");
  html = html.replace(/\.html/g, "");
  // We also have to replace all relative "../" links with "../../", since in Docusaurus each file becomes a subdirectory in the URL
  // FIXME: We should have an option to generate all URLs relative to some base URL

  for (const subdir of allDirs) {
    html = html.replace(
      new RegExp(`"\.\.\/${subdir}/`, "g"),
      `"${baseUrl}/${subdir}/`
    );
  }

  return html;
}

function processSubdir(subdir, allDirs) {
  fs.mkdirSync(path.join(outputPath, subdir), { recursive: true });
  writeCategorySettings(subdir);

  fs.readdir(path.join(inputPath, subdir), (err, files) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach((file) => {
      if (path.extname(file) !== ".html") return;

      const fileName = path.basename(file, ".html");

      const html = fs.readFileSync(path.join(inputPath, subdir, file), "utf8");
      const title = parseTitle(html);
      const withFixedUrls = fixUrls(html, allDirs);

      fs.writeFileSync(
        path.join(outputPath, subdir, `${fileName}.html`),
        withFixedUrls
      );

      writeMdx(subdir, fileName, title);
    });
  });
}

fs.readdir(inputPath, { recursive: true }, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  allDirs = [];
  files.forEach((file) => {
    if (fs.lstatSync(path.join(inputPath, file)).isDirectory()) {
      allDirs.push(file);
    }
  });
  for (const subdir of allDirs) {
    processSubdir(subdir, allDirs);
  }
});
