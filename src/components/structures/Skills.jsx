import { Badge, Flex } from "@chakra-ui/react";
import { tpmSkillList } from "../data-logic/CaseStudyList";
import { getSkillIcon } from "../data-logic/SkillBadge";

function Skills() {
    return (
        <Flex wrap="wrap" gap={4}>
            {tpmSkillList.map((skill) => (
            <Badge key={skill} size="md">
                {getSkillIcon(skill)} {skill}
            </Badge>
            ))}
        </Flex>
    );
}

export default Skills;