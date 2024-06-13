import routes from "./routes.ts";
import { handle } from "@http/route/handle";
import { staticRoute } from "@http/route-deno/static-route";

export default handle([
  routes,
  staticRoute("/", import.meta.resolve("./static")),
]);
