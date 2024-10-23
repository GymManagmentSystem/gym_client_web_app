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
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  username: z
    .string()
    .min(1, { message: "User name field is required" })
    .min(4, { message: "User name must contain at least 4 characters" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "User name must contain only alphanumeric characters",
    }),

  password: z
    .string()
    .min(1, { message: "Password field is required" })
    .min(8, { message: "Password must contain at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
    })
    .regex(/[@$!%*#?&]/, {
      message: "Password must contain at least one special character",
    }),
});

type LoginData = z.infer<typeof schema>;

const LoginCard = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: LoginData) => {
    console.log(data);
    navigate("/home");
  };

  return (
    <Box style={cardContainer}>
      <Card
        width={{ base: "78%", md: "100%" }}
        height={{ base: "auto", md: "auto" }}
        padding={{ base: "20px", md: "0px" }}
        backgroundColor={"#fff"}
        borderRadius={"30px"}
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
                  {...register("username")}
                />
              </InputGroup>
              {errors.username && (
                <Text color="red" fontSize="sm">
                  {errors.username.message}
                </Text>
              )}

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
                  {...register("password")}
                />
              </InputGroup>

              {errors.password && (
                <Text color="red" fontSize="sm">
                  {errors.password.message}
                </Text>
              )}

              <Text {...forgotText}>Forgot Password</Text>
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
  color: "#000",
  alignSelf: "flex-end",
  marginRight: 5,
  _hover: { fontWeight: "bold", cursor: "pointer" },
};

const inputBody = {
  width: { base: "40vh", md: "50vh", lg: "50vh" },
  height: "40px",
  backgroundColor: "#FFDB65",
  borderRadius: "18px",
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
};

const loginButton = {
  width: { base: "40vh", md: "50vh", lg: "50vh" },
  height: "40px",
  bg: "#fff",
  border: "2px solid",
  borderColor: "#FFDB65",
  color: "#FFDB65",
  fontWeight: "semibold",
  borderRadius: "20px",
  fontSize: { base: "20px", md: "28px", lg: "28px" },
  alignItems: "center",
  justifyContent: "center",
  _hover: { color: "#fff", bg: "#FFDB65" },
};

export default LoginCard;
