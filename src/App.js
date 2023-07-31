import { AmpligramCollection } from "./ui-components";
import { NavBarHeader2 } from "./ui-components";
import { Flex } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <NavBarHeader2 />
      <Flex direction="column" justifyContent="center" alignItems="center">
        <AmpligramCollection />
      </Flex>
    </div>
  );
}

export default App;
