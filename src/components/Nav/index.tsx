import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTags,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

export function Nav() {
  const location = useLocation();

  return (
    <S.Container>
      <S.NavLink to="/">
        <S.NavIcons active={location.pathname === "/" ? true : false}>
          <FontAwesomeIcon icon={faHome} size="lg" />
        </S.NavIcons>
      </S.NavLink>
      <S.NavLink to="/products">
        <S.NavIcons active={location.pathname === "/products" ? true : false}>
          <FontAwesomeIcon icon={faTags} size="lg" />
        </S.NavIcons>
      </S.NavLink>
      <S.NavLink to="/customers">
        <S.NavIcons active={location.pathname === "/customers" ? true : false}>
          <FontAwesomeIcon icon={faUserFriends} size="lg" />
        </S.NavIcons>
      </S.NavLink>
    </S.Container>
  );
}
