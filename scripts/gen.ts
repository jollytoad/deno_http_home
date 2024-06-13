#!/usr/bin/env -S deno run --allow-ffi --allow-read --allow-write --allow-net=jsr.io

import { generateRoutesModule } from "@http/generate/generate-routes-module";

function generateRoutes() {
  console.debug("\nGenerating routes");

  return generateRoutesModule({
    fileRootUrl: import.meta.resolve("../app/routes"),
    moduleOutUrl: import.meta.resolve("../app/routes.ts"),
    pathMapper: "@http/discovery/fresh-path-mapper",
    moduleImports: "dynamic",
    verbose: true,
  });
}

export default generateRoutes;

if (import.meta.main) {
  await generateRoutes();
}
