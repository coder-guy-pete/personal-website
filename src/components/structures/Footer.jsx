import { Flex, Center, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    // const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
        as="footer"
        direction="column"
        color="black"
        pt="10rem">
            <Center pt={3} gap={3}>
                <a href="https://github.com/coder-guy-pete" target="_blank">
                    <FaGithub size="2em" />
                </a>
                <a href="https://www.linkedin.com/in/peterhintze/" target="_blank">
                    <FaLinkedin size="2em" />
                </a>
                <a href="https://www.instagram.com/pics_of_pete" target="_blank">
                    <FaInstagram size="2em" />
                </a>
            </Center>
        </Flex>
    );
}

export default Footer;