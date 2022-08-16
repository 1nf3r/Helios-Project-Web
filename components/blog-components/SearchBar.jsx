import { SearchIcon } from "@chakra-ui/icons";
import {
    Input,
    InputGroup,
    InputRightElement
  } from '@chakra-ui/react'
const SearchBar = () => {
    return(
        <InputGroup color="black">
        <Input aria-label='Search by title' placeholder='Search by title' onChange={(e) => setSearchValue(e.target.value)} />
        <InputRightElement>
          <SearchIcon color="white" />
        </InputRightElement>
      </InputGroup>
    )
}

export default SearchBar


//TODO: ACABAR DE IMPLEMENTAR 





