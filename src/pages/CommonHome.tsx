import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CommonHomeHeader from "../components/CommonHome/CommonHomeHeader";
import HomeImage_1 from "../assets/chome1.png";
import HomeImage_2 from "../assets/chome2.png";
import HomeImage_3 from "../assets/chome3.png";
import HorizontalBar from "../components/HorizontalBar";
import ElivateWellness from "../components/CommonHome/ElivateWellness";
import CommonClientFooter from "../components/CommonClientFooter";
import MiddleImage from "../components/CommonHome/MiddleImage";
import Benifits from "../components/CommonHome/Benifits";
import BottomImages from "../components/CommonHome/BottomImages";
import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const MotionBox = motion(Box);

const imageList = [HomeImage_1, HomeImage_2, HomeImage_3];

const CommonHome = () => {
  const { ref: boxRef, isInView: isBoxInView } = useAnimatedInView();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000); // Change image every 3 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Grid
      templateAreas={`"header" "main" "footer"`}
      gridTemplateRows={"100px 1fr"}
      gridTemplateColumns={"1fr"}
      height={"auto"}
      overflow={'hidden'}
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
        <CommonHomeHeader />
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
        {/* Image Slideshow */}
        <MotionBox
          key={currentImageIndex} //smooth transition
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <Image
            src={imageList[currentImageIndex]}
            height={{ base: "30vh", md: "50vh", lg: "80vh" }}
            width={"100%"}
            objectFit={"cover"}
          />
        </MotionBox>

        <HorizontalBar />

        <MotionBox
          ref={boxRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <Text sx={titleText}>Our Gym is Your Gym</Text>
          <Text sx={subText} mb={{ base: 2, md: 3, lg: 5 }}>
            This is your space to go stronger, healthier and happier.
          </Text>
        </MotionBox>

        <HorizontalBar />
        <ElivateWellness />
        <MiddleImage />
        <Benifits />
        <BottomImages />
      </GridItem>

      <GridItem pl="2" area={"footer"} left="0" width="100%" padding="0">
        <CommonClientFooter />
      </GridItem>
    </Grid>
  );
};

const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "40px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 3,
};

const subText = {
  color: "#000",
  fontWeight: "semibold",
  fontSize: { base: "12px", md: "20px", lg: "25px" },
  textAlign: "center",
};

export default CommonHome;
