import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ExpertImage from "../../assets/expert.png";
import HorizontalBar from "../HorizontalBar";


const experts = [
  {
    name: "Darshana Abeywela",
    specialty: "Instructor",
  },
  {
    name: "Sahan Weerasinghe",
    specialty: "Instructor",
  },
  {
    name: "Kamal Ranasinghe",
    specialty: "Instructor",
  },
];

const ExpertDetails = () => {
 

  return (
    <>
      <Text sx={subText}>Meet a few of our experts</Text>
      <Stack
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        spacing={4}
        mt={10}
        mb={10}
        flexWrap={"wrap"}
      >
        {experts.map((expert, index) => (
          <Card
            key={index}
            w={{ base: "90%", md: "30%", lg: "25%" }}
            alignItems="center"
            bg="#fff"
            p={2}
            ml={{ base: 2 }}
            borderBottomWidth={3}
            borderTopWidth={1}
            borderLeftWidth={3}
            borderRightWidth={3}
            borderColor={"#E6E6E5"}
            borderRadius={'25px'}
          >
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={4}
            >
              <Image src={ExpertImage} borderRadius="lg" objectFit="cover" />
              <Stack mt="4" spacing="4" alignItems="center">
                <Heading sx={headingText}>{expert.name}</Heading>
                <Text sx={cardText}>{expert.specialty}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Stack>
      <HorizontalBar />
    </>
  );
};

const subText = {
  color: "#000",
  fontSize: { base: "14px", md: "20px", lg: "22px" },
  textAlign: "center",
  fontWeight: "bold",
};

const headingText = {
  fontSize: { base: "14px", md: "16px", lg: "22px" },
  fontWeight: "bold",
  textAlign: "center",
  color: "#000",
};

const cardText = {
  textAlign: "center",
  fontSize: { base: "12px", md: "14px", lg: "18px" },
  color: "#000",
};

export default ExpertDetails;
