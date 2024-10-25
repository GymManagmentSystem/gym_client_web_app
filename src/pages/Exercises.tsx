import { Box, Grid, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import HomeHeader from "../components/Home/HomeHeader";
import Footer from "../components/Footer";
import ExerciseCard from "../components/Exercises/ExerciseCard";
import HorizontalBar from "../components/HorizontalBar";

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
  ];
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
          <Text sx={titleText}>Exercises</Text>
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
export default Exercises;
