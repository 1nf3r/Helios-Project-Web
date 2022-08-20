import NextLink from "next/link";
import { Navbar } from "../web-components/NavBar";
import { Flex, Text } from "./ChakraElements";


export const PageHeader = () => {
  return (
    <Flex
      justify="space-between"
      direction={["column", "column", "row"]}
      align="center"
      fontFamily="heading"
      fontSize="2xl"
      fontWeight="bold"
      px={4}
      pt={8}
      pb={2}
      mb={8}
    >
      <Flex align="center">
        <Text fontSize={["sm", "sm", "lg", "xl"]} px="2">
          <Navbar />
        </Text>
      </Flex>
    </Flex>
  );
};
