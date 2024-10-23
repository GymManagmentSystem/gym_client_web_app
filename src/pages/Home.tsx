import { Grid, GridItem, Image, Text, Box } from "@chakra-ui/react";
import HomeHeader from "../components/HomeHeader";
import HomeImage from "../assets/Home.png";
import Footer from "../components/Footer";
import ProgressChart from "../components/Home/ProgressChart";
import MySchedule from "../components/Home/MySchedule";
import CalculateBMI from "../components/Home/CalculateBMI";

const Home = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          lg: `"header" "main" "footer"`,
        }}
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
          <Box position="relative" width="100%" height="auto">
            <Image
              src={HomeImage}
              width={"100%"}
              height={"auto"}
              objectFit={"cover"}
            />
            <Box sx={textBoxStyles}>
              <Text sx={welcomeText}>Welcome Back, Wilson!</Text>
              <Text sx={readyText}>Ready for today's workout?</Text>
              <Text sx={keepText}>Keep moving forward!</Text>
            </Box>
          </Box>

          <ProgressChart />
          <MySchedule />
          <CalculateBMI />
        </GridItem>

        <GridItem pl="2" area={"footer"} left="0" width="100%" padding="0">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

const welcomeText = {
  fontSize: { base: "28px", md: "60px", lg: "70px", xl: "90px" },
  fontWeight: "bold",
  color: "#fff",
  whiteSpace: "nowrap", // Prevent text from breaking into two lines
  textAlign: "center",
  
};

const readyText = {
  color: "#F1B900",
  fontSize: { base: "20px", md: "40px", lg: "50px", xl: "70px" },
  fontWeight: "bold",
  textAlign: "center",
};

const keepText = {
  color: "#fff",
  fontSize: { base: "18px", md: "30px", lg: "40px", xl: "50px" },
  fontWeight: "semibold",
  textAlign: "center",
};

const textBoxStyles = {
  position: "absolute", // Overlaying text
  zIndex: "2",
  left: "50%",
  top: "20%",
  transform: "translate(-50%,-50%) ",
  mt: { base: 10, md: 20, lg: 20 },
};
export default Home;
