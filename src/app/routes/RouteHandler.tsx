import { BrowserRouter, Routes } from "react-router-dom";
import {
  DFLTPG_RT001,
  HMPG_RT001,
  LGNFRM_RT001,
  RGSTRFRM_RT001,
} from "./Route";

const user = false;

/**
 * Routes available for user that are not logged in
 */
const UserLoggedOutRoutes = (
  <>
    <Routes>{LGNFRM_RT001().show(true)}</Routes>
    <Routes>{RGSTRFRM_RT001().show(true)}</Routes>
  </>
);

/**
 * Routes available for user that are logged in
 */
const UserLoggedInRoutes = (
  <>
    <Routes>{HMPG_RT001().show(true)}</Routes>
  </>
);

/**
 * Routes available for all users
 */
const GlobalPages = (
  <>
    <Routes>{DFLTPG_RT001().show(true)}</Routes>
  </>
);

export default function RouteHandler() {
  return (
    <BrowserRouter>
      {user ? UserLoggedInRoutes : UserLoggedOutRoutes}
      {GlobalPages}
    </BrowserRouter>
  );
}
