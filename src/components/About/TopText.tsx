import { Box, Text } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import { motion } from "framer-motion";
import useAnimatedInView from "../../hooks/useAnimatedInView";

const MotionText = motion.create(Text);

const TopText = () => {
  const { ref: titleRef, isInView: isTitleInView } = useAnimatedInView();
  const { ref: subtext1Ref, isInView: isSubtext1InView } = useAnimatedInView();
  const { ref: subtext2Ref, isInView: isSubtext2InView } = useAnimatedInView();
  const { ref: subtext3Ref, isInView: isSubtext3InView } = useAnimatedInView();

  return (
    <Box pl={10} pr={10}>
      <MotionText
        ref={titleRef}
        sx={titleText}
        initial={{ opacity: 0, x: -50 }}
        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to MotionZone
      </MotionText>
      <MotionText
        ref={subtext1Ref}
        sx={subText}
        initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
        animate={
          isSubtext1InView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        } // Gradually becomes visible and normal size
        transition={{ duration: 3, ease: "easeOut" }}
      >
        At Motion Zone, we are dedicated to helping you achieve your fitness
        goals in a supportive and motivating environment. Founded in 2018 with
        the vision of promoting health, wellness, and a balanced lifestyle, our
        gym offers the perfect blend of cutting-edge facilities, expert
        guidance, and a vibrant fitness community.
      </MotionText>
      <HorizontalBar />

      <MotionText
        ref={titleRef}
        sx={titleText}
        initial={{ opacity: 0, x: -50 }}
        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Mission
      </MotionText>
      <MotionText
        ref={subtext2Ref}
        sx={subText}
        initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
        animate={
          isSubtext2InView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        } // Gradually becomes visible and normal size
        transition={{ duration: 3, ease: "easeOut" }}
      >
        Our mission is to empower individuals of all fitness levels to take
        control of their health and well-being. We believe in creating a
        welcoming space where everyone—from beginners to athletes—can work
        towards becoming their best selves.
      </MotionText>
      <HorizontalBar />

      <MotionText
        ref={titleRef}
        sx={titleText}
        initial={{ opacity: 0, x: -50 }}
        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Expert Trainers
      </MotionText>
      <MotionText
        ref={subtext3Ref}
        sx={subText}
        initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
        animate={
          isSubtext3InView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        } // Gradually becomes visible and normal size
        transition={{ duration: 3, ease: "easeOut" }}
      >
        Our team of certified personal trainers is here to guide and motivate
        you every step of the way. Whether you're aiming to build strength,
        improve endurance, or enhance flexibility, our trainers will craft
        personalized programs tailored to your needs.
      </MotionText>
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
  textAlign: { base: "justify", md: "center" },
};
export default TopText;
