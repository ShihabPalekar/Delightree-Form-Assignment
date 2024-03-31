import Form from "./components/Form";
import Details from "./components/Details";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Box display={"flex"} gap={"4"} width="full" p="4">
      <Form />
      <Details />
      </Box>
    </div>
  );
}

export default App;
