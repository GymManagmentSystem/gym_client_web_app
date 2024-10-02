import { Grid, GridItem, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import LoginImage from '../assets/istockphoto-1495388784-612x612 1.png'

const Login = () => {
  return (
    <>
      <Grid
        templateAreas={`"header"
                    "main"
                    "footer"`}
        gridTemplateRows={"100px 1fr 30px"}
        gridTemplateColumns={"1fr"}
      >
        <GridItem pl="2" bg="#F1B900" area={"header"}>
          <Header />
        </GridItem>

        <GridItem pl="2" area={"main"}>
          <Image src={LoginImage}/> 
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default Login;
