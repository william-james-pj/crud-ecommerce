import { useState } from "react";
import { productsType } from "../../utils/interfaces";

import * as S from "./styles";

interface FormProductsProps {
  add: (product: productsType) => void;
}

export function FormProducts({ add }: FormProductsProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qtd, setQtd] = useState("");

  const submit = () => {
    if (name.trim() === "" || price.trim() === "" || qtd.trim() === "")
      return alert("Fill all fields");

    add({ id: 0, name, price: Number(price), qtd: Number(qtd) });

    setName("");
    setPrice("");
    setQtd("");
  };

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

        <S.ButtonAdd onClick={submit}>Add</S.ButtonAdd>
      </S.Form>
    </S.Container>
  );
}
