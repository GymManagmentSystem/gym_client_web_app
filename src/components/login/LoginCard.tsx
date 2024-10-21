import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const navigation =useNavigate();

  const handleLogin=()=>{
    navigation("/home")
  }
  return (
    <>
      <div style={cardContainer}>
        <Card
          width={{ base: "46vh", md: "406px", lg: "406px",xl:'486px'}}
          height={{ base: "auto", md: "424px", lg: "424px" }}
          padding={{ base: "20px", md: "0px", lg: "0px" }}
          backgroundColor={"#fff"}
          borderRadius={"30px"}
        >
          <CardBody>
            <Text {...welcomeText}>Welcome</Text>
            <Text {...loginPText}>Login into your account</Text>
            <Stack {...stackStyles}>
              <InputGroup sx={inputBody}>
                <InputLeftElement pointerEvents="none">
                  <Box sx={inputIcon}>
                    <FaRegUser />
                  </Box>
                </InputLeftElement>
                <Input {...inputText} type="text" placeholder="User Name" variant={'unstyled'}/>
              </InputGroup>

              <InputGroup sx={inputBody}>
                <InputLeftElement pointerEvents="none">
                  <Box sx={inputIcon}>
                    <RiLockPasswordLine />
                  </Box>
                </InputLeftElement>
                <Input {...inputText} type="password" placeholder="Password" />
              </InputGroup>
              <Text {...forgotText}>Forgot Password</Text>
              <CardFooter>
                <Button {...loginButton} onClick={handleLogin}>Login</Button>
              </CardFooter>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

const cardContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const welcomeText = {
  fontSize: { base: "24px", md: "32px", lg: "32px" },
  fontWeight: "bold",
  color: "#000",
  alignSelf: "flex-start",
};

const loginPText = {
  color: "#000",
  fontSize: { base: "16px", md: "20px", lg: "20px" },
  alignSelf: "flex-start",
};

const forgotText = {
  color: "#000",
  alignSelf: "flex-end",
  marginRight: 5,
  _hover: { fontWeight: "bold", cursor: "pointer" },
};

const inputBody = {
  width: { base: "40vh", md: "50vh", lg: "50vh"},
  height: "40px",
  backgroundColor: "#FFDB65",
  borderRadius: "30px",
};

const inputIcon = {
  color: "#000",
  _hover: {
    color: "#FFDB65",
    cursor: "pointer",
  },
};

const inputText = {
  variant: "unstyled",
  _placeholder: { color: "#000" },
  color: "#000",
  _hover: {
    borderColor: "#FFDB65",
    backgroundColor: "#fff",
    borderRadius: "30px",
    borderWidth: "2px",
    _placeholder: { color: "#B1B0AD" },
  },
};

const stackStyles = {
  alignItems: "center",
  justifyContent: "center",
  marginTop: { base: 10, md: 10, lg: 10 },
  spacing: 6,
};

const loginButton = {
  width: { base: "40vh", md: "50vh", lg: "50vh"},
  height: "40px",
  bg: "#fff",
  border: "2px solid",
  borderColor: "#FFDB65",
  color: "#FFDB65",
  fontWeight: "semibold",
  borderRadius: "30px",
  fontSize: {base:'20px',md:'28px',lg:'28px'},
  alignItems: "center",
  justifyContent: "center",
  _hover: { color: "#fff", bg: "#FFDB65" },
};

export default LoginCard;
