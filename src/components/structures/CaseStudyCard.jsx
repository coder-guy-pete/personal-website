import { Card, Badge, Box, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { getSkillIcon } from "../data-logic/SkillBadge";

const sectionLabelStyle = {
  fontSize: "xs",
  fontWeight: "semibold",
  textTransform: "uppercase",
  letterSpacing: "wider",
  color: "gray.400",
  mb: 1,
};

function CaseStudyCard({ study }) {
  return (
    <Card.Root variant="elevated" w="100%">
      <Card.Body p={6}>
        <Flex justify="space-between" align="flex-start" mb={1}>
          <Text fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" color="gray.400">
            {study.companyYear}
          </Text>
          {study.isTpmBuilt && (
            <Badge colorPalette="purple" size="sm">Built by the TPM</Badge>
          )}
        </Flex>

        <Card.Title fontSize="xl" mb={1}>{study.title}</Card.Title>

        <Text fontSize="sm" fontStyle="italic" color="gray.400" mb={6}>
          {study.headline}
        </Text>

        <SimpleGrid columns={3} gap={4} mb={6}>
          {study.metrics.map((metric) => (
            <Box key={metric.label} textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">{metric.value}</Text>
              <Text fontSize="xs" color="gray.400">{metric.label}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box mb={4}>
          <Text {...sectionLabelStyle}>The Problem</Text>
          <Text fontSize="sm">{study.problem}</Text>
        </Box>

        <Box mb={4}>
          <Text {...sectionLabelStyle}>The Approach</Text>
          <Text fontSize="sm">{study.approach}</Text>
        </Box>

        <Box mb={6}>
          <Text {...sectionLabelStyle}>The Outcome</Text>
          <Text fontSize="sm">{study.outcome}</Text>
        </Box>

        <Flex wrap="wrap" gap={2} alignItems="center">
          {study.skills.map((skill) => (
            <Badge key={skill} size="md">
              {getSkillIcon(skill)} {skill}
            </Badge>
          ))}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}

export default CaseStudyCard;
