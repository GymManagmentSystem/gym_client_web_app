import {
  Stack,
  Text,
  Image,
  VStack,
  HStack,
  Box,
  Center,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";

interface CardData {
  image: string;
  name: string;
  sets: number;
  reps: number;
}

interface Props {
  weekNo: number;
  dayNo: number;
  cardData: CardData[];
}

const ScheduleDetailsCard = ({ weekNo, dayNo, cardData }: Props) => {
  return (
    <>
      <Text {...dayText}>
        Week {weekNo} - Day {dayNo}
      </Text>
      <Stack sx={mainContainer}>
        {cardData.map(({ image, name, sets, reps }) => (
          <Card key={name} sx={cardContainer}>
            <Box>
              <Center height="200px">
                <Image
                  src={image}
                  height="100%"
                  width="100%"
                  objectFit="contain"
                  borderTopRadius="15px"
                />
              </Center>
              <Stack>
                <CardBody>
                  <HStack spacing={4} justify="space-between">
                    <VStack align="start">
                      <Text {...bodytextStyles} fontWeight={"semibold"}>
                        Exercise
                      </Text>
                      <Text {...bodytextStyles} fontWeight={"semibold"}>
                        No of sets
                      </Text>
                      <Text {...bodytextStyles} fontWeight={"semibold"}>
                        No of reps
                      </Text>
                    </VStack>

                    <VStack align="start">
                      <Text {...bodytextStyles}>{name}</Text>
                      <Text {...bodytextStyles}>{sets}</Text>
                      <Text {...bodytextStyles}>{reps}</Text>
                    </VStack>
                  </HStack>
                </CardBody>
              </Stack>
            </Box>
          </Card>
        ))}
        <HorizontalBar />
      </Stack>
    </>
  );
};
const mainContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxW: "100%",
  overflow: "hidden",
  flexDirection: { base: "column", md: "row" },
  flexWrap: "wrap",
};
const cardContainer = {
  overflow: "hidden",
  variant: "outline",
  borderRadius: "15px",
  bg: "#fff",
  border: "2px",
  borderColor: "#E6E6E5",
  boxShadow: "lg",
  w: { base: "80%", md: "25%", lg: "22%" },
  minW: "250px",
  mx: 2,
  my: 2,
  _hover: {
    boxShadow: "xl",
    transform: "scale(1.02)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};
const dayText = {
  color: "#000",
  fontSize: { base: "sm", md: "md", lg: "lg" },
  fontWeight: "semibold",
  mb: 4,
  mt: 3,
  ml: { base: 5, md: 10, lg: 20 },
};

const bodytextStyles = {
  color: "#000",
  fontSize: { base: "10px", md: "12px", lg: "16px" },
};

export default ScheduleDetailsCard;
