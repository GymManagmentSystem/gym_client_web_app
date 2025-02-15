import { ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import { motion } from "framer-motion";
import useAnimatedInView from "../../hooks/useAnimatedInView";

const MotionText = motion.create(Text);

const OpenHours = () => {
  const { ref: textRef, isInView: isTextInView } = useAnimatedInView();
  return (
    <>
      <MotionText
        ref={textRef}
        sx={titleText}
        initial={{ opacity: 0, x: -50 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Convenient Location & Hours
      </MotionText>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        spacing={{ md: "10%", lg: "30%" }}
      >
        <Stack
          direction={"column"}
          alignItems={{ base: "center", md: "normal" }}
        >
          <Text sx={locationText}>Location : </Text>
          <UnorderedList
            sx={listItem}
            styleType={"none"}
            lineHeight={{ base: "25px", md: "50px" }}
          >
            <ListItem>MotionZone Fitness Center, </ListItem>
            <ListItem>120/A, Main Road,</ListItem>
            <ListItem>Galle.</ListItem>
          </UnorderedList>
        </Stack>
        <Stack
          direction={"column"}
          alignItems={{ base: "center", md: "normal" }}
        >
          <Text sx={locationText}>Hours : </Text>
          <UnorderedList
            sx={listItem}
            lineHeight={{ base: "25px", md: "70px" }}
          >
            <ListItem>
              Monday to Friday:{" "}
              <Text as={"span"} color={"#F1B900"} fontWeight={"medium"}>
                5:00 AM – 10:00 PM
              </Text>
            </ListItem>
            <ListItem>
              Saturday:{" "}
              <Text as={"span"} color={"#F1B900"} fontWeight={"medium"}>
                7:00 AM – 8:00 PM
              </Text>
            </ListItem>
            <ListItem>
              Sunday:{" "}
              <Text as={"span"} color={"#F1B900"} fontWeight={"medium"}>
                8:00 AM – 6:00 PM
              </Text>
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
      <HorizontalBar />
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
const locationText = {
  color: "#000",
  fontSize: { base: "12px", md: "20px", lg: "25px" },
  fontWeight: "bold",
};
const listItem = {
  color: "#000",
  fontSize: { base: "12px", md: "20px", lg: "25px" },
};
export default OpenHours;
