import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
            <Flex
            as="main"
            bg={colorMode === "light" ? "white" : "gray.800"}
            color={colorMode === "light" ? "black" : "white"}
            p={6}
            borderRadius="xl"
            boxShadow="md"
            w={{ base: "100%", md: "75%", lg: "60%" }}
            m="auto"
            direction="column"
            mb={4}
            pl={4}
            pr={4}
            gap={4}>
                <Heading as="h2" size="lg" mb={4}>
                    Hi I'm Peter, a Program Manager based out of Durham, NC
                </Heading>
                <Text>
                    I am currently a Principal Program Manager at Oracle Health, leading program efforts for critical org-wide projects.
                    These projects are focused on overhauling the reporting systems that our customers interact with and migrating our legacy systems to Oracle owned and operated equivalent systems.
                    I work closely with cross-functional teams to ensure that we are delivering these high-value projects on time and within budget.
                </Text>
                <Spacer />
                <Text>
                    I recently enrolled in a Full Stack Developer bootcamp at UNC Chapel Hill, where I am learning the ins and outs of software development from version control, to setting up an development environment, to deploying an application.
                    I am excited to see where this journey takes me and how I can leverage my new skills to build amazing products and to take more direct role in development in my professional career.
                    The projects section of the site are projects I have completed throughout this bootcamp, I will periodically update this site with my progress and projects that I am working on.
                </Text>
            </Flex>
    );
}

export default Home;