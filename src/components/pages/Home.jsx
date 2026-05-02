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
      pl={8}
      pr={8}
      gap={4}
    >
      <Heading as="h2" size="lg" mb={4}>
        Hi, I'm Peter, a Principal TPM based out of Durham, NC
      </Heading>
      <Text>
        I lead large-scale technical programs at Oracle Health, currently
        driving an org-wide infrastructure migration from AWS to OCI across 60
        globally distributed teams and 1,100+ engineers. I also oversee an $70M
        annually recurring vendor portfolio and build custom AI-powered tooling
        to solve program visibility problems at scale.
      </Text>
      <Spacer />
      <Text>
        This portfolio showcases projects I've built along the way — tools I've
        developed to sharpen my technical depth and solve real problems in my
        work as a TPM.
      </Text>
    </Flex>
  );
}

export default Home;
