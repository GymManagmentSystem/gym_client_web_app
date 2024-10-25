import { Grid, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import HomeHeader from "../components/Home/HomeHeader";
import Footer from "../components/Footer";
import ExerciseCard from "../components/Exercises/ExerciseCard";

const Exercises = () => {
  const exerciseData = [
    {
      image:
        "https://apilyfta.com/static/GymvisualPNG/00471101-Barbell-Incline-Bench-Press_Chest_small.png",
      name: "Bench Press",
      description:
        "The bench press is performed by lying on a flat bench with feet firmly on the ground. Grip the barbell with hands slightly wider than shoulder-width apart, lower the bar to your chest, and press it upwards until your arms are fully extended. Repeat for the desired number of reps.",
    },
    {
      image:
        "https://apilyfta.com/static/GymvisualPNG/00471101-Barbell-Incline-Bench-Press_Chest_small.png",
      name: "Bench Press",
      description:
        "The bench press is performed by lying on a flat bench with feet firmly on the ground. Grip the barbell with hands slightly wider than shoulder-width apart, lower the bar to your chest, and press it upwards until your arms are fully extended. Repeat for the desired number of reps.",
    },
    {
      image:
        "https://apilyfta.com/static/GymvisualPNG/00471101-Barbell-Incline-Bench-Press_Chest_small.png",
      name: "Bench Press",
      description:
        "The bench press is performed by lying on a flat bench with feet firmly on the ground. Grip the barbell with hands slightly wider than shoulder-width apart, lower the bar to your chest, and press it upwards until your arms are fully extended. Repeat for the desired number of reps.",
    },
    {
      image:
        "https://apilyfta.com/static/GymvisualPNG/00471101-Barbell-Incline-Bench-Press_Chest_small.png",
      name: "Bench Press",
      description:
        "The bench press is performed by lying on a flat bench with feet firmly on the ground. Grip the barbell with hands slightly wider than shoulder-width apart, lower the bar to your chest, and press it upwards until your arms are fully extended. Repeat for the desired number of reps.",
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
          <Stack width={'100%'} align={'center'} justify={'center'}>
          <SimpleGrid spacing={10} columns={{ base: 1, md: 2, lg: 3 }} maxW={'90%'}>
          {exerciseData.map(({image,name,description})=>(
            <ExerciseCard image={image} name={name} description={description}/>
          ))}
          </SimpleGrid>
          </Stack>
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
