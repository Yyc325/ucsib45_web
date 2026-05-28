import layout from "./layout";
import home from "./home";
import { noPermissionsRoutes } from "./canstants";
import pages from "./pages";
export const ComponentCanstants = {
  ...layout,
  ...home,
  ...noPermissionsRoutes,
  ...self,
  ...pages,
};
