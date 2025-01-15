import { Box, Heading, Flex } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import ProjectCard from "../structures/Card";
import { projectList } from "../data-logic/ProjectList";

function Projects() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
        bg={colorMode === "light" ? "white" : "gray.800"}
        color={colorMode === "light" ? "black" : "white"}
        p={6}
        borderRadius="xl"
        boxShadow="md"
        w={{ base: "100%", md: "75%" }}
        m="auto"
        >
        <Heading as="h2" size="lg" mb={4}>
            Portfolio
        </Heading>
        <Flex gap={10} flexWrap="wrap" justifyContent="center">
            {projectList.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </Flex>
        </Box>
    );
}

export default Projects;