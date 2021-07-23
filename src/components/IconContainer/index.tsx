import { useState } from "react";
import * as S from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import { AlertDelete } from "../AlertDelete";

interface IconContainerProps {
  delet: () => void;
  update: () => void;
}

export function IconContainer({ delet, update }: IconContainerProps) {
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleModalDelete = () => {
    setOpenModalDelete(!openModalDelete);
  };

  return (
    <S.Container>
      <S.Icon delete={false} onClick={update}>
        <FontAwesomeIcon icon={faEdit} size="lg" />
      </S.Icon>
      <S.Icon delete={true} onClick={handleModalDelete}>
        <FontAwesomeIcon icon={faTrashAlt} size="lg" />
      </S.Icon>
      <AlertDelete
        open={openModalDelete}
        handleClose={handleModalDelete}
        delet={delet}
      />
    </S.Container>
  );
}
