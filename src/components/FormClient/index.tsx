import { useState } from "react";
import { clientsType } from "../../utils/interfaces";

import * as S from "./styles";

interface FormClientProps {
  add: (client: clientsType) => void;
}

export function FormClient({ add }: FormClientProps) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const submit = () => {
    if (name.trim() === "" || cpf.trim() === "")
      return alert("Fill all fields");

    add({ id: 0, name, cpf });

    setName("");
    setCpf("");
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
            id="Cpf"
            label="CPF"
            variant="outlined"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </S.InputContainer>

        <S.ButtonAdd onClick={submit}>Add</S.ButtonAdd>
      </S.Form>
    </S.Container>
  );
}
