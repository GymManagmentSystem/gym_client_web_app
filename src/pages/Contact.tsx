import { Grid, GridItem } from "@chakra-ui/react";
import CommonHeader from "../components/About/CommonHeader";
import CommonClientFooter from "../components/CommonClientFooter";

const Contact = () => {
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
        <CommonHeader/>
      </GridItem>
      <GridItem
        pl="2"
        area={"main"}
        position={"relative"}
        left="0"
        width="100%"
        padding="0"
        bg="#fff"
      ></GridItem>

      <GridItem pl="2" area={"footer"} left="0" width="100%" padding="0">
        <CommonClientFooter/>
      </GridItem>
    </Grid>
  );
};

export default Contact;
