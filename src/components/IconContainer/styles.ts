import styled from "styled-components";
// import * as fonts from '../../config/fonts';

interface IIconProps {
  delete: boolean;
}

export const Container = styled.div`
  width: 0px;
  display: flex;
  gap: 0.75rem;
`;

export const Icon = styled.div<IIconProps>`
  cursor: pointer;
  color: ${(props) =>
    props.delete ? props.theme.colors.red : props.theme.colors.yellow};

  :hover {
    opacity: 0.8;
  }
`;
