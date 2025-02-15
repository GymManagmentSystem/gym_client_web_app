import { Grid, GridItem, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import HomeHeader from "../components/Home/HomeHeader";
import ScheduleDetailsCard from "../components/ScheduleDetails/ScheduleDetailsCard";

import { useParams } from "react-router-dom";

const ScheduleDetails = () => {
  const { weekNo, dayNo } = useParams<{ weekNo: string; dayNo: string }>();

  const scheduleCardDedails = [
    {
      weekNo: 1,
      dayNo: 1,
      image:
        "https://apilyfta.com/static/GymvisualPNG/00471101-Barbell-Incline-Bench-Press_Chest_small.png",
      name: "Bench Press",
      sets: 4,
      reps: 10,
    },
    {
      weekNo: 1,
      dayNo: 1,
      image:
        "https://www.hevyapp.com/wp-content/uploads/02511201-Chest-Dip_Chest.jpg",
      name: "Chest Dips",
      sets: 2,
      reps: 10,
    },
    {
      weekNo: 1,
      dayNo: 1,
      image:
        "https://www.lyfta.app/_next/image?url=%2Fthumbnails%2F13111201.jpg&w=3840&q=20",
      name: "Wide Pushes",
      sets: 3,
      reps: 10,
    },
    {
      weekNo: 1,
      dayNo: 1,
      image:
        "https://apilyfta.com/static/GymvisualPNG/02271101-Cable-Standing-Fly_Chest-FIX_small.png",
      name: "Cable Standing Fly",
      sets: 4,
      reps: 10,
    },
    {
      weekNo: 1,
      dayNo: 2,
      image:
        "https://kinxlearning.com/cdn/shop/files/exercise-14_1000x.jpg?v=1613154730",
      name: "Lunges",
      sets: 3,
      reps: 10,
    },
    {
      weekNo: 1,
      dayNo: 2,
      image:
        "https://kinxlearning.com/cdn/shop/files/exercise-10_1000x.jpg?v=1613154681",
      name: "Deadlift",
      sets: 4,
      reps: 12,
    },
    {
      weekNo: 1,
      dayNo: 2,
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/bodyweight-standing-calf-raise.jpg",
      name: "Standing Calf Raise",
      sets: 3,
      reps: 10,
    },
  ];
  const filteredData = scheduleCardDedails.filter(
    (item) =>
      item.weekNo === parseInt(weekNo || "0") &&
      item.dayNo === parseInt(dayNo || "0")
  );
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
          minH={"50vh"}
          padding="0"
          bg="#fff"
        >
          <Text {...titleText}>Current Schedule</Text>
          {filteredData.length > 0 ? (
            <ScheduleDetailsCard
              key={dayNo}
              weekNo={parseInt(weekNo || "0")}
              dayNo={parseInt(dayNo || "0")}
              cardData={filteredData.map(({ image, name, sets, reps }) => ({
                image,
                name,
                sets,
                reps,
              }))}
            />
          ) : (
            <Text
              color={"#000"}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              ml={{ base: 5, md: 10, lg: 20 }}
            >
              No workout scheduled.
            </Text>
          )}
        </GridItem>
        <GridItem pl="2" area={"footer"} left="0" width="100%" padding="0">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};
const titleText = {
  color: "#000",
  fontSize: { base: "18px", md: "22px", lg: "30px", xl: "30px" },
  fontWeight: "bold",
  ml: { base: 5, md: 10, lg: 20 },
  mt: 5,
};
export default ScheduleDetails;
