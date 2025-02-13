import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import HomeHeader from "../components/Home/HomeHeader";
import WeekScheduleCard from "../components/Schedule/WeekScheduleCard";
import HorizontalBar from "../components/HorizontalBar";
import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const MotionText = motion.create(Text);

interface Day {
  weekNo: number;
  dayNo: number;
  scheduleType: string;
}

//data groupby week using reduce function
const groupByWeek = (data: Day[]) => {
  return data.reduce((acc: { [key: number]: Day[] }, current: Day) => {
    const { weekNo } = current;
    if (!acc[weekNo]) {
      acc[weekNo] = [];
    }
    acc[weekNo].push(current);
    return acc;
  }, {});
};
const Schedule = () => {
  const weekScheduleData = [
    {
      weekNo: 1,
      dayNo: 1,
      scheduleType: "Chest",
    },
    {
      weekNo: 1,
      dayNo: 2,
      scheduleType: "Legs",
    },
    {
      weekNo: 1,
      dayNo: 3,
      scheduleType: "Arms",
    },
    {
      weekNo: 1,
      dayNo: 4,
      scheduleType: "Chest",
    },
    {
      weekNo: 1,
      dayNo: 5,
      scheduleType: "Legs",
    },

    {
      weekNo: 2,
      dayNo: 1,
      scheduleType: "Chest",
    },
    {
      weekNo: 2,
      dayNo: 2,
      scheduleType: "Legs",
    },
    {
      weekNo: 2,
      dayNo: 3,
      scheduleType: "Chest",
    },
  ];

  const groupedWeekScheduleData = groupByWeek(weekScheduleData);

  const { ref: textRef, isInView: isTextInView } = useAnimatedInView();

  return (
    <>
      <Grid
        templateAreas={`"header" "main" "footer"`}
        gridTemplateRows={"100px 1fr"}
        gridTemplateColumns={"1fr"}
        height={"auto"}
      >
        <GridItem
          pl="2"
          bg="#F1B900"
          area={"header"}
          position="fixed"
          top="0"
          left="0"
          width="100%"
          zIndex="10"
        >
          <HomeHeader />
        </GridItem>
        <GridItem
          pl="2"
          area={"main"}
          position={"relative"}
          left="0"
          width="100%"
          padding="0"
          bg="#fff"
        >
          <MotionText
            ref={textRef}
            sx={titleText}
            initial={{ opacity: 0, x: 50 }}
            animate={
              isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Schedule
          </MotionText>
          <Text sx={subText}>Current Schedule</Text>

          {Object.entries(groupedWeekScheduleData).map(([weekNo, days]) => (
            <WeekScheduleCard
              key={weekNo}
              weekNo={Number(weekNo)}
              days={days}
            />
          ))}

          <Box mt={{ base: 3, lg: 5 }} mb={{ base: 2, lg: 5 }}>
            <HorizontalBar />
          </Box>
        </GridItem>
        <GridItem pl="2" area={"footer"} left="0" width="100%" padding="0">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};
const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "30px", xl: "30px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 5,
  mb: 5,
};

const subText = {
  fontSize: { base: "sm", md: "md", lg: "lg" },
  color: "#000",
  fontWeight: "semibold",
  ml: { base: 5, md: 10, lg: 20 },
  mb: 5,
};
export default Schedule;
