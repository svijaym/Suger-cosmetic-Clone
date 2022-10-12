import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  const { onClose } = useDisclosure();
  return (
    <div>
      <Flex color="white" bg="black">
        <Spacer />
        <HStack spacing="500px">
          <Box>Free Illuminating Moisturizer+Pouch on a spend of Rs 799.</Box>
          <Box>
            <CloseButton onClick={onClose} />
          </Box>
        </HStack>
      </Flex>
    </div>
  );
};

export default Banner;
