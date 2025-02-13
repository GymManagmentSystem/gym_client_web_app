import { Box, Image, Stack, Text } from "@chakra-ui/react";
import fitnessImage from "../../assets/fitnessImage.png";
import HorizontalBar from "../HorizontalBar";

const ElivateWellness = () => {
  return (
    <Box>
      <Text sx={titleText}>Elivate Your Wellness</Text>

      <Box sx={{ background: "#F9F8F4" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={{ base: 5, md: 10, lg: 20 }}
          pl={10}
          pr={10}
        >
          <Text sx={subText} flex={1}>
            At MotionZone, we’re committed to helping you thrive. Fitness is
            more than just a routine—it’s a path to greater well-being,
            confidence, and vitality. Our modern facilities and experienced team
            are here to guide and inspire you, no matter where you’re starting
            from. Together, let’s embrace the path to a healthier, more
            energized you.
          </Text>

          <Image
            src={fitnessImage}
            width={{ base: "90%", md: "50%", lg: "30%" }}
            height="auto"
            objectFit="cover"
          />
        </Stack>
      </Box>
      <HorizontalBar/>
    </Box>
  );
};
const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "30px"},
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
