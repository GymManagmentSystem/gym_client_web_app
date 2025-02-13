import { Box, Image, Text } from "@chakra-ui/react";
import backgroundImage from "../../assets/chome4.png";
import HorizontalBar from "../HorizontalBar";
import { motion } from "framer-motion";
import useAnimatedInView from "../../hooks/useAnimatedInView";

const MotionText = motion.create(Text);

const MiddleImage = () => {
  const { ref: textRef, isInView: isTextInView } = useAnimatedInView();
  return (
    <Box
      mt={{ base: 3, md: 5, lg: 8 }}
      position="relative"
      height={{ lg: "55vh" }}
      mb={{ base: 2, md: 3, lg: 5 }}
    >
      <Image
        src={backgroundImage}
        width="100%"
        height="100%"
        objectFit={"fill"}
      />

      <Box
        position="absolute"
        top={{ base: "20%", md: "30%" }} // Centers text vertically
        left="40%" // Centers text horizontally
        width={"50%"}
        right={0}
      >
        <MotionText
          ref={textRef}
          sx={textStyle}
          initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
          animate={
            isTextInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          } // Gradually becomes visible and normal size
          transition={{ duration: 3, ease: "easeOut" }}
        >
          We’re here to guide you, support your fitness journey, and empower you
          with the knowledge and tools to achieve your health and wellness
          goals.
        </MotionText>
      </Box>
      <HorizontalBar />
    </Box>
  );
};

const textStyle = {
  fontSize: { base: "10px", md: "22px", lg: "30px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  letterSpacing: { lg: "2px" },
};

export default MiddleImage;
