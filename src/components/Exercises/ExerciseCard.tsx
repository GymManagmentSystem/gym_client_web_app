import {
  Card,
  CardBody,
  Text,
  Button,
  Image,
  CardFooter,
  Heading,
  Stack,
  Center,
} from "@chakra-ui/react";

interface Props {
  image: string;
  name: string;
  description: string;
}

const ExerciseCard = ({ image, name, description }: Props) => {
  return (
    <Card
      maxW="md"
      borderRadius={"15px"}
      bg={"#fff"}
      border={"1px"}
      borderColor={"#E6E6E5"}
      boxShadow={"lg"}
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.02)", // Pop-up
        transition: "transform 0.2s ease, box-shadow 0.2s ease", // Smooth transition
      }}
    >
      <CardBody>
        <Center>
          <Image src={image} />
        </Center>

        <Stack mt="6" spacing="3">
          <Heading size="md" color={'#000'}>{name}</Heading>
          <Text sx={{ color: "#000", textAlign: "justify" }}>
            {description}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button
          variant="solid"
          bg={"#F1B900"}
          _hover={{ bg: "#FFD035", color: "#000" }}
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
