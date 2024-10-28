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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          maxW="100vw"
          overflowX="scroll"
          px={{ base: 2, md: 10, lg: 20 }}
          py={4}
        >
          {cardData.map(({ image, name, sets, reps }) => (
            <Card
              key={name}
              overflow="hidden"
              variant="outline"
              borderRadius="15px"
              bg="#fff"
              border="2px"
              borderColor="#E6E6E5"
              boxShadow="lg"
              w={{ base: "100%" }}
              minW="250px"
              mx={2}
            >
              <Box>
                <Center height="200px" >
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
                        <Text {...bodytextStyles}>Exercise</Text>
                        <Text {...bodytextStyles}>No of sets</Text>
                        <Text {...bodytextStyles}>No of reps</Text>
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
        </Box>
      </>
    );
  };
  
  const dayText = {
    color: "#000",
    fontSize: { base: "sm", md: "md", lg: "lg" },
    fontWeight: "semibold",
    mb: 4,
    mt:3,
    ml:{base:5,md:10,lg:20}
  };
  
  const bodytextStyles = {
    color: "#000",
    fontSize: { base: "10px", md: "12px", lg: "16px" },
  };
  
  export default ScheduleDetailsCard;
  