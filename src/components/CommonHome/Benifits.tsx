import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import b1Image from "../../assets/b1.png";
import b2Image from "../../assets/b2.png";
import b3Image from "../../assets/b3.png";
import HorizontalBar from "../HorizontalBar";
import { motion } from "framer-motion";
import useAnimatedInView from "../../hooks/useAnimatedInView";

const MotionText = motion.create(Text);
const MotionImage = motion.create(Image);

const Benifits = () => {
  const { ref: titleRef, isInView: isTitleInView } = useAnimatedInView();
  const { ref: card1Ref, isInView: isCard1InView } = useAnimatedInView();
  const { ref: card2Ref, isInView: isCard2InView } = useAnimatedInView();
  const { ref: card3Ref, isInView: isCard3InView } = useAnimatedInView();
  const { ref: image1Ref, isInView: isImage1InView } = useAnimatedInView();
  const { ref: image2Ref, isInView: isImage2InView } = useAnimatedInView();
  const { ref: image3Ref, isInView: isImage3InView } = useAnimatedInView();

  return (
    <>
      <MotionText
        ref={titleRef}
        sx={titleText}
        initial={{ opacity: 0, x: -50 }}
        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Unlocking the Benefits of Regular Exercise
      </MotionText>

      {/* Card 1 */}
      <Box bg={"#fff"}>
        <MotionText
          ref={card1Ref}
          sx={cardTittle}
          initial={{ opacity: 0, y: 50 }}
          animate={isCard1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Improving Physical Health & Fitness
        </MotionText>
        <Stack
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justify="space-between"
          align="stretch"
          spacing={{ base: 5, md: 10, lg: 0 }}
          pl={10}
          pr={10}
        >
          <Flex flex={1} justifyContent={"center"}>
            <MotionImage
              ref={image1Ref}
              src={b1Image}
              width={{ base: "100%", lg: "50%" }}
              objectFit="cover"
              borderRadius={20}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isImage1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Flex>
          <Flex flex={1} align={"center"}>
            <MotionText
              ref={card1Ref}
              sx={cardSubText}
              initial={{ opacity: 0, x: 50 }}
              animate={
                isCard1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Improving physical health and fitness involves engaging in regular
              exercise to enhance strength, endurance, and overall well-being.
              It includes activities that boost cardiovascular health, build
              muscle, increase flexibility, and support weight management. A
              consistent fitness routine helps maintain a healthy body, reduces
              the risk of chronic diseases, and contributes to a more energetic
              and balanced lifestyle.
            </MotionText>
          </Flex>
        </Stack>
      </Box>

      {/* Card 2 */}
      <Box bg={"#fff"}>
        <MotionText
          ref={card2Ref}
          sx={cardTittle}
          initial={{ opacity: 0, y: 50 }}
          animate={isCard2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Improving Mental Health
        </MotionText>
        <Stack
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justify="space-between"
          align="stretch"
          spacing={{ base: 5, md: 10, lg: 0 }}
          pl={10}
          pr={10}
        >
          <Flex flex={1} align={"center"}>
            <MotionText
              ref={card2Ref}
              sx={cardSubText}
              initial={{ opacity: 0, x: 50 }}
              animate={
                isCard2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Improving mental health involves engaging in activities that boost
              emotional well-being and reduce stress. Regular exercise,
              mindfulness practices, and social connections can enhance mood,
              decrease anxiety, and foster a positive outlook. Prioritizing
              mental health helps improve overall quality of life and
              resilience.
            </MotionText>
          </Flex>
          <Flex flex={1} justifyContent={"center"}>
            <MotionImage
            ref={image2Ref}
              src={b2Image}
              width={{ base: "100%", lg: "50%" }}
              objectFit="cover"
              borderRadius={20}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isImage2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Flex>
        </Stack>
      </Box>

      {/* Card 3 */}
      <Box bg={"#fff"}>
        <MotionText
          ref={card3Ref}
          sx={cardTittle}
          initial={{ opacity: 0, y: 50 }}
          animate={isCard3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Enhancing Long-Term Health
        </MotionText>
        <Stack
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justify="space-between"
          align="stretch"
          spacing={{ base: 5, md: 10, lg: 0 }}
          pl={10}
          pr={10}
        >
          <Flex flex={1} justifyContent={"center"}>
            <MotionImage
            ref={image3Ref}
              src={b3Image}
              width={{ base: "100%", lg: "50%" }}
              objectFit="cover"
              borderRadius={20}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isImage3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Flex>
          <Flex flex={1} align={"center"}>
            <MotionText
              ref={card3Ref}
              sx={cardSubText}
              initial={{ opacity: 0, x: 50 }}
              animate={
                isCard3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Regular exercise supports long-term health by reducing the risk of
              chronic diseases, improving cardiovascular function, and enhancing
              overall longevity and well-being.
            </MotionText>
          </Flex>
        </Stack>
      </Box>

      <HorizontalBar />
      </>
  );
};

const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "30px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 10,
};
const cardTittle = {
  fontSize: { base: "16px", md: "20px", lg: "28px" },
  fontWeight: "semibold",
  color: "#000",
  textAlign: "center",
  mt: 10,
  mb: 8,
};
const cardSubText = {
  color: "#000",
  fontSize: { base: "12px", md: "20px", lg: "25px" },
  textAlign: "justify",
};
export default Benifits;
