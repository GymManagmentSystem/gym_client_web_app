import { Box, Text } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import ScheduleCard from "./ScheduleCard";
import { useEffect, useState } from "react";
import useWorkoutCount from "../../store/useWorkoutCount";
import { motion} from "framer-motion";
import useAnimatedInView from "../../hooks/useAnimatedInView";

const MotionText = motion.create(Text);

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
      image:
        "https://www.lyfta.app/_next/image?url=%2Fthumbnails%2F13111201.jpg&w=3840&q=20",
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

  const { setProgressCount } = useWorkoutCount();

  useEffect(() => {
    if (scheduleData.length > 0) {
      setProgressCount(0, scheduleData.length);
    }
  }, [setProgressCount]);

  const [completedSets, setCompletedSets] = useState(
    Array(scheduleData.length).fill(0)
  );

  console.log(scheduleData.length);

  const handleCheckboxChange = (index: number, isAllChecked: boolean) => {
    // Update the completed sets count
    const updatedSets = [...completedSets];
    updatedSets[index] = isAllChecked ? scheduleData[index].sets : 0; // Reset count if not all are checked
    setCompletedSets(updatedSets);
  };

  //for text animation
const {ref:textRef,isInView:isTextInView} = useAnimatedInView();

  return (
    <Box bg={"#fff"}>
      <HorizontalBar />
      <MotionText
        ref={textRef}
        sx={titleText}
        initial={{ opacity: 0, x: -50 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Today Schedule
      </MotionText>
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
