import {
  Image,
  Box,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";

import g1Image from "../../assets/g1.png";
import g2Image from "../../assets/g2.png";
import g3Image from "../../assets/g3.png";
import g4Image from "../../assets/g4.png";
import g5Image from "../../assets/g5.png";
import HorizontalBar from "../HorizontalBar";

const images = [g1Image, g2Image, g3Image, g4Image, g5Image];

const ImageStack = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Box
        position="relative"
        width="100%"
        height={{ lg: "90vh" }}
        overflow="hidden"
        mt={5}
      >
        <Image
          src={images[currentImageIndex]}
          width="100%"
          height="100%"
          objectFit="cover"
          _hover={{ opacity: "0.7", cursor: "pointer" }}
          onClick={onOpen}
        />

        {/* Left Arrow */}
        <Icon
          as={ArrowLeftIcon}
          position="absolute"
          left="3%"
          top="50%"
          onClick={prevImage}
          color="#fff"
          boxSize={{ base: 5, md: 8, lg: 10 }}
          cursor="pointer"
          _hover={{ color: "#F1B900" }}
        />

        {/* Right Arrow */}
        <Icon
          as={ArrowRightIcon}
          position="absolute"
          right="3%"
          top="50%"
          onClick={nextImage}
          color="#fff"
          boxSize={{ base: 5, md: 8, lg: 10 }}
          cursor="pointer"
          _hover={{ color: "#F1B900" }}
        />
      </Box>

      {/* Modal for Image Popup */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="#000">
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            <Image
              src={images[currentImageIndex]}
              maxW="90vw"
              maxH="90vh"
              objectFit="contain"
              onClick={onClose}
              _hover={{ cursor: "pointer", opacity: "0.8" }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <HorizontalBar />
    </>
  );
};

export default ImageStack;
