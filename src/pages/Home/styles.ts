import styled from "styled-components";
import * as fonts from "../../config/fonts";

export const Container = styled.div``;

export const Text = styled.p`
  font-size: ${fonts.normal};
  color: ${(props) => props.theme.colors.text};
  & + & {
    margin-top: 1rem;
  }
`;
