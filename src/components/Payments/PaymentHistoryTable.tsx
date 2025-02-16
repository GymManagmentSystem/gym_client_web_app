import { Box, HStack, Text, Card, CardBody, Grid } from "@chakra-ui/react";

interface PaymentDetails {
  PackageType: string;
  PaymentTime: string;
  PaymentDate: string;
  PaymentValidity: string;
  ExpireDate: string;
}

interface PaymentDetailsHistory {
  paymentDetails: PaymentDetails[];
}

const PaymentHistoryTable = ({ paymentDetails }: PaymentDetailsHistory) => {
  return (
    <Box sx={mainContainer}>
      {/* for Large Screens*/}
      <HStack sx={largeScreenTitleStack}>
        <Text sx={titleText}>Package Type</Text>
        <Text sx={titleText}>Payment Time</Text>
        <Text sx={titleText}>Payment Date</Text>
        <Text sx={titleText}>Payment Validity</Text>
        <Text sx={titleText}>Expire Date</Text>
      </HStack>
      {paymentDetails.map((payment, index) => (
        <HStack key={index} sx={largeScreenValueStack}>
          <Text sx={valueText}>{payment.PackageType}</Text>
          <Text sx={valueText}>{payment.PaymentTime}</Text>
          <Text sx={valueText}>{payment.PaymentDate}</Text>
          <Text sx={valueText}>{payment.PaymentValidity}</Text>
          <Text sx={valueText}>{payment.ExpireDate}</Text>
        </HStack>
      ))}

      {/* for Small and Medium Screens*/}
      {paymentDetails.map((payment, index) => (
        <Card key={index} sx={smallScreenCard}>
          <CardBody>
            <Grid templateColumns="1fr 1fr" gap={3}>
              <Text sx={titleText}>Package Type</Text>
              <Text sx={valueText} textAlign="left">
                {payment.PackageType}
              </Text>

              <Text sx={titleText}>Payment Time</Text>
              <Text sx={valueText} textAlign="left">
                {payment.PaymentTime}
              </Text>

              <Text sx={titleText}>Payment Date</Text>
              <Text sx={valueText} textAlign="left">
                {payment.PaymentDate}
              </Text>

              <Text sx={titleText}>Payment Validity</Text>
              <Text sx={valueText} textAlign="left">
                {payment.PaymentValidity}
              </Text>

              <Text sx={titleText}>Expire Date</Text>
              <Text sx={valueText} textAlign="left">
                {payment.ExpireDate}
              </Text>
            </Grid>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};
const mainContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxW: "100vw",
  flexDirection: "column",
  px: { base: 2, md: 10, lg: 20 },
};
const titleText = {
  fontSize: { base: "12px", md: "md", lg: "lg" },
  color: "#000",
  fontWeight: "semibold",
};

const valueText = {
  fontSize: { base: "12px", md: "md", lg: "lg" },
  color: "#000",
};
const largeScreenTitleStack = {
  p: 5,
  bg: "#FFDF77",
  borderRadius: "15px",
  w: "100%",
  mb: 3,
  justifyContent: "space-between",
  display: { base: "none", lg: "flex" }, // Hide on small/medium screens
};
const largeScreenValueStack = {
  p: 5,
  borderRadius: "15px",
  bg: "#fff",
  border: "1px",
  borderColor: "#E6E6E5",
  boxShadow: "lg",
  w: "100%",
  mb: 3,
  justifyContent: "space-between",
  display: { base: "none", lg: "flex" },
  _hover: {
    boxShadow: "xl",
    transform: "scale(1.02)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

const smallScreenCard = {
  bg: "#fff",
  border: "1px",
  borderColor: "#E6E6E5",
  boxShadow: "lg",
  borderRadius: "15px",
  w: "100%",
  mb: 3,
  display: { base: "block", lg: "none" }, // Hide on large screens
};
export default PaymentHistoryTable;
