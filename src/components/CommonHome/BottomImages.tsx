import { Box, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import b4Image from "../../assets/b4.png";
import b5Image from "../../assets/b5.png";
import b6Image from "../../assets/b6.png";
import b7Image from "../../assets/b7.png";
import HorizontalBar from "../HorizontalBar";

const MotionFlex = motion.create(Flex);
const images = [b4Image, b5Image, b6Image, b7Image];

const BottomImages = () => {
  return (
    <Box width="100%" overflow="hidden">
      <MotionFlex
        style={{ display: "flex", gap: "20px", whiteSpace: "nowrap" }}
        animate={{ x: ["100%", "-100%"] }} // Moves from right to left
        transition={{
          ease: "linear",
          duration:12, // Adjust speed
          repeat: Infinity,
        }}
      >
        {images.concat(images).map((src, index) => (
          <Image key={index} src={src} flexShrink={0} maxHeight={{base:'auto',md:'50%'}} objectFit={'cover'}/>
        ))}
      </MotionFlex>
      <HorizontalBar/>
    </Box>
  );
};

export default BottomImages;
