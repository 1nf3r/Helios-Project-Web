import { Box, Heading, Flex, Text, Tag, useColorModeValue } from "../web-components/ChakraElements";
import { CalendarIcon } from "../web-components/ChakraIcons";


export const PostListItem = ({ title, date, tags }) => {
  const bg = useColorModeValue('gray.200', 'gray.900')
  return (
    <Box>
      <Heading as="h3" size="md" my={2}>
        {title}
      </Heading>
      <Flex align="center" fontSize="sm" >
      <CalendarIcon mr='0.4rem' />
        <Text ml={1} >
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
