import styled from "styled-components";
// import * as fonts from '../../config/fonts';
import { respondToDown } from "../config/respondTo";

export const Container = styled.div`
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  position: relative;

  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem 1rem 2rem;
  overflow-y: auto;
  overflow-x: hidden;

  ${respondToDown.sm`
    padding: 4rem 1rem 2rem;
  `}
`;
