import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("projects", "routes/projects.tsx"),
    route("services", "routes/services.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),

  layout("layouts/jekkey-layout.tsx", [
    route("jekkey", "routes/jekkey/jekkey.tsx"),
  ]),
] satisfies RouteConfig;
