import { Badge, Flex } from "@chakra-ui/react";
import { projectList } from "../data-logic/ProjectList";

function Skills() {
  // Combine all skills from projects into a single array
    const allSkills = projectList.flatMap((project) => project.skills);

    // Use Set to get unique skills
    const uniqueSkills = new Set(allSkills);

    return (
        <Flex wrap="wrap" gap={4}>
            {Array.from(uniqueSkills).map((skill) => (
            <Badge key={skill} size="md">{skill}</Badge>
            ))}
        </Flex>
    );
}

export default Skills;