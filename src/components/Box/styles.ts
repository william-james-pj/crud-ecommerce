import styled from "styled-components";
import * as fonts from "../../config/fonts";

export const Container = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.1);
`;

export const TextHeader = styled.p`
  font-weight: 700;
  font-size: ${fonts.sm};
`;

export const Content = styled.div`
  padding: 1rem;
`;
