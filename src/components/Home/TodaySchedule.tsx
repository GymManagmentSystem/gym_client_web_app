import { Box, Text } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import ScheduleCard from "./ScheduleCard";
import { useState } from "react";

const MySchedule = () => {
  const scheduleData = [
    {
      date: "2024-10-10",
      name: "Bench press",
      sets: 4,
      reps: 10,
      image:
        "https://apilyfta.com/static/GymvisualPNG/00471101-Barbell-Incline-Bench-Press_Chest_small.png",
    },
    {
      date: "2024-10-10",
      name: "Chest Dips",
      sets: 2,
      reps: 10,
      image:
        "https://www.hevyapp.com/wp-content/uploads/02511201-Chest-Dip_Chest.jpg",
    },
    {
      date: "2024-10-10",
      name: "Wide Pushes",
      sets: 3,
      reps: 10,
      image: "https://www.lyfta.app/_next/image?url=%2Fthumbnails%2F13111201.jpg&w=3840&q=20",
    },
    {
      date: "2024-10-10",
      name: "Cable Standing Fly",
      sets: 4,
      reps: 10,
      image:
        "https://apilyfta.com/static/GymvisualPNG/02271101-Cable-Standing-Fly_Chest-FIX_small.png",
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
      <Text sx={titleText}>Today Schedule</Text>
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
            index === 0 ||
            completedSets[index - 1] === scheduleData[index - 1].sets
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
