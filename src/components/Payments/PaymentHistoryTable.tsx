import { Box, HStack, Text } from "@chakra-ui/react";

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
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      maxW="100vw"
      flexDirection={"column"}
      px={{ base: 2, md: 10, lg: 20 }}
    >
      <HStack
        p={5}
        bg="#FFDF77"
        borderRadius="15px"
        w="100%"
        mb={3}
        justifyContent="space-between"
      >
        <Text sx={titleText}>Package Type</Text>
        <Text sx={titleText}>Payment Time</Text>
        <Text sx={titleText}>Payment Date</Text>
        <Text sx={titleText}>Payment Validity</Text>
        <Text sx={titleText}>Expire Date</Text>
      </HStack>

      {paymentDetails.map((payment,index) => (
        <HStack
        key={index}
          p={5}
          bg="#F0F0F0"
          borderRadius="15px"
          w="100%"
          mb={3}
          justifyContent="space-between"
        >
          <Text sx={valueText}>{payment.PackageType}</Text>
          <Text sx={valueText}>{payment.PaymentTime}</Text>
          <Text sx={valueText}>{payment.PaymentDate}</Text>
          <Text sx={valueText}>{payment.PaymentValidity}</Text>
          <Text sx={valueText}>{payment.ExpireDate}</Text>
        </HStack>
      ))}
    </Box>
  );
};

const titleText = {
  fontSize: { base: "10px", md: "md", lg: "lg" },
  color: "#000",
  fontWeight: "semibold",
};
const valueText = {
  fontSize: { base: "10px", md: "md", lg: "lg" },
  color: "#000",
};
export default PaymentHistoryTable;
