import { useState } from "react";
import * as S from "./styles";

export function FormProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qtd, setQtd] = useState("");

  return (
    <S.Container>
      <S.Form autoComplete="off">
        <S.InputContainer>
          <S.InputName
            id="Name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.InputPrice
            id="Price"
            label="Price"
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <S.InputQtd
            id="Qtd"
            label="Qtd"
            variant="outlined"
            type="number"
            value={qtd}
            onChange={(e) => setQtd(e.target.value)}
          />
        </S.InputContainer>

        <S.ButtonAdd>Add</S.ButtonAdd>
      </S.Form>
    </S.Container>
  );
}
