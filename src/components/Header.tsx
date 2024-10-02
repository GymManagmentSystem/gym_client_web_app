import { Button, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Group 1.png";

const Header = () => {
  return (
    <div>
      <HStack>
        <Image src={Logo} padding={5} _hover={{cursor:'pointer'}}/>
        <HStack marginLeft={"180px"} spacing={10}>
          <Text style={{ fontSize: "25px", fontWeight: "semibold" }}  _hover={{color: "#000", cursor:'pointer'}}>Home</Text>
          <Text style={{ fontSize: "25px", fontWeight: "semibold" }} _hover={{color: "#000", cursor:'pointer'}}>
            About
          </Text>
          <Text style={{ fontSize: "25px", fontWeight: "semibold" }} _hover={{color: "#000", cursor:'pointer'}}>
            Memberships
          </Text>
          <Text style={{ fontSize: "25px", fontWeight: "semibold" }} _hover={{color: "#000", cursor:'pointer'}}>
            Gallery
          </Text>
          <Text style={{ fontSize: "25px", fontWeight: "semibold" }} _hover={{color: "#000", cursor:'pointer'}}>
            Contact
          </Text>

          <Button
            height={"44px"}
            width={"150px"}
            bg={"#000"}
            alignSelf={"flex-end"}
            marginLeft={"100px"}
            _hover={{ bg: "#fff", color: "#000" }}
          >
            Sign Up
          </Button>
        </HStack>
      </HStack>
    </div>
  );
};

export default Header;
