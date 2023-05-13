import router, { routes } from "@/router";
import RoutesForSideBar from "./SideBar/RoutesForSideBar";

router.beforeEach(async (to, from, next) => {
  RoutesForSideBar.setRoutesForSideBar(routes);
  next();
});
