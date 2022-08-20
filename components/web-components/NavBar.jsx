import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'


export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex
        m='auto'
        position="relative"
        top="1rem"
        right="1rem"
        align="center"
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Inicio"
              my={5}
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
              my={5}
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
              my={5}
              minW={14}
            >
              Proyectos
                    </Button>
          </NextLink>

          <NextLink href="/sobre-mi" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contacto"
              my={5}
              minW={14}
            >
              Contacto
                    </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
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

          <NextLink href="/sobre-mi" passHref>
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
        </Flex>
      </Flex>
    </Flex>
  )
}