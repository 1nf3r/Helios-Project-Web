import { Navbar } from "../web-components/NavBar";
import { Flex } from "../web-components/ChakraElements";


export const PageHeader = () => {
  return (
    <Flex>
      <Flex m='auto' position='relative'>
          <Navbar />
      </Flex>
    </Flex>
  );
};
