import {
  Button,
  HStack,
  Image,
  Text,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import LoginDrawer from "./LoginDrawer";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
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
          <LoginDrawer />
        </HStack>
      ) : (
        <HStack {...HstackStyles}>
          <Image {...logo} />
          <HStack spacing={10}>
            <Link to="/commonHome">
              <Text sx={{ ...textStyles, ...getFocusStyles("/commonHome") }}>
                Home
              </Text>
            </Link>
            <Link to="/about">
              <Text sx={{ ...textStyles, ...getFocusStyles("/about") }}>
                About
              </Text>
            </Link>
            <Link to="/memberships">
              <Text sx={{ ...textStyles, ...getFocusStyles("/memberships") }}>
                Memberships
              </Text>
            </Link>
            <Link to="/gallery">
              <Text sx={{ ...textStyles, ...getFocusStyles("/gallery") }}>
                Gallery
              </Text>
            </Link>
            <Link to="/contact">
              <Text sx={{ ...textStyles, ...getFocusStyles("/contact") }}>
                Contact
              </Text>
            </Link>
          </HStack>

          <Button {...signupButton}>Sign Up</Button>
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

const signupButton = {
  height: "44px",
  width: "150px",
  bg: "#000",
  color: "#fff",
  borderRadius: "30px",
  _hover: { bg: "#fff", color: "#000", borderRadius: "30px" },
};

export default Header;
