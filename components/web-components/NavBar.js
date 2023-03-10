import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box
} from './ChakraElements'
import { HamburgerIcon, CloseIcon, MoonIcon } from './SocialIcons'
import NextLink from 'next/link'


export const Navbar = ({height, width, top, darkMode}) => {
  const vheight = height || '100vh'
  const vwidth = width || '100vw'
  const vtop = top || '38rem'
  const vdarkMode = darkMode || 'none'
  const handleClick = () => {
    toggleColorMode();
    const styleEl = document.createElement('style');
    const cssText = document.createTextNode(
      'html * { transition: color, background-color 0.3s ease-out!important }',
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);
  };
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex
        mx={[0, 'auto']}
        position={["fixed", "relative"]}
        top={[vtop, "1rem"]}
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
          onChange={handleClick}
          mr='2'
          mt='0.85rem'
          display={['none', 'none', vdarkMode, vdarkMode]}
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
        w={vwidth}
        display={display}
        bgColor="gray.400"
        zIndex={20}
        h={vheight}
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