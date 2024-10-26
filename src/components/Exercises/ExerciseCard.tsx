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
  VStack,
  Box,
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
      height={{ base: "auto", md: "500px" }}
      borderRadius="15px"
      bg="#fff"
      border="1px"
      borderColor="#E6E6E5"
      boxShadow="lg"
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.02)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <VStack height="100%" spacing={0} align="stretch">
        <Box
          flex={{ base: "auto", md: "2" }}
          overflow="hidden"
          width="100%"
          height={{ base: "200px", md: "250px" }}
        >
          <Center height="100%">
            <Image
              src={image}
              height="100%"
              width="100%"
              objectFit="contain"
              borderTopRadius="15px"
            />
          </Center>
        </Box>

        <CardBody flex="1" p={4}>
          <Stack spacing="3">
            <Heading size="md" color="#F1B900" isTruncated>
              {name}
            </Heading>
            <HStack color="#000">
              <Text sx={titleText} flex={1}>
                Exercise Type
              </Text>
              <Text sx={valueText} flex={1}>
                {type}
              </Text>
            </HStack>
            <HStack>
              <Text sx={titleText} flex={1}>
                Target Body Area
              </Text>
              <Text sx={valueText} flex={1}>
                {bodyArea}
              </Text>
            </HStack>
            <HStack>
              <Text sx={titleText} flex={1}>
                Exercise Level
              </Text>
              <Text sx={valueText} flex={1}>
                {exerciseLevel}
              </Text>
            </HStack>
            <HStack>
              <Text sx={titleText} flex={1}>
                Exercise Category
              </Text>
              <Text sx={valueText} flex={1}>
                {category}
              </Text>
            </HStack>
            <HStack>
              <Text sx={titleText} flex={1}>
                Equipment Required
              </Text>
              <Text sx={valueText} flex={1}>
                {equipments}
              </Text>
            </HStack>
          </Stack>
        </CardBody>

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
      </VStack>

      {/* View More Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", md: "sm", lg: "lg" }}
      >
        <ModalOverlay />
        <ModalContent bg="#fff" ml={3} mr={3}>
          <ModalHeader color="#000" fontWeight="bold" fontSize={"md"}>
            {name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontSize={{ base: "12px", md: "14px" }}
              color="#000"
              textAlign="justify"
            >
              {description}
            </Text>
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

const titleText = {
  color: "#000",
  fontWeight: "semibold",
  fontSize: { base: "12px", md: "14px", lg: "16px" },
};
const valueText = {
  color: "#000",
  fontSize: { base: "12px", md: "14px", lg: "16px" },
};

export default ExerciseCard;
