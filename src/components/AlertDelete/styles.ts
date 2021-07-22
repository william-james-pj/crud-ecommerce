import styled from "styled-components";
// import * as fonts from '../../config/fonts';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from "@material-ui/core";

export const Container = styled.div``;

export const DialogStyle = styled(Dialog)`
  && {
  }
`;

export const DialogTitleStyle = styled(DialogTitle)`
  && {
    background-color: ${(props) => props.theme.colors.modalDelete};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const DialogContentStyle = styled(DialogContent)`
  && {
    margin: 2rem 2rem 1rem;
  }
`;

export const DialogContentTextStyle = styled(DialogContentText)`
  && {
    margin: 0;

    & + & {
      margin-top: 0.3rem;
    }
  }
`;

export const ButtonDeleteStyle = styled(Button)`
  && {
    background-color: ${(props) => props.theme.colors.modalDelete};
    color: ${(props) => props.theme.colors.white};

    :hover {
      background-color: ${(props) => props.theme.colors.modalDelete};
      color: ${(props) => props.theme.colors.white};
      opacity: 0.8;
    }
  }
`;

export const ButtonStyle = styled(Button)`
  && {
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: rgba(0, 0, 0, 0.6);

    :hover {
      color: rgba(0, 0, 0, 0.6);
      opacity: 0.8;
    }
  }
`;

export const DialogActionsStyle = styled(DialogActions)`
  && {
    padding: 1rem;
    gap: 1rem;
  }
`;
