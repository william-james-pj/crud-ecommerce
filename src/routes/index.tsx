import { Switch } from "react-router-dom";

import { MyRoute } from "./MyRoute";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Customers } from "../pages/Customers";

export function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/products" component={Products} />
      <MyRoute exact path="/customers" component={Customers} />
    </Switch>
  );
}
