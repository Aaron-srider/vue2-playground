class RoutesForSideBar {
  constructor() {
    // store the routes for side bar
    this.routes = [];
  }

  // set routes for side bar
  setRoutesForSideBar(routes) {
    this.routes = routes;
  }

  getRoutesForSideBar() {
    return this.routes;
  }
}


export default new RoutesForSideBar()