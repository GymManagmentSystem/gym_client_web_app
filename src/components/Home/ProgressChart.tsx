import {
  Box,
  Card,
  CardBody,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import FitnessManImage from "../../assets/young-fitness-man.png";
import DoughnutChart from "./DoughnutChart";
import { motion } from "framer-motion";
import useAnimatedInView from "../../hooks/useAnimatedInView";

const MotionText = motion(Text);
const MotionImage = motion(Image);

const ProgressChart = () => {
  const { ref: textRef, isInView: isTextInView } = useAnimatedInView();
  const { ref: imageRef, isInView: isImageInView } = useAnimatedInView();

  return (
    <Box bg={"#fff"} pt={4} pb={6}>
      <HorizontalBar />
      <MotionText
        ref={textRef}
        sx={titleText}
        initial={{ opacity: 0, x: 50 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        My Progress
      </MotionText>
      <Grid
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
        ml={{ base: 2 }}
      >
        <Card
          direction={{ base: "column", md: "row" }}
          overflow="hidden"
          borderRadius={"35px"}
          bg={"#F2F2F2"}
          width={{ base: "auto", md: "auto", lg: 800, xl: 800 }}
        >
          <MotionImage
            ref={imageRef}
            src={FitnessManImage}
            width={300}
            objectFit={"cover"}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <Stack>
            <CardBody>
              <Text
                sx={{
                  color: "#F1B900",
                  fontSize: {
                    base: "18px",
                    md: "22px",
                    lg: "30px",
                    xl: "30px",
                  },
                  fontWeight: "semibold",
                }}
              >
                Workouts
              </Text>
              <DoughnutChart />
            </CardBody>
          </Stack>
        </Card>
      </Grid>
    </Box>
  );
};

const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "30px", xl: "30px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 5,
};

export default ProgressChart;
