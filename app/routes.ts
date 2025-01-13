import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("projects", "routes/projects.tsx"),
  route("services", "routes/services.tsx"),
  route("contact", "routes/contact.tsx"),
  route("jekkey", "routes/jekkey.tsx"),

  layout("layouts/jekkey-layout.tsx", [index("routes/jekkey.tsx")]),
] satisfies RouteConfig;
