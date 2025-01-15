import { defineStyle } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";

// Define a custom CSS style for the ring around the avatar
const ringCSS = defineStyle({
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "colorPalette.500",
    outlineOffset: "2px",
});

// Export and define the Headshot component
export const Headshot = () => {
    return (
        <Avatar
        size="2xl"
        name="Peter Hintze"
        src="/images/headshot.png"
        css={ringCSS}
        />
    );
};