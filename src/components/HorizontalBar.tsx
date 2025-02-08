import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const MotionBox = motion(Box);

const HorizontalBar = () => {
  const { ref: barRef, isInView: isBarInView } = useAnimatedInView();

  return (
    <MotionBox
      ref={barRef}
      width={"auto"}
      height={{ base: 0.5, lg: 1 }}
      bg={"#FFDB65"}
      ml={{ base: 1, md: 2, lg: 4 }}
      mr={{ base: 1, md: 2, lg: 4 }}
      initial={{ width: "0%" }}
      animate={isBarInView ? { width: "100%" } : { width: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default HorizontalBar;
