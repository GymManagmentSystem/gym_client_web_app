import {
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  VStack,
  Box,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { FaCalendarDay } from "react-icons/fa";

interface Props {
  date: string;
  name: string;
  sets: number;
  reps: number;
  image: string;
}

const ScheduleCard = ({ date, name, sets, reps, image }: Props) => {
  const iconSize = useBreakpointValue({
    base: "12px",
    md: "15px",
    lg: "18px",
    xl: "20px",
  });

  const generateCheckboxes = (sets: number) => {
    return Array.from({ length: sets }).map((_, index) => (
      <Checkbox key={index} defaultChecked {...checkboxStyles} />
    ));
  };

  return (
    <Box sx={mainBoxStyles}>
      <Card
        direction={{ base: "row" }}
        overflow="hidden"
        borderRadius={"20px"}
        bg={"#fff"}
        width={{ base: "auto", md: "auto", lg: "80%" }}
        height={{ base: "50%", md: "250px", lg: "250px" }}
        justifyContent={"space-between"}
      >
        <Stack flex={1}>
          <CardBody bg={"#FFDD6D"}>
            <HStack>
              <Box {...calendarIconBox}>
                <FaCalendarDay color="#F1B900" size={iconSize} />
              </Box>
              <Box style={{ alignItems: "flex-start" }}>
                <Text sx={todayText}>Today</Text>
                <Text sx={dateText}>{date}</Text>
              </Box>
            </HStack>

            <Text sx={nameText}>{name}</Text>

            <HStack {...setsBoxHstackStyles}>
              <Box {...setsBoxStyles}>
                <VStack>
                  <Text sx={setsText}>{sets}</Text>
                  <Text sx={setsValue}>Sets</Text>
                </VStack>
              </Box>
              <Box {...setsBoxStyles}>
                <VStack>
                  <Text sx={setsText}>{reps}</Text>
                  <Text sx={setsValue}>Reps</Text>
                </VStack>
              </Box>
            </HStack>
            <HStack {...checkboxHstack}>{generateCheckboxes(sets)}</HStack>
          </CardBody>
        </Stack>
        <Stack flex={1}>
          <Image
            src={image}
            objectFit={"contain"}
            height={"100%"}
            width={"100%"}
          />
        </Stack>
      </Card>
    </Box>
  );
};
const mainBoxStyles = {
  alignItems: "center",
  justifyContent: "center",
  m: { base: 2, md: 5, lg: 10 },
  pb: 3,
  display: { base: "block", lg: "flex" },
};

const calendarIconBox = {
  bg: "#fff",
  boxSize: { base: "25px", md: "30px", lg: "40px", xl: "50px" },
  borderRadius: "25px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const todayText = {
  color: "#000",
  fontSize: { base: "12px", md: "16px", lg: "16px", xl: "18px" },
  fontWeight: "semibold",
};
const dateText = {
  color: "#000",
  fontSize: { base: "8px", md: "12px", lg: "12px", xl: "14px" },
};
const nameText = {
  color: "#000",
  fontSize: { base: "12px", md: "18px", lg: "20px", xl: "22px" },
  fontWeight: "bold",
  mt: 1,
  mb: 2,
};
const setsBoxHstackStyles = {
  alignItems: "center",
  justifyContent: "center",
  mt: 1,
  spacing: { base: 5, md: 8, lg: 10, xl: 10 },
};
const setsBoxStyles = {
  bg: "#fff",
  width: { base: "60px", md: "80px", lg: "100px", xl: "100px" },
  height: { base: "40px", md: "50px", lg: "60px", xl: "60px" },
  borderRadius: "5px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};
const setsText = {
  color: "#000",
  fontSize: { base: "12px", md: "15px", lg: "18px", xl: "18px" },
  fontWeight: "semibold",
};
const setsValue = {
  color: "#000",
  fontSize: { base: "12px", md: "14px", lg: "16px", xl: "16px" },
};

const checkboxHstack = {
  spacing: { base: 5, md: 8, lg: 10, xl: 10 },
  alignItems: "center",
  justifyContent: "center",
  mt: { base: 3, md: 5, lg: 5, xl: 5 },
};

const checkboxStyles = {
  size: { base: "sm", md: "md", lg: "lg", xl: "lg" },
  colorScheme: "#fff",
  iconColor: "#F1B900",
  bg: "#fff",
  borderRadius: "2px",
};

export default ScheduleCard;
