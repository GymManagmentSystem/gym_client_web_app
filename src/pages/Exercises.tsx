import {  Grid, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import HomeHeader from "../components/Home/HomeHeader";
import Footer from "../components/Footer";
import ExerciseCard from "../components/Exercises/ExerciseCard";
import HorizontalBar from "../components/HorizontalBar";
import useAnimatedInView from "../hooks/useAnimatedInView";
import { motion } from "framer-motion";

const MotionText = motion.create(Text);

const Exercises = () => {
  const exerciseData = [
    {
      image:
        "https://apilyfta.com/static/GymvisualPNG/00471101-Barbell-Incline-Bench-Press_Chest_small.png",
      name: "Bench Press",
      description:
        "The bench press is performed by lying on a flat bench with feet firmly on the ground. Grip the barbell with hands slightly wider than shoulder-width apart, lower the bar to your chest, and press it upwards until your arms are fully extended. Repeat for the desired number of reps.",
      type: "Strength",
      bodyArea: "Chest",
      exerciseLevel: "Intermediate",
      category: "Compound",
      equipments: "Barbell, Bench",
    },
    {
      image:
        "https://www.hevyapp.com/wp-content/uploads/02511201-Chest-Dip_Chest.jpg",
      name: "Chest Dips",
      description:
        "Hold onto parallel bars with arms extended, and lean slightly forward while bending your knees if necessary. Lower your body by bending your elbows until your chest is level with your hands, feeling a stretch across your chest. Push yourself back up to the starting position, keeping the movement controlled. Repeat for the desired number of reps.",
      type: "Strength",
      bodyArea: "Chest",
      exerciseLevel: "Advanced",
      category: "Compound",
      equipments: "Parallel Bars",
    },
    {
      image:
        "https://www.lyfta.app/_next/image?url=%2Fthumbnails%2F13111201.jpg&w=3840&q=20",
      name: "Wide Pushes",
      description:
        "Start in a push-up position with hands wider than shoulder-width on the ground. Lower your body by bending the elbows outward until your chest nearly touches the ground, keeping your core tight. Push up through your palms until your arms are fully extended. Repeat for the desired number of reps.",
      type: "Strength",
      bodyArea: "Chest",
      exerciseLevel: "Intermediate",
      category: "Bodyweight",
      equipments: "None",
    },
    {
      image:
        "https://apilyfta.com/static/GymvisualPNG/02271101-Cable-Standing-Fly_Chest-FIX_small.png",
      name: "Cable Standing Fly",
      description:
        "Stand between two cable pulleys with feet shoulder-width apart. Grip the handles with a slight bend in your elbows and arms extended at shoulder height. Pull the handles together in front of your chest in a controlled arc, focusing on contracting your chest muscles. Slowly return to the starting position. Repeat for the desired number of reps",
      type: "Strength",
      bodyArea: "Chest",
      exerciseLevel: "Intermediate",
      category: "Isolation",
      equipments: "Cable Machine",
    },
  ];

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
            initial={{ opacity: 0, x: -50 }}
            animate={
              isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Exercises
          </MotionText>
          <Stack width={"100%"} align={"center"} justify={"center"}>
            <SimpleGrid
              spacing={10}
              columns={{ base: 1, md: 2, lg: 3 }}
              maxW={"90%"}
            >
              {exerciseData.map(
                ({
                  image,
                  name,
                  description,
                  type,
                  bodyArea,
                  exerciseLevel,
                  category,
                  equipments,
                }) => (
                  <ExerciseCard
                    key={name}
                    image={image}
                    name={name}
                    description={description}
                    type={type}
                    bodyArea={bodyArea}
                    exerciseLevel={exerciseLevel}
                    category={category}
                    equipments={equipments}
                  />
                )
              )}
            </SimpleGrid>
          </Stack>
          <HorizontalBar/>
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
export default Exercises;
