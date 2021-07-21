import { useState } from "react";
import * as S from "./styles";

export function FormClient() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

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
            id="Cpf"
            label="CPF"
            variant="outlined"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </S.InputContainer>

        <S.ButtonAdd>Add</S.ButtonAdd>
      </S.Form>
    </S.Container>
  );
}
