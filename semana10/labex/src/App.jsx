import Home from './pages/Home';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';

const labexTheme = extendTheme({
  styles: {
    global: {
      body: {
        textAlign: "center",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        color: "#FF0000"
      }
    }
  }
})

const App = () => {
  return (
    <ChakraProvider theme={labexTheme}>
      <Flex>
        <Home></Home>       
    </Flex>
    </ChakraProvider>
  );
}

export default App;
