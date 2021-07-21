import styled from "styled-components";
import * as fonts from "../../config/fonts";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: ${fonts.md};
  color: ${(props) => props.theme.colors.text};
`;
