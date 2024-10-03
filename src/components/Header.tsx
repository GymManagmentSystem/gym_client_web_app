import {
  Button,
  HStack,
  Image,
  Text,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "../assets/Group 1.png";
import { PiList } from "react-icons/pi";

const Header = () => {
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
            <Text sx={textStyles}>About</Text>
            <Text sx={textStyles}>Memberships</Text>
            <Text sx={textStyles}>Gallery</Text>
            <Text sx={textStyles}>Contact</Text>
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

const signupButton = {
  height: "44px",
  width: "150px",
  bg: "#000",
  color: "#fff",
  borderRadius: "30px",
  _hover: { bg: "#fff", color: "#000", borderRadius: "30px" },
};

export default Header;
