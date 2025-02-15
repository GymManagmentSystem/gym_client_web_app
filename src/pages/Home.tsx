import { Grid, GridItem, Image, Text, Box } from "@chakra-ui/react";
import HomeHeader from "../components/Home/HomeHeader";
import HomeImage from "../assets/Home.png";
import Footer from "../components/Footer";
import ProgressChart from "../components/Home/ProgressChart";
import MySchedule from "../components/Home/TodaySchedule";
import CalculateBMI from "../components/Home/CalculateBMI";
import useUserNameStore from "../store/useUserNameStore";
import { motion } from "framer-motion";
import HorizontalBar from "../components/HorizontalBar";

export const MotionText = motion.create(Text);

const Home = () => {
  const { userName } = useUserNameStore();

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
          <Box position="relative" width="100%" height="auto">
            <Image
              src={HomeImage}
              width={"100%"}
              height={"auto"}
              objectFit={"cover"}
            />
            <Box sx={textBoxStyles}>
              <MotionText
                sx={welcomeText}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Welcome Back, {userName}!
              </MotionText>

              <MotionText
                sx={readyText}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              >
                Ready for today's workout?
              </MotionText>
              <MotionText
                sx={keepText}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
              >
                Keep moving forward!
              </MotionText>
            </Box>
          </Box>

          <ProgressChart />
          <MySchedule />
          <CalculateBMI />
          <HorizontalBar/>
        </GridItem>

        <GridItem pl="2" area={"footer"} left="0" width="100%" padding="0">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

const welcomeText = {
  fontSize: { base: "24px", md: "60px", lg: "70px", xl: "90px" },
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
