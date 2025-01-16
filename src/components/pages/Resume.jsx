import { Box, Flex, Heading } from "@chakra-ui/react";
import Skills from "../structures/Skills";
import { useColorMode } from "../ui/color-mode";
import { Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

function Resume() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
        bg={colorMode === "light" ? "white" : "gray.800"}
        color={colorMode === "light" ? "black" : "white"}
        p={6}
        borderRadius="xl"
        boxShadow="md"
        w={{ base: "100%", md: "75%", lg: "60%" }}
        m="auto"
        >
        <Flex direction="column" mb={4} w="100%" pl={2} pr={2} gap={4}>
            <Heading as="h2" size="lg" mb={2}>
            Resume
            </Heading>
            <Link href="https://docs.google.com/document/d/e/2PACX-1vQMl2z6IhCCkxK8HaOdqLo91O-GzKrzdOaevzJvQCVeP9oC8_k-rEJN1DanRanrVbmpF52nvL1JJini/pub" target="_blank" w="fit-content">My Resume <LuExternalLink /></Link>

            <Heading as="h3" size="md" mb={2}>
            Technologies I am proficient in:
            </Heading>
            <Skills />
        </Flex>
        </Box>
    );
}

export default Resume;