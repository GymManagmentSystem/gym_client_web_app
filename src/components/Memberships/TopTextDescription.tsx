import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAnimatedInView from "../../hooks/useAnimatedInView";

const MotionText = motion.create(Text);

const TopTextDescription = () => {
  const { ref: titleRef, isInView: isTitleInView } = useAnimatedInView();
  const { ref: subtext1Ref, isInView: isSubtext1InView } = useAnimatedInView();
  return (
    <>
      <MotionText
        ref={titleRef}
        sx={titleText}
        initial={{ opacity: 0, x: -50 }}
        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Membership Plans
      </MotionText>
      <MotionText
        ref={subtext1Ref}
        sx={subText}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isSubtext1InView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        } // Gradually becomes visible and normal size
        transition={{ duration: 3, ease: "easeOut" }}
      >
        At Motion Zone, we offer a variety of flexible membership plans tailored
        to suit your fitness needs and schedule. Whether you're looking for
        full-time access, morning-only hours, or a one-time day pass, we have
        options that cater to both men and women. Explore our membership
        packages and choose the one that best fits your lifestyle.
      </MotionText>
    </>
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
  pl: 10,
  pr: 10,
};
export default TopTextDescription;
