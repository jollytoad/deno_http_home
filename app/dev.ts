#!/usr/bin/env -S deno run --allow-ffi --allow-read --allow-write --allow-net --watch

import generateRoutes from "../scripts/gen.ts";
import init from "@http/host-deno-local/init";
import { lazy } from "@http/route/lazy";

await generateRoutes();

// This allows loading of a new or modified routes.ts module
const handler = lazy(import.meta.resolve("./handler.ts"));

await Deno.serve(await init(handler)).finished;
