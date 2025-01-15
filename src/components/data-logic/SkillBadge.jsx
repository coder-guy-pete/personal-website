import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import { SiTypescript, SiExpress, SiPostgresql, SiVite, SiBootstrap, SiTailwindcss, SiChakraui } from "react-icons/si";

export function getSkillIcon(skill) {
    switch (skill) {
        case "HTML":
            return <FaHtml5 />;
        case "CSS":
            return <FaCss3 />;
        case "JavaScript":
            return <FaJs />;
        case "TypeScript":
            return <SiTypescript />;
        case "React":
            return <FaReact />;
        case "Node.js":
            return <FaNodeJs />;
        case "NPM":
            return <FaNpm />;
        case "Express.js":
            return <SiExpress />;
        case "PostgreSQL":
            return <SiPostgresql />;
        case "Vite":
            return <SiVite />;
        case "Bootstrap CSS":
            return <SiBootstrap />;
        case "Tailwind CSS":
            return <SiTailwindcss />;
        case "Chakra UI":
            return <SiChakraui />;
        default:
            return null;
    }
}