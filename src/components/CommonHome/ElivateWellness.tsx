import { Box, Image, Stack, Text } from "@chakra-ui/react";
import fitnessImage from "../../assets/fitnessImage.png";
import HorizontalBar from "../HorizontalBar";
import { motion } from "framer-motion";
import useAnimatedInView from "../../hooks/useAnimatedInView";

const MotionText = motion.create(Text);
const MotionImage = motion.create(Image);

const ElivateWellness = () => {
  const { ref: textRef, isInView: isTextInView } = useAnimatedInView();
  const { ref: imageRef, isInView: isImageInView } = useAnimatedInView();

  return (
    <Box>
      <MotionText
        ref={textRef}
        sx={titleText}
        initial={{ opacity: 0, x: -50 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Elivate Your Wellness
      </MotionText>

      <Box sx={{ background: "#F9F8F4" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={{ base: 5, md: 10, lg: 20 }}
          pl={10}
          pr={10}
        >
          <MotionText
            ref={textRef}
            sx={subText}
            flex={1}
            initial={{ opacity: 0, x: -50 }} // Start from left
            animate={
              isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            } // Only animate when in view
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            At MotionZone, we’re committed to helping you thrive. Fitness is
            more than just a routine—it’s a path to greater well-being,
            confidence, and vitality. Our modern facilities and experienced team
            are here to guide and inspire you, no matter where you’re starting
            from. Together, let’s embrace the path to a healthier, more
            energized you.
          </MotionText>

          <MotionImage
            ref={imageRef}
            src={fitnessImage}
            width={{ base: "90%", md: "50%", lg: "30%" }}
            height="auto"
            objectFit="cover"
            initial={{ opacity: 0, y: -100 }}
            animate={
              isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </Stack>
      </Box>
      <HorizontalBar />
    </Box>
  );
};
const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "30px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 5,
  mb: 5,
};
const subText = {
  color: "#000",
  fontSize: { base: "12px", md: "20px", lg: "25px" },
  textAlign: "justify",
};

export default ElivateWellness;
