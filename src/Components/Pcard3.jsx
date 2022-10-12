import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
// import { VscCircleFilled } from "react-icons/vs";

import { BsHeart } from "react-icons/bs";
export default function Pcard3() {
  return (
    <Center py={6}>
      <Box
        maxW={"300px"}
        h={450}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        overflow={"hidden"}
        lineHeight="30px"
        borderRadius="20px"
      >
        <Flex justify={"center"}>
          <Image
            boxSize="200px"
            borderRadius="10px"
            src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607"
            alt={"Author"}
          />
        </Flex>
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Text>Bling Leader Illuminating Moisturizer</Text>
            {/* <VscCircleFilled /> */}
            <Text color={"gray.500"}>{Math.random()} shades</Text>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              ₹ 799
            </Heading>
            <Text color={"gray.500"}>
              <StarIcon />
              4.2
            </Text>
            <Flex h="20" alignItems="end" gap="1rem">
              <Box mt={8} borderRadius="10px" border="1px solid black" p={3}>
                <BsHeart />
              </Box>
              <Button
                w={"full"}
                mt={8}
                bg={useColorModeValue("#151f21", "gray.900")}
                color={"white"}
                rounded={"md"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                ADD TO CART
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
