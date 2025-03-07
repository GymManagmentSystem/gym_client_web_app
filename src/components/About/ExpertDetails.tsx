import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import MaleExpertImage from "../../assets/maleExpert.png";
import FemaleExpertImage from "../../assets/femaleExpert.png";
import HorizontalBar from "../HorizontalBar";
import useGetStaffMembers from "../../hooks/useGetStaffMembers";
import PhoneIcon from '../../assets/phone.png';

const ExpertDetails = () => {
  const{data:staffMembers} = useGetStaffMembers();

  return (
    <>
      <Text sx={subText}>Meet a few of our experts</Text>
      <Stack sx={cardContainer}>
        {staffMembers && staffMembers.length>0 ?
        staffMembers.map((member, index) => (
          <Card sx={cardStyles} key={index}>
            <CardBody sx={cardBody}>
              {member.gender ==="male" ?
              <Image src={MaleExpertImage} borderRadius="lg" objectFit="cover" />
              :
              <Image src={FemaleExpertImage} borderRadius="lg" objectFit="cover" />
              }
              <Stack mt="4" spacing="4" alignItems="center">
                <Heading sx={headingText}>{member.firstName} {member.lastName}</Heading>
                <Text sx={cardText}>{member.position}</Text>
                <Text sx={cardText} flexDirection={'row'} display={'flex'} gap={4}>
                  <Image src={PhoneIcon} w={5} h={5}/> {member.contactNumber}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))
        :null}
        
      </Stack>
      <HorizontalBar />
    </>
  );
};

const cardContainer = {
  flexDirection: { base: "column", md: "row" },
  justifyContent: "center",
  spacing: 4,
  mt: 10,
  mb: 10,
  flexWrap: "wrap",
};

const cardStyles = {
  w: { base: "90%", md: "30%", lg: "25%" },
  alignItems: "center",
  bg: "#fff",
  p: 2,
  ml: { base: 2 },
  borderBottomWidth: 3,
  borderTopWidth: 1,
  borderLeftWidth: 3,
  borderRightWidth: 3,
  borderColor: "#E6E6E5",
  borderRadius: "25px",
};

const cardBody = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 4,
};

const subText = {
  color: "#000",
  fontSize: { base: "14px", md: "20px", lg: "22px" },
  textAlign: "center",
  fontWeight: "bold",
};

const headingText = {
  fontSize: { base: "14px", md: "16px", lg: "22px" },
  fontWeight: "bold",
  textAlign: "center",
  color: "#000",
};

const cardText = {
  textAlign: "center",
  fontSize: { base: "12px", md: "14px", lg: "18px" },
  color: "#000",
};

export default ExpertDetails;
