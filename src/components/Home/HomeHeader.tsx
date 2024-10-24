import { HStack, Image, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import HomeDrawer from "./HomeDrawer";
import { Link, useLocation } from "react-router-dom";

const HomeHeader = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const location = useLocation();

  const getFocusStyles = (path: any) => {
    return location.pathname === path ? focusStyles : {};
  };

  return (
    <Box bg="#F1B900" width="100%">
      {isMobile ? (
        <HStack justifyContent="space-between" paddingX={5} height="100px">
          <Image {...isMobileLogo} />
          <HomeDrawer />
        </HStack>
      ) : (
        <HStack {...HstackStyles}>
          <Image {...logo} />
        
          <HStack spacing={10}>
            <Link to="/home">
              <Text sx={{ ...textStyles, ...getFocusStyles("/home") }}>
                Home
              </Text>
            </Link>

            <Link to="/exercises">
              <Text sx={{ ...textStyles, ...getFocusStyles("/exercises") }}>
                Exercises
              </Text>
            </Link>
            <Link to="/schedule">
              <Text sx={{ ...textStyles, ...getFocusStyles("/schedule") }}>
                Schedule
              </Text>
            </Link>
            <Link to="/payment">
              <Text sx={{ ...textStyles, ...getFocusStyles("/payment") }}>
                Payment
              </Text>
            </Link>
            <Link to="/announcements">
              <Text sx={{ ...textStyles, ...getFocusStyles("/announcements") }}>
                Announcements
              </Text>
            </Link>
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
};

const focusStyles = {
  color: "#000",
  bg: "#fff",
  width: "auto",
  height: "auto",
  px: 5,
  py: 1,
  borderRadius: "15px",
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

export default HomeHeader;
