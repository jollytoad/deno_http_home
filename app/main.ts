#!/usr/bin/env -S deno run --allow-net --allow-read

import handler from "./handler.ts";

await Deno.serve(handler).finished;
