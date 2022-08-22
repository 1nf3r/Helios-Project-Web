import { Box, Heading, Flex, Text, Tag, useColorModeValue } from "./ChakraElements";
import { CalendarIcon } from "@chakra-ui/icons";


export const PostListItem = ({ title, date, tags }) => {
  const bg = useColorModeValue('gray.200', 'gray.900')
  return (
    <Box>
      <Heading as="h3" size="md" my={2}>
        {title}
      </Heading>
      <Flex align="center" fontSize="sm" >
        <Text ml={1} >
          <CalendarIcon mr='0.4rem' />
          {date}{" "}
          {tags.map((tag) => (
            <Tag key={tag} size="sm" mx={2} bg={bg}>
              {tag}
            </Tag>
          ))}
        </Text>
      </Flex>
    </Box>
  );
};
