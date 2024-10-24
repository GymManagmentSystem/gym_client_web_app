import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { PiList } from "react-icons/pi";

const LoginDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg="transparent"
        _hover={{ bg: "transparent" }}
      >
        <PiList size="24px" />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxWidth={["75%", "40%"]}>
          <DrawerBody sx={{ bg: "#fff" }}>
            <Stack spacing={10}>
              <Box sx={{ position: "relative" }}>
                <DrawerCloseButton
                  color={"#000"}
                  sx={{
                    border: "2px solid #000",
                    borderRadius: "10px",
                    padding: 4,
                    _hover: {
                      border: "3px solid #F1B900",
                    },
                  }}
                />
              </Box>
              <Text sx={textStyles}>Home</Text>
              <Text sx={textStyles}>About</Text>
              <Text sx={textStyles}>Memberships</Text>
              <Text sx={textStyles}>Gallery</Text>
              <Text sx={textStyles}>Contact</Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const textStyles = {
  fontSize: "15px",
  color: "#454544",
  _hover: {
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default LoginDrawer;
