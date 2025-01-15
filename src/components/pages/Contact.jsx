import { Link } from "react-router-dom";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { ContactForm } from "../structures/ContactForm";
import { ContactLogic } from "../data-logic/ContactLogic";

function Contact() {
    const { colorMode } = useColorMode();

    return (
        <Box
        bg={colorMode === "light" ? "white" : "gray.800"}
        color={colorMode === "light" ? "black" : "white"}
        p={6}
        borderRadius="xl"
        boxShadow="md"
        width={{ base: "90%", md: "75%", lg: "50%" }}
        margin="auto"
        >
        <Heading as="h2" size="lg" mb={4}>
            Contact Me
        </Heading>
        <Flex direction="column" mb={6}>
            <p>You can reach me directly at: <Link href="mailto:hintze.peter@gmail.com" style={{ textDecoration: "underline" }}>hintze.peter@gmail.com</Link> or by filling in the form below.</p>
        </Flex>
        <ContactLogic>
            {({ formData, errors, handleChange, handleBlur, handleSubmit }) => (
            <ContactForm
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
            />
            )}
        </ContactLogic>
        </Box>
    );
}

export default Contact;