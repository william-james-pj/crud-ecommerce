import styled from "styled-components";
import * as fonts from "../../config/fonts";
import { respondToDown } from "../../config/respondTo";

import { Link } from "react-router-dom";

interface IIconProps {
  active: boolean;
}

export const Container = styled.div`
  height: 100%;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background: ${(props) => props.theme.colors.secundary};

  ${respondToDown.sm`
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    padding: 1rem 0;
    flex-direction: row;
    justify-content: center;
  `}
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${fonts.sm};
  font-weight: 500;

  cursor: pointer;
  user-select: none;
`;

export const NavIcons = styled.div<IIconProps>`
  margin-bottom: 5px;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.disabled};

  :hover {
    opacity: 0.8;
  }
`;
