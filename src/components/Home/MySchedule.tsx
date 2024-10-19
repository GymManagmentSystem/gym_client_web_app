import { Box,Text } from "@chakra-ui/react"
import HorizontalBar from "../HorizontalBar"
import ScheduleCard from "./ScheduleCard";
import ExerciseImage from "../../assets/ex1.png"

const MySchedule = () => {

  const scheduleData =[
    {
      date:"2024-10-10",
      name:"Lat pull-down",
      sets:4,
      reps:10,
      image:ExerciseImage
    },
    {
      date:"2024-10-10",
      name:"Bench press",
      sets:3,
      reps:10,
      image:ExerciseImage
    },
    {
      date:"2024-10-10",
      name:"Bench press",
      sets:5,
      reps:10,
      image:ExerciseImage
    },
]

  return (
    <Box bg={"#fff"}>
        <HorizontalBar/>
        <Text sx={titleText}>My Schedule</Text>
          {scheduleData.map(({name,date,sets,reps,image},index)=>(
            <ScheduleCard 
            key={index}
            name={name}
            date={date}
            sets={sets}
            reps={reps}
            image={image}
            />
          ))}
            
        
    </Box>
  )
}

const titleText = {
    fontSize: { base: "18px", md: "22px", lg: "30px", xl: "30px" },
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    mt: 5,
    mb:5
  };

export default MySchedule