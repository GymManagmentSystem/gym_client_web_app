import { Box, Image, Stack, Text } from "@chakra-ui/react";
import fitnessImage from '../../assets/fitnessImage.png'

const ElivateWellness = () => {
  return (
    <Box>
      <Text>Elivate Your Wellness</Text>
      <Stack 
  direction={{ base: "column", md: "row" }} 
  justify="space-between" 
  align="center" 
  spacing={8}
>
  <Text sx={subText} flex={1}>
    At MotionZone, we’re committed to helping you thrive. Fitness is more
    than just a routine—it’s a path to greater well-being, confidence, and
    vitality. Our modern facilities and experienced team are here to guide
    and inspire you, no matter where you’re starting from. Together, let’s
    embrace the path to a healthier, more energized you.
  </Text>
  
  <Image 
    src={fitnessImage} 
    width={{ base: "100%", md: "50%" }} 
    height="auto" 
    objectFit="cover"
  />
</Stack>

    </Box>
  );
};

const subText = {
    color: "#000",
    fontSize: { base: "12px", md: "20px", lg: "25px" },
    textAlign: "center",
  };
  
export default ElivateWellness;
