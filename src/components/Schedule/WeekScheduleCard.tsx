import { Card, CardBody, Text, Box, HStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const WeekScheduleCard = () => {
  return (
    <Card
      direction={'row'}
      overflow="hidden"
      variant="outline"
      bg={"#fff"}
      border={"2px"}
      borderColor={"#000"}
      ml={{base:5,md:10,lg:20}}
      mr={{base:5,md:10,lg:20}}
    >
      <Box
        sx={{
          width: {base:'50%',md:'20%'},
          bg: "#F0F0F0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text sx={{ color: "#000", fontWeight: "bold", fontSize: "xl" }}>
          Week 1
        </Text>
      </Box>

      <CardBody>
        <HStack spacing={5}>
          <Box sx={dayBoxStyles}>
            <Text>Day 1</Text>
            <Text>Chest</Text>
            <FaCheckCircle />
          </Box>
          <Box sx={dayBoxStyles}>
            <Text>Day 1</Text>
            <Text>Chest</Text>
            <FaCheckCircle />
          </Box>
          <Box sx={dayBoxStyles}>
            <Text>Day 1</Text>
            <Text>Chest</Text>
            <FaCheckCircle />
          </Box>
          <Box sx={dayBoxStyles}>
            <Text>Day 1</Text>
            <Text>Chest</Text>
            <FaCheckCircle />
          </Box>
          <Box sx={dayBoxStyles}>
            <Text>Day 1</Text>
            <Text>Chest</Text>
            <FaCheckCircle />
          </Box>
        
        </HStack>
      </CardBody>
    </Card>
  );
};
const dayBoxStyles = {
  width:{base:'25%',md:'20%',lg:'15%'},
  bg: "#7D7C7C",
  border: "2px",
  borderRadius: "15px",
  display: "flex",
  flexDirection:'column',
  alignItems: "center",
  justifyContent: "center",
  
};
export default WeekScheduleCard;
