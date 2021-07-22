import * as S from "./styles";

interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
  delet: () => void;
}

export function AlertDelete({ open, handleClose, delet }: AlertDialogProps) {
  return (
    <S.Container>
      <S.DialogStyle
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <S.DialogTitleStyle id="alert-dialog-title">
          {"Confirm"}
        </S.DialogTitleStyle>
        <S.DialogContentStyle>
          <S.DialogContentTextStyle id="alert-dialog-description">
            Are you sure want to delete?
          </S.DialogContentTextStyle>
          <S.DialogContentTextStyle>
            You can't undo this action.
          </S.DialogContentTextStyle>
        </S.DialogContentStyle>
        <S.DialogActionsStyle>
          <S.ButtonStyle onClick={handleClose} color="primary">
            Cancel
          </S.ButtonStyle>
          <S.ButtonDeleteStyle
            onClick={() => {
              delet();
              handleClose();
            }}
            color="primary"
            autoFocus
          >
            Delete
          </S.ButtonDeleteStyle>
        </S.DialogActionsStyle>
      </S.DialogStyle>
    </S.Container>
  );
}
