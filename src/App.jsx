import { useContext } from "react";
import { RouterMain } from "./routes/RouterMain";
import { Spinner } from "react-loading-io";
import { ExampleContext } from "./pages/provides/UserContext";

function App() {
  const { loading } = useContext(ExampleContext);
  const spinnerCfg = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div className="appContainer">
      {loading ? <Spinner style={spinnerCfg} /> : <RouterMain />}
    </div>
  );
}

export default App;
