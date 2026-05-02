import { Box, Heading, VStack } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import CaseStudyCard from "../structures/CaseStudyCard";
import { caseStudyList } from "../data-logic/CaseStudyList";

function Projects() {
    const { colorMode } = useColorMode();

    return (
        <Box
        bg={colorMode === "light" ? "white" : "gray.800"}
        color={colorMode === "light" ? "black" : "white"}
        p={6}
        borderRadius="xl"
        boxShadow="md"
        w={{ base: "100%", md: "85%" }}
        m="auto"
        >
        <Heading as="h2" size="lg" mb={6} pl={2}>
            Portfolio
        </Heading>
        <VStack gap={6} w="100%">
            {caseStudyList.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
            ))}
        </VStack>
        </Box>
    );
}

export default Projects;
