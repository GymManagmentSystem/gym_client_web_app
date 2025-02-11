import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import CommonHomeHeader from "../components/CommonHome/CommonHomeHeader";
import HomeImage_1 from "../assets/chome1.png";
import HorizontalBar from "../components/HorizontalBar";
import ElivateWellness from "../components/CommonHome/ElivateWellness";

const CommonHome = () => {
  return (
    <Grid
      templateAreas={`"header" "main" "footer"`}
      gridTemplateRows={"100px 1fr"}
      gridTemplateColumns={"1fr"}
      height={"auto"}
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
        <CommonHomeHeader />
      </GridItem>
      <GridItem
        pl="2"
        area={"main"}
        position={"relative"}
        left="0"
        width="100%"
        padding="0"
        bg="#fff"
      >
        <Image
          src={HomeImage_1}
          height={{ base: "30vh", md: "50vh", lg: "80vh" }}
          width={"100%"}
          mb={{ base: 2, md: 3, lg: 5 }}
          objectFit={"cover"}
        />
        <HorizontalBar />
        <Text sx={titleText}>Our Gym is Your Gym</Text>
        <Text sx={subText} mb={{base:2,md:3,lg:5}}>
          This is your space to go stronger, healthier and happier.
        </Text>
        <HorizontalBar />
        <ElivateWellness/>
      </GridItem>

      <GridItem pl="2" area={"footer"} left="0" width="100%" padding="0">
        <Footer />
      </GridItem>
    </Grid>
  );
};

const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "40px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 3,
};

const subText = {
  color: "#000",
  fontWeight: "semibold",
  fontSize: { base: "12px", md: "20px", lg: "25px" },
  textAlign: "center",
};

export default CommonHome;
