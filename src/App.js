import Counter from "./components/Counter";
import { Fragment } from "react";
import Auth from "../src/components/Auth";
import Headers from "../src/components/Header";
import { useSelector } from "react-redux";


function App() {
  const authState = useSelector((state) => {
    return state.auth.isAuthenticated;
  });
  return (
    <Fragment>
      <Headers></Headers>
      {!authState&& <Auth></Auth>}
      {authState && <Counter />}
    </Fragment>
  );
}

export default App;
