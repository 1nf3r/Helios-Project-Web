// import { OpenGraph } from "./OpenGraph";
import { Fragment } from "react";
import { Heading, Container, Flex, Box, useColorModeValue, } from "./ChakraElements";
import { PageHeader } from "./PageHeader";
import { OpenGraph } from "./OpenGraph";
import Footer from "../web-components/Footer";


export const Layout = ({ children, metadata = {}, type = "post" }) => {
    const width = type === "post" ? "80%" : "100%";
    const isBlogTemplate = type === "post" && metadata.date;
    const generalBg = useColorModeValue('gray','gray.900')
    const bg = useColorModeValue('white', 'gray')
    const color = useColorModeValue('black', 'white')

    return (
        <Box height="auto" bg={generalBg} >
            <OpenGraph metadata={metadata} />
            <Container maxW="container.2xl" px={[0, 4]}>
                <PageHeader />
                <Flex
                d="flex"
                direction={["column", "column", "column", "column", "row"]}
                mx="auto"  
                >
                    <Box
                        as="article"
                        bg={bg}
                        color={color}
                        p={[4, 4, 8, 16]}
                        mx='auto'
                        my={4}
                        borderRadius="lg"
                        width={["100%", "80%", "80%", "80%", width]}
                    >
                        {isBlogTemplate ? (
                        <Fragment>
                            <Heading as="h1"  textAlign='center' size="2xl">
                            {metadata.title}
                            </Heading>
                            {/* <PostMetadata metadata={metadata} /> */}
                        </Fragment>
                        ) : (
                        <Heading as="h2" m={8} size="2xl">
                            {metadata.title}
                        </Heading>
                        )}
                        <section>{children}</section>
                    </Box>
                </Flex>
            </Container>
            <Footer />
        </Box>
    )
}