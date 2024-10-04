import { Grid, GridItem, Image } from "@chakra-ui/react";
import HomeHeader from "../components/HomeHeader";
import HomeImage from "../assets/home.png"
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
    
      <Grid
        templateAreas={{
          base:`"header "main" "footer"`,
          lg:`"header" "main" "footer"`
        }}
        gridTemplateRows={"100px 1fr 500px"}
        gridTemplateColumns={"1fr"}
        height={'100vh'}
      >
        
        <GridItem
          pl="2"
          bg="#F1B900"
          area={"header"}
          position="fixed"
          top="0"
          left="0"
          width="100%"
          zIndex="10"
        >
          <HomeHeader/>
        </GridItem>
       
        <GridItem
          pl="2"
          area={"main"}
          position={"fixed"}
          left="0"
          width="100%"
          padding={"0"}
          paddingTop={'100px'}
        
        >
          <Image src={HomeImage} width={'100%'} height={'100vh'} objectFit={"cover"}/>
         
        </GridItem>

        <GridItem    pl="2"
          area={"footer"}
          position={"fixed"}
          left="0"
          width="100%"
          padding={"0"}
          paddingTop={'100px'}>
            <Footer/>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;