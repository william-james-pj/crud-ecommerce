import * as S from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

export function IconContainer() {
  return (
    <S.Container>
      <S.Icon delete={false}>
        <FontAwesomeIcon icon={faEdit} size="lg" />
      </S.Icon>
      <S.Icon delete={true}>
        <FontAwesomeIcon icon={faTrashAlt} size="lg" />
      </S.Icon>
    </S.Container>
  );
}
