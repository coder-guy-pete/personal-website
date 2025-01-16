// ContactForm.jsx
import { Box, Input, Textarea, Button, VStack, Text } from "@chakra-ui/react";

export function ContactForm({ formData, errors, handleChange, handleBlur, handleSubmit }) {
    return (
        <Box>
        <VStack as="form" spacing={4} onSubmit={handleSubmit} pl={2} pr={2}>
            {/* Name Input */}
            <Box w="100%">
            <Text as="label" htmlFor="name" fontWeight="bold" mb={1}>
                Name
            </Text>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.name ? "red.500" : undefined}
            />
            {errors.name && <Text color="red.500" fontSize="sm" mt={1}>Name is required.</Text>}
            </Box>

            {/* Email Input */}
            <Box w="100%">
            <Text as="label" htmlFor="email" fontWeight="bold" mb={1}>
                Email Address
            </Text>
            <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.email ? "red.500" : undefined}
            />
            {errors.email && <Text color="red.500" fontSize="sm" mt={1}>Please enter a valid email address.</Text>}
            </Box>

            {/* Message Input */}
            <Box w="100%">
            <Text as="label" htmlFor="message" fontWeight="bold" mb={1}>
                Message
            </Text>
            <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.message ? "red.500" : undefined}
            />
            {errors.message && <Text color="red.500" fontSize="sm" mt={1}>Message is required.</Text>}
            </Box>

            <Button type="submit" colorScheme="teal" width="full" w="wrap-content" borderRadius="lg">
            Submit
            </Button>
        </VStack>
        </Box>
    );
}