import { useEffect } from "react";
import { useState } from "react";
import { clientsType } from "../../utils/interfaces";

import * as S from "./styles";

interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
  update: (id: number, updatedClient: clientsType) => void;
  item: clientsType;
}

export function AlertUpdateClients({
  open,
  handleClose,
  update,
  item,
}: AlertDialogProps) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleUpdate = () => {
    if (
      name.trim() === "" ||
      cpf.trim() === "" ||
      cep.trim() === "" ||
      state.trim() === "" ||
      city.trim() === ""
    )
      return alert("Fill all fields");

    update(item.id, {
      id: item.id,
      name,
      cpf,
      cep,
      city,
      state,
    });

    setName("");
    setCpf("");
    setCep("");
    setState("");
    setCity("");
  };

  useEffect(() => {
    setName(item.name);
    setCpf(item.cpf);
    setCep(item.cep);
    setState(item.state);
    setCity(item.city);

    return () => {};
  }, [item]);

  return (
    <S.Container>
      <S.DialogStyle
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <S.DialogTitleStyle id="alert-dialog-title">
          {"Update client"}
        </S.DialogTitleStyle>
        <S.DialogContentStyle>
          <S.InputName
            id="NameUpdate"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.InputPrice
            id="PriceUpdate"
            label="CPF"
            variant="outlined"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <S.InputPrice
            id="cepUpdate"
            label="cep"
            variant="outlined"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <S.InputPrice
            id="stateUpdate"
            label="Estado"
            variant="outlined"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <S.InputPrice
            id="cityUpdate"
            label="Cidade"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </S.DialogContentStyle>
        <S.DialogActionsStyle>
          <S.ButtonStyle onClick={handleClose} color="primary">
            Cancel
          </S.ButtonStyle>
          <S.ButtonDeleteStyle
            onClick={() => {
              handleUpdate();
              handleClose();
            }}
            color="primary"
            autoFocus
          >
            Update
          </S.ButtonDeleteStyle>
        </S.DialogActionsStyle>
      </S.DialogStyle>
    </S.Container>
  );
}
