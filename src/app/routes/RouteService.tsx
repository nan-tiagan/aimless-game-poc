import { Route } from "react-router-dom";

/**
 * @class RouteService
 */
class RouteService {
  private element: JSX.Element;

  constructor(path: string, element: JSX.Element) {
    this.element = <Route path={path} element={element} />;
  }

  show(bool: boolean) {
    return bool ? this.element : null;
  }
}

export default RouteService;
