import styled from "styled-components";
// import * as fonts from "../../config/fonts";
import { respondToDown } from "../../config/respondTo";

import { TextField, Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${respondToDown.sm`
    flex-direction: column;
  `}
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;

  ${respondToDown.sm`
    align-items: flex-start;
  `}
`;

export const InputName = styled(TextField)``;

export const InputPrice = styled(TextField)`
  width: 140px;
`;

export const InputQtd = styled(TextField)`
  width: 100px;
`;

export const ButtonAdd = styled(Button)`
  && {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 0 1.5rem;
    &:hover {
      background-color: ${(props) => props.theme.colors.green};
      opacity: 0.8;
    }

    ${respondToDown.sm`
      width: 100px;
      padding: 1rem 1.5rem;
      margin: 1rem 0 0;
    `}
  }
`;
