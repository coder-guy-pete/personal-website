// Contact.jsx
import { Box } from "@chakra-ui/react";
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