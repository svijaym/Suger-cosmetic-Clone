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
// import { VscCircleFilled } from "react-icons/vs";a

import { BsHeart } from "react-icons/bs";
export default function Pcard2() {
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
            src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270"
            alt={"Author"}
          />
        </Flex>
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Text>Matte Attack Transferproof Lipstick</Text>
            {/* <VscCircleFilled /> */}
            <Text color={"gray.500"}>{Math.random()} shades</Text>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              ₹ 699
            </Heading>
            <Text color={"gray.500"}>
              <StarIcon />
              4.8
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
