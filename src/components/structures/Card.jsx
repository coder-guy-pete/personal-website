import {
    Card,
    Image,
    Flex,
    Badge,
    Link,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu"
import { getSkillIcon } from "../data-logic/SkillBadge";

function ProjectCard({ project }) {
    return (
        <Card.Root maxW="sm" variant="elevated">
            <Card.Body p="0px">
                <Image src={project.imageSrc} alt={project.name} borderRadius="lg" mb={4} height="250px" fit="containt" />
                <Card.Title size="md" pb={3} pl={5}>{project.name}</Card.Title>
                <Card.Description pl={5} pr={5}>
                {project.description}<br />
                <Link href={project.github} target="_blank" pt={3}>Github Repo <LuExternalLink /></Link>
            </Card.Description>
            
                <Card.Footer>
                    {project.skills && project.skills.length > 0 && (
                        <Flex wrap="wrap" gap={2} pt={4}>
                            {project.skills.map((skill) => (
                                <Badge key={skill} colorPallete="teal" size="md">
                                    {getSkillIcon(skill)} {skill}
                                </Badge>
                            ))}
                        </Flex>
                    )}
                </Card.Footer>
            </Card.Body>
        </Card.Root>
        );
    };

export default ProjectCard;