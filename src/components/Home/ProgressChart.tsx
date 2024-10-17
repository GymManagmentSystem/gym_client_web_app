import {
  Box,
  Card,
  CardBody,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import FitnessManImage from "../../assets/young-fitness-man.png";
import DoughnutChart from "./DoughnutChart";
const ProgressChart = () => {
  return (
    <Box bg={"#fff"} pt={4} pb={6} >
      <HorizontalBar />
      <Text sx={titleText}>My Progress</Text>
      <Grid alignItems={"center"} justifyContent={"center"} mt={5}ml={{base:2}}>
        <Card
          direction={{ base: "column",md:'row'}}
          overflow="hidden"
          borderRadius={"35px"}
          bg={"#F2F2F2"}
          width={{base:'auto',md:'auto',lg:800,xl:800}}
        >  
          <Image src={FitnessManImage} width={300} objectFit={"cover"} />
          <Stack>
            <CardBody>
              <Text sx={{ color: "#F1B900",fontSize:{ base: "18px", md: "22px", lg: "30px", xl: "30px" },fontWeight:'semibold'}}>Workouts</Text>
              <DoughnutChart/>
            </CardBody>
          </Stack>
        </Card>
      </Grid>
    </Box>
  );
};

const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "30px", xl: "30px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 5,
};

export default ProgressChart;
