import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import b1Image from "../../assets/b1.png";
import b2Image from "../../assets/b2.png";
import b3Image from "../../assets/b3.png";
import HorizontalBar from "../HorizontalBar";

const Benifits = () => {
  return (
    <Box>
      <Text sx={titleText}>Unlocking the Benifits of Regular Exercise </Text>

      {/* card 1 */}
      <Box bg={"#fff"}>
        <Text sx={cardTittle}>Improving Physical Health & Fitness</Text>
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
            <Image
              src={b1Image}
              width={{ base: "100%", lg: "50%" }}
              objectFit="cover"
              borderRadius={20}
            />
          </Flex>
          <Flex flex={1} align={"center"}>
            <Text sx={cardSubText}>
              Improving physical health and fitness involves engaging in regular
              exercise to enhance strength, endurance, and overall well-being.
              It includes activities that boost cardiovascular health, build
              muscle, increase flexibility, and support weight management. A
              consistent fitness routine helps maintain a healthy body, reduces
              the risk of chronic diseases, and contributes to a more energetic
              and balanced lifestyle.
            </Text>
          </Flex>
        </Stack>
      </Box>

      {/* card 2 */}
      <Box bg={"#fff"}>
        <Text sx={cardTittle}>Improving Mental Health</Text>
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
            <Text sx={cardSubText}>
              Improving mental health involves engaging in activities that boost
              emotional well-being and reduce stress. Regular exercise,
              mindfulness practices, and social connections can enhance mood,
              decrease anxiety, and foster a positive outlook. Prioritizing
              mental health helps improve overall quality of life and
              resilience.
            </Text>
          </Flex>
          <Flex flex={1} justifyContent={"center"}>
            <Image
              src={b2Image}
              width={{ base: "100%", lg: "50%" }}
              objectFit="cover"
              borderRadius={20}
            />
          </Flex>
        </Stack>
      </Box>

      {/* card 3 */}
      <Box bg={"#fff"}>
        <Text sx={cardTittle}>Enhancing Long-Term Health</Text>
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
            <Image
              src={b3Image}
              width={{ base: "100%", lg: "50%" }}
              objectFit="cover"
              borderRadius={20}
            />
          </Flex>
          <Flex flex={1} align={"center"}>
            <Text sx={cardSubText}>
              Regular exercise supports long-term health by reducing the risk of
              chronic diseases, improving cardiovascular function, and enhancing
              overall longevity and well-being.
            </Text>
          </Flex>
        </Stack>
      </Box>

      <HorizontalBar />
    </Box>
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
