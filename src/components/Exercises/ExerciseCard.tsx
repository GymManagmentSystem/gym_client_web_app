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
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
  image: string;
  name: string;
  description: string;
  type: string;
  bodyArea: string;
  exerciseLevel: string;
  category: string;
  equipments: string;
}

const ExerciseCard = ({
  image,
  name,
  description,
  type,
  bodyArea,
  exerciseLevel,
  category,
  equipments,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card
      maxW="md"
      borderRadius="15px"
      bg="#fff"
      border="1px"
      borderColor="#E6E6E5"
      boxShadow="lg"
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
          <Heading size="md" color="#000">
            {name}
          </Heading>
          <Text color="#000" textAlign="justify"  fontSize={{base:'12px',md:'md'}}>
            {description}
          </Text>
        </Stack>
        <CardFooter>
          <Button
            variant="solid"
            bg="#F1B900"
            _hover={{ bg: "#FFD035", color: "#000" }}
            onClick={onOpen}
          >
            View More
          </Button>
        </CardFooter>
      </CardBody>

      <Modal isOpen={isOpen} onClose={onClose} size={{base:'xs',md:'sm',lg:'lg'}}>
        <ModalOverlay />
        <ModalContent bg={"#fff"} ml={3} mr={3}>
          <ModalHeader color={"#000"} fontWeight={'bold'}>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="3">
              <HStack color="#000">
                <Text sx={titletext} flex={1}>
                  Exercise Type :
                </Text>
                <Text sx={valueText} flex={1}>
                  {type}
                </Text>
              </HStack>
              <HStack>
                <Text sx={titletext} flex={1}>
                  Target Body Area :
                </Text>
                <Text sx={valueText} flex={1}>
                  {bodyArea}
                </Text>
              </HStack>
              <HStack>
                <Text sx={titletext} flex={1}>
                  Exercise Level :
                </Text>
                <Text sx={valueText} flex={1}>
                  {exerciseLevel}
                </Text>
              </HStack>
              <HStack>
                <Text sx={titletext} flex={1}>
                  Exercise Category :
                </Text>
                <Text sx={valueText} flex={1}>
                  {category}
                </Text>
              </HStack>
              <HStack>
                <Text sx={titletext} flex={1}>
                  Equipment Required :
                </Text>
                <Text sx={valueText} flex={1}>
                  {equipments}
                </Text>
              </HStack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="solid"
              bg="#F1B900"
              _hover={{ bg: "#FFD035", color: "#000" }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

const titletext = {
  color: "#000",
  fontWeight: "semibold",
  fontSize:{base:'12px',md:'md'}
};
const valueText = {
  color: "#000",
  fontSize:{base:'12px',md:'md'}
};

export default ExerciseCard;
