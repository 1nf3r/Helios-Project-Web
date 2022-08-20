// import { OpenGraph } from "./OpenGraph";
import { Fragment } from "react";
import { Heading, Container, Flex, Box, Text, Stack } from "./ChakraElements";
import { PageHeader } from "./PageHeader";
import { OpenGraph } from "./OpenGraph";


export const Layout = ({ children, metadata = {}, type = "post" }) => {
    const width = type === "post" ? "80%" : "100%";
    const isBlogTemplate = type === "post" && metadata.date;
  
    return (
        <Box bg="gray.500" color='white' height="auto" >
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
                        bg="white"
                        color='black'
                        p={[4, 4, 8, 16]}
                        mx='auto'
                        my={4}
                        borderRadius="lg"
                        width={["80%", "80%", "80%", "80%", width]}
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
            {/* <Footer /> */}
        </Box>
    )
}