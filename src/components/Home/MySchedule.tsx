import { Box, Text } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import ScheduleCard from "./ScheduleCard";
import { useState } from "react";

const MySchedule = () => {
  const scheduleData = [
    {
      date: "2024-10-10",
      name: "Lat pull-down",
      sets: 4,
      reps: 10,
      image: "https://anabolicaliens.com/cdn/shop/articles/5f19b4eff633a10684ef6193_wide-grip-lat-pulldown-anabolic-aliens_500x.png?v=1644918521",
    },
    {
      date: "2024-10-10",
      name: "Bench press",
      sets: 3,
      reps: 10,
      image: "https://apilyfta.com/static/GymvisualPNG/00471101-Barbell-Incline-Bench-Press_Chest_small.png",
    },
    {
      date: "2024-10-10",
      name: "Squats",
      sets: 4,
      reps: 10,
      image: "https://lyfta.app/images/exercises/14361101.png",
    },
    {
      date: "2024-10-10",
      name: "Deadlifts",
      sets: 4,
      reps: 10,
      image: "https://kinxlearning.com/cdn/shop/files/exercise-10_1000x.jpg?v=1613154681",
    },
  ];

  const [completedSets, setCompletedSets] = useState(
    Array(scheduleData.length).fill(0)
  );

  const handleCheckboxChange = (index: number, isAllChecked: boolean) => {
    // Update the completed sets count
    const updatedSets = [...completedSets];
    updatedSets[index] = isAllChecked ? scheduleData[index].sets : 0; // Reset count if not all are checked
    setCompletedSets(updatedSets);
  };

  return (
    <Box bg={"#fff"}>
      <HorizontalBar />
      <Text sx={titleText}>My Schedule</Text>
      {scheduleData.map(({ name, date, sets, reps, image }, index) => (
        <ScheduleCard
          key={index}
          name={name}
          date={date}
          sets={sets}
          reps={reps}
          image={image}
          index={index}
          onCheckboxChange={handleCheckboxChange}
          isNextEnabled={
            index === 0 || completedSets[index - 1] === scheduleData[index - 1].sets
          }
        />
      ))}
    </Box>
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

export default MySchedule;
