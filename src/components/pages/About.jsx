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
            <Flex direction="row" mb={4} gap={{base: 2, md: 4}}>
                <Timeline />
                <Flex direction="column" mb={4} w={{ base: "100%", md: "75%" }} gap={4}>
                    <Text>
                        When I graduated from CUNY Baruch College in 2015, I jumped immediately into the Adtech industry and
                        started my career at MediaMath through their Marketing Engineer program. It was through this program that I 
                        developed a deep fascination for the industry and love for software technology.
                        From there I moved on to work at eBay, where I managed their programmatic advertising efforts. I then went to work for Moat,
                        an ad verification company that was later acquired by Oracle.
                    </Text>
                    <Text>
                        In 2019 I left Oracle to join a startup called PebblePost but my time there was short lived due to the COVID-19 pandemic.
                        I then joined Amazon and was part of their Advertising division, where I worked as a product manager to develop an internal project management
                        tool that helped teams get products to market faster and more efficiently.
                    </Text>
                    <Text>
                        In 2022 I rejoined Oracle as a Technical Program Manager in their Advertising division. I was responsible for the management of business critical projects.
                        In 2024, Oracle sold off their Advertising division and I transitioned into the Health Data Intelligence division. I am currently a Principal Program Manager at Oracle Health, leading program efforts for critical org-wide projects.
                        These projects are focused on overhauling the reporting systems that our customers interact with and migrating our legacy systems to Oracle owned and operated equivalent systems.
                        I work closely with cross-functional teams to ensure that we are delivering these high-value projects on time and within budget.
                    </Text>
                    <Text>
                        I was born and raised in Queens, NY. I spent some time living on the West Coast in Seattle when I was working for eBay, and then 8 or so years living in Brooklyn, NY where I met my wife.
                        In 2024 we moved to Durham, NC where we now live with our dog Koda. When I am not working, I enjoy training brazilian jiu jitsu. I am a black belt under Josh Griffiths, owner of <a href="https://www.clockworkbjj.com/" target="_blank" style={{ textDecoration: "underline" }}>Clockwork Jiu Jitsu</a>. 
                        I have been training for over a decade and have made some amazing connections along the way.
                        I currently train and teach at <a href="https://elevatemmaacademy.com/" target="_blank" style={{ textDecoration: "underline" }}>Elevate MMA</a>.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default About;