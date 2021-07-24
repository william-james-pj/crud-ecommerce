import { useState } from "react";
import { clientsType } from "../../utils/interfaces";

import * as S from "./styles";

interface FormClientProps {
  add: (client: clientsType) => void;
}

export function FormClient({ add }: FormClientProps) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const submit = () => {
    if (
      name.trim() === "" ||
      cpf.trim() === "" ||
      cep.trim() === "" ||
      state.trim() === "" ||
      city.trim() === ""
    )
      return alert("Fill all fields");

    add({ id: 0, name, cpf, cep, city, state });

    setName("");
    setCpf("");
    setCep("");
    setState("");
    setCity("");
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
          <S.InputPrice
            id="cep"
            label="cep"
            variant="outlined"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <S.InputPrice
            id="state"
            label="Estado"
            variant="outlined"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <S.InputPrice
            id="city"
            label="Cidade"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </S.InputContainer>

        <S.ButtonAdd onClick={submit}>Add</S.ButtonAdd>
      </S.Form>
    </S.Container>
  );
}
