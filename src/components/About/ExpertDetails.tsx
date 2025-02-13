import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const ExpertDetails = () => {
  return (
    <Box>
      <Text sx={subText}>Meet a few of our experts:</Text>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md"> Darshana Abeywela </Heading>
          </CardHeader>
          <CardBody>
            <Text>Specializing in strength training and conditioning</Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Sahan Weerasinghe</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Yoga and Pilates Instructor with over 10 years of experience
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Kamal Ranasinghe</Heading>
          </CardHeader>
          <CardBody>
            <Text>CrossFit Level 2 Trainer and HIIT Specialist</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};
const subText = {
  color: "#000",
  fontSize: { base: "12px", md: "20px", lg: "25px" },
  textAlign: "center",
  fontWeight: "semibold",
};
export default ExpertDetails;
