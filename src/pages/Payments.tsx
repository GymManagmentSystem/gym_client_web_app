import { Grid, GridItem, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import HomeHeader from "../components/Home/HomeHeader";
import PaymentHistoryTable from "../components/Payments/PaymentHistoryTable";
import HorizontalBar from "../components/HorizontalBar";
import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const MotionText = motion.create(Text);

const Payments = () => {
  const paymentList = [
    {
      PackageType: "membership",
      PaymentTime: "17:03:43",
      PaymentDate: "2024-12-20",
      PaymentValidity: "Expire",
      ExpireDate: "2024-12-20",
    },
    {
      PackageType: "one month",
      PaymentTime: "17:03:43",
      PaymentDate: "2024-12-20",
      PaymentValidity: "Expire",
      ExpireDate: "2025-01-20",
    },
    {
      PackageType: "three month",
      PaymentTime: "17:03:43",
      PaymentDate: "2025-01-20",
      PaymentValidity: "Valid",
      ExpireDate: "2025-03-20",
    },
  ];

  const { ref: textRef, isInView: isTextInView } = useAnimatedInView();

  return (
    <>
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
          <HomeHeader />
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
          <MotionText
            ref={textRef}
            sx={titleText}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Payments
          </MotionText>
          <Text sx={subText}>Your Payment History</Text>
          <PaymentHistoryTable paymentDetails={paymentList} />
          <HorizontalBar />
        </GridItem>
        <GridItem pl="2" area={"footer"} left="0" width="100%" padding="0">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "30px", xl: "30px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 5,
  mb: 5,
};
const subText = {
  fontSize: { base: "sm", md: "md", lg: "lg" },
  color: "#000",
  fontWeight: "semibold",
  ml: { base: 5, md: 10, lg: 20 },
  mb: 5,
};

export default Payments;
