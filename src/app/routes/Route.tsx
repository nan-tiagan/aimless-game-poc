import { Box } from "@chakra-ui/react";
import RouteService from "./RouteService";
import LGNFRM_CMP01 from "../features/LGNFRM_CMP01/LGNFRM_CMP01";
import mock from "../features/__mock__/mock";

export function DFLTPG_RT001(): RouteService {
  return new RouteService("/", mock());
}

export function LGNFRM_RT001(): RouteService {
  return new RouteService("/login", <LGNFRM_CMP01 />);
}

export function RGSTRFRM_RT001(): RouteService {
  return new RouteService("/register", <Box>Register Comp</Box>);
}

export function HMPG_RT001(): RouteService {
  return new RouteService("/home", <Box>Home Comp</Box>);
}
