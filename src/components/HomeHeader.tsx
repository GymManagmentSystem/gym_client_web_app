import {
    HStack,
    Image,
    Text,
    Box,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import Logo from "../assets/logo.png";
  import { PiList } from "react-icons/pi";
  
  const HomeHeader = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
  
    return (
      <Box bg="#F1B900" width="100%">
        {isMobile ? (
          <HStack justifyContent="space-between" paddingX={5} height="100px">
            <Image {...isMobileLogo} />
            <PiList {...listIcon} />
          </HStack>
        ) : (
          <HStack {...HstackStyles}>
            <Image {...logo} />
  
            <HStack spacing={10}>
              <Text sx={textStyles}>Home</Text>
              <Text sx={textStyles}>Exercises</Text>
              <Text sx={textStyles}>Schedule</Text>
              <Text sx={textStyles}>Payment</Text>
              <Text sx={textStyles}>Announcements</Text>
            </HStack>
  
          </HStack>
        )}
      </Box>
    );
  };
  
  const textStyles = {
    fontSize: "20px",
    fontWeight: "semibold",
    color: "#fff",
    _hover: {
      color: "#000",
      cursor: "pointer",
    },
    focus:{
      color:'#000',
      bg:'#fff',
      
    }
  };
  
  const isMobileLogo = {
    src: Logo,
    _hover: { cursor: "pointer" },
    width: "150px",
    height: "70px",
  };
  
  const HstackStyles = {
    justifyContent: "space-between",
    alignItems: "center",
    paddingX: 10,
    height: "100px",
    width: "100%",
  };
  
  const logo = {
    src: Logo,
    _hover: { cursor: "pointer" },
    width: "200px",
    height: "80px",
  };
  
  const listIcon = {
    color: "#fff",
    size: "30px",
    cursor: "pointer",
  };
  
  
  export default HomeHeader;
  