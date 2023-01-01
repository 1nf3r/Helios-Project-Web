import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box
} from './ChakraElements'
import { HamburgerIcon, CloseIcon, MoonIcon } from './ChakraIcons'
import NextLink from 'next/link'


export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex
        mx={[0, 'auto']}
        position={["fixed", "relative"]}
        top={["38rem", "1rem"]}
        right="1rem"
        align="center"
        zIndex='10'
      >
        {/* Desktop */}
        <Flex
          display={['none', 'flex', 'flex','flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Inicio"
              my={1}
              minW={14}
            >
              Inicio
                    </Button>
          </NextLink>

          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Blog"
              my={1}
              minW={14}
            >
              Blog
                    </Button>
          </NextLink>

          <NextLink href="/mis-proyectos" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Proyectos"
              my={1}
              minW={14}
            >
              Proyectos
                    </Button>
          </NextLink>

          <NextLink href="/contacto" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contacto"
              my={1}
              minW={14}
            >
              Contacto
                    </Button>
          </NextLink>
          <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          mr='2'
          mt='0.85rem'
          display={['none', 'none', 'flex', 'flex']}
        />
        <Box mt='0.95rem' display={['none', 'none', 'flex', 'flex']} >
          <MoonIcon  />
        </Box>
        </Flex>
        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          bgColor='gray.400'
          icon={
            <HamburgerIcon  />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'none', 'none', 'none']}
        />
      </Flex>
      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.400"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
          margin='auto'
          w='80%'
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="outline"
              aria-label="Inicio"
              my={5}
              w="100%"
              colorScheme='white'
            >
              Inicio
                    </Button>
          </NextLink>

          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="outline"
              aria-label="Blog"
              my={5}
              w="100%"
              colorScheme='white'
            >
              Blog
                    </Button>
          </NextLink>

          <NextLink href="/mis-proyectos" passHref>
            <Button
              as="a"
              variant="outline"
              aria-label="Proyectos"
              my={5}
              w="100%"
              colorScheme='white'
            >
              Proyectos
                    </Button>
          </NextLink>

          <NextLink href="/contacto" passHref>
            <Button
              as="a"
              variant="outline"
              aria-label="Contacto"
              my={5}
              w="100%"
              colorScheme='white'
            >
              Contacto
            </Button>
          </NextLink>
          <Flex>
            <Switch
            color="green"
            isChecked={isDark}
            onChange={toggleColorMode}
            mr='2'
            />
            <MoonIcon />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}