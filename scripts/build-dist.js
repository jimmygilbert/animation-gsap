const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const cssDistDir = path.join(distDir, "css");

// Créer dist/css
if (!fs.existsSync(cssDistDir)) {
  fs.mkdirSync(cssDistDir, { recursive: true });
}

// Copier index.html avec chemins adaptés pour dist/
let indexHtml = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
indexHtml = indexHtml.replace("dist/home.js", "home.js");
fs.writeFileSync(path.join(distDir, "index.html"), indexHtml);

// Copier svg-presentation.html
let svgHtml = fs.readFileSync(path.join(__dirname, "..", "svg-presentation.html"), "utf8");
svgHtml = svgHtml.replace("dist/svg-presentation.js", "svg-presentation.js");
fs.writeFileSync(path.join(distDir, "svg-presentation.html"), svgHtml);

// Copier CSS
fs.copyFileSync(
  path.join(__dirname, "..", "css", "styles.css"),
  path.join(cssDistDir, "styles.css")
);

console.log("Assets copiés dans dist/");
