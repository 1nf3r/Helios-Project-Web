import { Navbar } from "../web-components/NavBar";
import { Flex } from "./ChakraElements";


export const PageHeader = () => {
  return (
    <Flex>
      <Flex m='auto' position='relative'>
          <Navbar />
      </Flex>
    </Flex>
  );
};
