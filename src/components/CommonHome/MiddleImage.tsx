import { Box, Image, Text } from "@chakra-ui/react";
import backgroundImage from "../../assets/chome4.png";
import HorizontalBar from "../HorizontalBar";

const MiddleImage = () => {
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
        <Text sx={textStyle}>
          We’re here to guide you, support your fitness journey, and empower you
          with the knowledge and tools to achieve your health and wellness
          goals.
        </Text>
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
