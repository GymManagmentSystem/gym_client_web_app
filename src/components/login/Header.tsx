import { HStack, Image, Box, useBreakpointValue } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import LoginDrawer from "./LoginDrawer";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

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
        </HStack>
      )}
    </Box>
  );
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

export default Header;
