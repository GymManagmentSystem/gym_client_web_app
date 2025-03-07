import { Card, CardBody, CardHeader, Stack, Text } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import useGetMembershipPackage from "../../hooks/useGetMembershipPackage";


const PackageCard = () => {
  const { data: packageList } = useGetMembershipPackage();
  return (
    <>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        spacing={5}
        mt={10}
        justifyContent={"center"}
      >
        {packageList && packageList.length > 0
          ? packageList.map((packageDetails, index) => (
              <Card key={index} sx={cardContainer}>
                <CardHeader sx={cardheader} pb={0}>
                  {packageDetails.packageName}
                </CardHeader>
                <CardBody sx={cardText}>
                  <Text>Rs. {packageDetails.packageAmount}</Text>
                  <Text>{packageDetails.packageValidTime} (weeks)</Text>
                  <Text>{packageDetails.packageDescription}</Text>
                </CardBody>
              </Card>
            ))
          : null}
        
      </Stack>
      <HorizontalBar />
    </>
  );
};

const cardContainer = {
  w: { base: "80%", md: "35%", lg: "30%" },
  justifyContent: "center",
  bg: "#fff",
  borderBottomWidth: 3,
  borderTopWidth: 1,
  borderLeftWidth: 3,
  borderRightWidth: 3,
  borderColor: "#E6E6E5",
  borderRadius: "25px",
};

const cardheader = {
  alignSelf: "center",
  color: "#F1B900",
  fontWeight: "semibold",
  fontSize: { base: "14px", md: "20px", lg: "25px" },
};

const cardText = {
  color: "#000",
  fontSize: { base: "12px", md: "16px", lg: "20px" },
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 2,
};

export default PackageCard;
