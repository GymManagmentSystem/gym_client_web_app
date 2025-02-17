import { HStack, Image, Text, Box, useBreakpointValue, Button } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginDrawer from "../login/LoginDrawer";

const CommonHomeHeader = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const location = useLocation();
  const navigation = useNavigate();


  
  const getFocusStyles = (path: any) => {
    return location.pathname === path ? focusStyles : {};
  };

  const handleLoginButton =()=>{
    navigation("/login");
  }


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
            <Link to="/commonHome" onClick={() => window.scrollTo(0, 0)}>
              <Text sx={{ ...textStyles, ...getFocusStyles("/commonHome") }}>
                Home
              </Text>
            </Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <Text sx={{ ...textStyles, ...getFocusStyles("/about") }}>
                About
              </Text>
            </Link>
            <Link to="/memberships" onClick={() => window.scrollTo(0, 0)}>
              <Text sx={{ ...textStyles, ...getFocusStyles("/memberships") }}>
                Memberships
              </Text>
            </Link>
            <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
              <Text sx={{ ...textStyles, ...getFocusStyles("/gallery") }}>
                Gallery
              </Text>
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Text sx={{ ...textStyles, ...getFocusStyles("/contact") }}>
                Contact
              </Text>
            </Link>
          </HStack>
          <Button {...loginButton} onClick={handleLoginButton}>Login</Button>
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

const loginButton = {
    height: "44px",
    width: "150px",
    bg: "#000",
    color: "#fff",
    borderRadius: "30px",
    _hover: { bg: "#fff", color: "#000", borderRadius: "30px" },
  };
  

export default CommonHomeHeader;
