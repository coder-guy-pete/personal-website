// Desc: Navbar component for the website
import { NavLink } from "react-router-dom";

//Chakra UI components
import {
    Heading,
    Flex,
    Spacer,
    HStack,
    Button,
    VStack,
    Box
    } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { Headshot } from "../structures/Headshot";

function Navbar() {
    //Get the color mode and toggle function from the custom hook
    const { colorMode, toggleColorMode } = useColorMode();

    //Style for the active link
    const navLinkStyle = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
    });
    
    return (
    <VStack w="100%" align="stretch">
        <Flex as="header" mb={4} alignItems="center" w="100%" pl={4} pr={4}>
            <Headshot />
            <Heading as="h1" size="2xl" mb={4} color="black" pl={4}>
            Peter Hintze
            </Heading>
            <Spacer />
            <Button onClick={toggleColorMode} borderRadius="lg">
                {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </Flex>
        <Flex as="nav" alignItems="center" justifyContent="center" mb={4}>
            <HStack>
            <NavLink
                to="/"
                style={navLinkStyle}>
                    <Box color="black">Home</Box>
            </NavLink>
            <NavLink
                to="/about"
                style={navLinkStyle}>
                    <Box color="black">About</Box>
                </NavLink>
            <NavLink
                to="/projects"
                style={navLinkStyle}>
                    <Box color="black">Portfolio</Box>
            </NavLink>
            <NavLink
                to="/contact"
                style={navLinkStyle}>
                    <Box color="black">Contact Me</Box>
            </NavLink>
            <NavLink
                to="/resume"
                style={navLinkStyle}>
                    <Box color="black">Resume</Box>
            </NavLink>
            </HStack>
        </Flex>
    </VStack>
    );
}

export default Navbar;