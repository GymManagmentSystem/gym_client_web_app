import { Box, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";

const OpenHours = () => {
  return (
    <Box>
      <Text sx={titleText}>Convenient Location & Hours</Text>
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
          <UnorderedList sx={listItem} styleType={"none"}>
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
          <UnorderedList sx={listItem} lineHeight={"70px"}>
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
