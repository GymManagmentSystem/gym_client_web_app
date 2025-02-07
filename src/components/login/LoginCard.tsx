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
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useUserNameStore from "../../store/useUserNameStore";

interface LoginData {
  userName: string;
  password: string;
}

const LoginCard = () => {
  const navigate = useNavigate();
  const { setName } = useUserNameStore();
  const { register, handleSubmit,formState:{errors},} = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    if(data){
      console.log(data);
      setName(data.userName);
      navigate("/home");
    }
    
  };

  return (
    <Box style={cardContainer}>
      <Card
        width={{ base: "78%", md: "100%" }}
        height={{ base: "auto" }}
        padding={{ base: "20px", md: "0px" }}
        backgroundColor={"#fff"}
        borderRadius={"20px"}
      >
        <CardBody>
          <Text {...welcomeText}>Welcome</Text>
          <Text {...loginPText}>Login into your account</Text>

          <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
            <Stack {...stackStyles}>
              <InputGroup sx={inputBody}>
                <InputLeftElement pointerEvents="none">
                  <Box sx={inputIcon}>
                    <FaRegUser />
                  </Box>
                </InputLeftElement>
                <Input
                  {...inputText}
                  type="text"
                  placeholder="User Name"
                  variant={"unstyled"}
                  {...register("userName",{required:"UserName is required"})}
                />
              </InputGroup>
              {errors.userName && <Text sx={errorText}>{errors.userName.message}</Text>}

              <InputGroup sx={inputBody}>
                <InputLeftElement pointerEvents="none">
                  <Box sx={inputIcon}>
                    <RiLockPasswordLine />
                  </Box>
                </InputLeftElement>
                <Input
                  {...inputText}
                  type="password"
                  placeholder="Password"
                  variant={"unstyled"}
                  {...register("password",{required:"Password is required"})}
                />
              </InputGroup>
              {errors.password && <Text sx={errorText}>{errors.password.message}</Text>}

              <Text {...forgotText}>Forgot Password?</Text>

              <CardFooter>
                <Button {...loginButton} type="submit">
                  Login
                </Button>
              </CardFooter>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Box>
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
  color: "#FFDB65",
  alignSelf: "flex-end",
  fontSize: "sm",
  marginRight: { md: 6, lg: 7 },
  _hover: { fontWeight: "bold", cursor: "pointer" },
};

const inputBody = {
  width: { base: "40vh", md: "50vh", lg: "50vh" },
  height: "40px",
  backgroundColor: "#fff",
  borderRadius: "15px",
  borderColor: "#B1B0AD",
  borderWidth: 1,
  _hover: {
    borderColor: "#FFDB65",
    backgroundColor: "#fff",
    borderRadius: "15px",
    borderWidth: 3,
  },
};

const inputIcon = {
  color: "#B1B0AD",
  _hover: {
    color: "#FFDB65",
    cursor: "pointer",
  },
};

const inputText = {
  variant: "unstyled",
  _placeholder: { color: "#B1B0AD" },
  color: "#B1B0AD",
};

const stackStyles = {
  alignItems: "center",
  justifyContent: "center",
  marginTop: { base: 10 },
};

const loginButton = {
  width: { base: "40vh", md: "50vh", lg: "50vh" },
  height: "40px",
  bg: "#FFDB65",
  border: "2px solid",
  color: "#fff",
  fontWeight: "semibold",
  borderRadius: "15px",
  fontSize: { base: "sm", md: "md", lg: "lg" },
  alignItems: "center",
  justifyContent: "center",
  _hover: { color: "#fff", bg: "#FFD035" },
};

const errorText={
  color:'red',
  fontSize:"sm"
}

export default LoginCard;
