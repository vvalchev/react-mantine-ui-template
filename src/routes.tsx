import { type RouteObject, createBrowserRouter } from "react-router-dom";

import Shell from "@/components/layout/Shell";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Shell />,
    children: [
      { index: true, element: <i>main</i> },
      { path: "/settings", element: <i>settings</i> },
      { path: "/logout", element: <i>logout</i> },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
