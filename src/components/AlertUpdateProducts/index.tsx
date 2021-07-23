import { useEffect } from "react";
import { useState } from "react";
import { productsType } from "../../utils/interfaces";

import * as S from "./styles";

interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
  update: (id: number, updatedProduct: productsType) => void;
  item: productsType;
}

export function AlertUpdateProducts({
  open,
  handleClose,
  update,
  item,
}: AlertDialogProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qtd, setQtd] = useState("");

  const handleUpdate = () => {
    if (name.trim() === "" || price.trim() === "" || qtd.trim() === "")
      return alert("Fill all fields");

    update(item.id, {
      id: item.id,
      name,
      price: Number(price),
      qtd: Number(qtd),
    });

    setName("");
    setPrice("");
    setQtd("");
  };

  useEffect(() => {
    setName(item.name);
    setPrice(item.price.toString());
    setQtd(item.qtd.toString());

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
          {"Update product"}
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
            label="Price"
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <S.InputQtd
            id="QtdUpdate"
            label="Qtd"
            variant="outlined"
            type="number"
            value={qtd}
            onChange={(e) => setQtd(e.target.value)}
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
