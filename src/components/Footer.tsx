import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Logo from "../assets/footerLogo.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box {...fullBox}>
        <HStack justifyContent={"space-between"} flexDirection={ "row" }>
          <Text {...topText}>GET IN TOUCH</Text>
          <Image
            src={Logo}
            width={{ base: "200px", md: "300px", lg: "300px", xl: "400px" }}
            height={{ base: "50px", md: "50px", lg: "60px", xl: "70px" }}
          />
        </HStack>

        <Box
          height={{ base: "auto", md: "350px", lg: "auto" }}
          width={"100%"}
          pt={10}
        >
          <HStack
            justifyContent={"space-between"}
            spacing={6}
            width={"100%"}
            flexDirection={{ base: "column", md: "row" }} 
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <VStack
              flex={1}
              alignItems={"flex-start"} 
              spacing={6}
              width={{ base: "100%", md: "auto" }}
              mb={{ base: 8, md: 0 }}
            >
              <HStack>
                <Box as={MdOutlineLocationOn} {...iconStyles} w={iconsize} h={iconsize} />
                <VStack alignItems={"flex-start"}>
                  <Text {...leftTexts}>MotionZone Fitness Center,</Text>
                  <Text {...leftTexts}>120/A, Main Road, Galle.</Text>
                </VStack>
              </HStack>
              <HStack>
                <Box as={MdOutlineMail} {...iconStyles} w={iconsize} h={iconsize} />
                <Text {...leftTexts}>motionzone@gmail.com</Text>
              </HStack>
              <HStack>
                <Box as={MdOutlinePhoneInTalk} {...iconStyles} w={iconsize} h={iconsize} />
                <Text {...leftTexts}>+94 - 76 123 4567</Text>
              </HStack>
            </VStack>

            <VStack
              flex={1}
              alignItems={{ base: "center", md: "flex-start" }}
              spacing={6}
              width={{ base: "100%", md: "auto" }}
              mb={8}
              ml={{md:'30px',lg:'70px'}}
            >
              <Text {...topbarNames}>Home</Text>
              <Text {...topbarNames}>Exercises</Text>
              <Text {...topbarNames}>Schedule</Text>
              <Text {...topbarNames}>Payment</Text>
              <Text {...topbarNames}>Announcements</Text>
            </VStack>

            <VStack
              flex={1}
              width={{ base: "100%", md: "auto" }}
              alignItems={{ base: "center", md: "flex-start" }} 
              mb={8}
            >
              <Text {...followusText}>FOLLOW US</Text>
              <HStack justifyContent={"space-between"} spacing={8} mt={3} alignItems={'center'}>
                <Box as={RiFacebookCircleLine} {...socialIconBox} w={iconsize} h={iconsize} />
                <Box as={FaInstagram} {...socialIconBox} w={iconsize} h={iconsize} />
                <Box as={FaWhatsapp} {...socialIconBox} w={iconsize} h={iconsize} />
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </Box>

     
      <Box backgroundColor={"#F1B900"} height={"40px"} width="100%" />
    </>
  );
};


const fullBox = {
  backgroundColor: "#000",
  pl: { base: "25px", md: "35px", lg: "45px", xl: "70px" },
  pr: { base: "25px", md: "35px", lg: "45px", xl: "70px" },
  height: { base: "auto", md: "400px", lg: "auto" }, 
  alignItems: "center",
  justifyContent: "center",
};

const topText = {
  fontSize: { base: "12px", md: "25px", lg: "30px" },
  fontWeight: "semibold",
  color: "#fff",
};

const iconStyles = {
  color: "#F1B900",
};

const socialIconBox = {
  cursor: "pointer",
  color: "#F1B900",
  backgroundColor: "transparent",
  _hover: {
    color: "#fff",
  },
};

const iconsize = { base: "20px", md: "25px", lg: "30px" };

const leftTexts = {
  fontSize: { base: "15px", md: "20px", lg: "20px" },
  ml: 30,
};

const topbarNames = {
  color: "#fff",
  fontSize: { base: "20px", md: "22px", lg: "26px" },
  _hover: {
    color: "#F1B900",
    cursor: "pointer",
  },
};

const followusText = {
  color: "#fff",
  fontWeight:'bold',
  fontSize: { base: "20px", md: "22px", lg: "26px" },
};

export default Footer;
