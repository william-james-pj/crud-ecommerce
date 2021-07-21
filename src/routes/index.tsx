import { Switch } from "react-router-dom";

import { MyRoute } from "./MyRoute";

import { Home } from "../pages/Home";

export function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
    </Switch>
  );
}
