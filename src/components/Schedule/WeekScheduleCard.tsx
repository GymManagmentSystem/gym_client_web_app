import { Card, CardBody, Text, Box, Stack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Day {
  dayNo: number;
  scheduleType: string;
}
export interface Props {
  weekNo: number;
  days: Day[];
}

const WeekScheduleCard = ({ weekNo, days }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = (dayNo: number) => {
    navigate(`/scheduleDetails/${weekNo}/${dayNo}`);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      maxW="100vw"
      overflowX="hidden"
      px={{ base: 2, md: 10, lg: 20 }}
    >
      <Card
        direction="row"
        overflow="hidden"
        borderRadius="15px"
        bg="#fff"
        border="2px"
        borderColor="#E6E6E5"
        boxShadow="lg"
        w={{ base: "100%" }}
        mb={3}
      >
        <Box sx={weekNoBoxStyles}>
          <Text sx={weekNoText}>Week {weekNo}</Text>
        </Box>

        <CardBody overflow={"auto"}>
          <Stack spacing={{ base: 1, md: 5 }} flexDirection={{ base: "row" }}>
            {days.map(({ dayNo, scheduleType }) => (
              <Box
                key={dayNo}
                sx={dayBoxStyles}
                onClick={() => handleOnClick(dayNo)}
                cursor={"pointer"}
              >
                <Text sx={dayTextStyles}>Day {dayNo}</Text>
                <Text sx={dayTextStyles}>{scheduleType}</Text>
                <Box sx={checkIconStyles}>
                  <FaCheckCircle />
                </Box>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
const weekNoBoxStyles = {
  width: { base: "9vh", md: "15vh", lg: "25vh" },
  minWidth: "9vh",
  bg: "#F0F0F0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const weekNoText = {
  color: "#000",
  fontWeight: "bold",
  fontSize: { base: "sm", md: "lg", lg: "xl" },
};
const dayBoxStyles = {
  width: { base: "6vh", md: "10vh", lg: "15vh" },
  bg: "#7D7C7C",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  p: 2,
  transition: "all 0.3s ease-in-out",
  _hover: {
    bg: "#5C5C5C",
    transform: "scale(1.05)",
    boxShadow: "md",
  },
};

const dayTextStyles = {
  fontSize: { base: "12px", md: "14px" },
  color: "#fff",
  textAlign: "center",
};

const checkIconStyles = {
  fontSize: { base: "12px", md: "15px" },
  color: "#fff",
  mt: 1,
};

export default WeekScheduleCard;
