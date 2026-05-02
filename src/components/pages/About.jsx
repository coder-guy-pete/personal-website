import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { Timeline } from "../structures/Timeline";

function About() {
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
      <Heading as="h2" size="lg" mb={4} pl={{ base: 2, md: 0 }}>
        About Me
      </Heading>
      <Flex direction="row" mb={4} gap={{ base: 2, md: 4 }}>
        <Timeline />
        <Flex direction="column" mb={4} w={{ base: "100%", md: "75%" }} gap={4}>
          <Text>
            I graduated from CUNY Baruch College in 2015 and jumped straight
            into adtech through MediaMath's Marketing Engineer program. That
            experience gave me a deep appreciation for the intersection of
            technology and business — and set the trajectory for everything that
            followed. From there I went to eBay managing programmatic
            advertising, then to Moat, an ad verification company later acquired
            by Oracle.
          </Text>
          <Text>
            In 2019 I joined PebblePost, a startup building programmatic direct
            mail — a genuinely interesting space that was cut short by the
            pandemic. I then joined Amazon's Advertising division, where I built
            Launchpad, an internal launch management platform that achieved 100%
            adoption across all product teams in the org and became the release
            tracking system used to run leadership-level standups.
          </Text>
          <Text>
            In 2022 I rejoined Oracle as a Technical Program Manager. When
            Oracle divested its Advertising division in 2024, I moved into
            Oracle Health, where I'm now a Principal TPM leading an org-wide
            infrastructure migration from AWS to OCI across 60 globally
            distributed teams and 1,100+ engineers — while overseeing an $70M
            annually recurring vendor portfolio. I also build my own tooling: an
            AI-powered migration tracking application I developed in-house now
            surfaces dependency risks and slipping timelines for weekly
            leadership reviews.
          </Text>
          <Text>
            I grew up in Queens, spent time in Seattle while at eBay, and lived
            in Brooklyn for nearly a decade — where I met my wife. In 2024 we
            moved to Durham, NC with our dog Koda. Outside of work, Brazilian
            jiu jitsu is a serious part of my life. I'm a black belt under Josh
            Griffiths at Clockwork Jiu Jitsu, with over a decade of training
            behind me. I currently train and teach at Elevate MMA. The
            discipline, problem-solving, and community that come with BJJ have
            shaped how I approach my work as much as anything in my career.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default About;
