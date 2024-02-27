import { useState } from "react";
import { DefaultTemplate } from "./components/DefaultTemplate";
import { RouterMain } from "./routes/RouterMain";

import "./styles/index.scss";

function App() {
  const [button, setButton] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);
  const [user, setUser] = useState(null);
 
  return (
    <>
      <div className= {`appContainer ${isDashboard ? "yes":  "" }`}>
        <DefaultTemplate
        setUser={setUser}
          button={button}
          setButton={setButton}
          isDashboard={isDashboard}
        >
          <RouterMain setButton={setButton} setIsDashboard={setIsDashboard} setUser={setUser} user={user}/>
        </DefaultTemplate>
      </div>
    </>
  );
}

export default App;
