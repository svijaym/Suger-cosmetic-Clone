import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  VStack,
  Center,
  Image,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { BsHeart } from "react-icons/bs";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
const blr =
  "https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg";
const getdata = () => {
  return fetch(`https://sugarserver.onrender.com/makeup`).then((res) =>
    res.json()
  );
};
const Makeup2 = () => {
  const [data, setdata] = useState([]);
  const { state, dispatch } = useContext(CartContext);
  useEffect(() => {
    getdata()
      .then((res) => {
        setdata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "400px",
          // backgroungImage: `url(${blr})`,
          // filter: "blur(8px",
        }}
      >
        <Navbar />
        <img
          style={{ width: "100%", height: "200px" }}
          src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"
          alt="mbnr"
        />
      </div>
      <div style={{ display: "flex", gap: "3rem" }}>
        <VStack textAlign="left">
          <Box h="40px" bg="white" w="100px">
            <select>
              Sort By:
              <option value="re">Relevence</option>
              <option value="desc">Price:High To Low</option>
              <option value="asc">Price:Low To High</option>
            </select>
          </Box>
          <div>
            <HStack h="40px" bg="white">
              <Heading as="h5" size="sm">
                Product Type
              </Heading>
              <Spacer />
              <FiChevronDown />
            </HStack>
            <HStack h="40px" spacing="80px" bg="white">
              <Heading as="h5" size="sm">
                Feature
              </Heading>
              <Spacer />
              <FiChevronDown />
            </HStack>
            <HStack h="40px" spacing="80px" bg="white">
              <Heading as="h5" size="sm">
                Finish
              </Heading>
              <Spacer />
              <FiChevronDown />
            </HStack>
            <HStack h="40px" spacing="80px" bg="white">
              <Heading as="h5" size="sm">
                Formulation
              </Heading>
              <Spacer />
              <FiChevronDown />
            </HStack>
            <HStack h="40px" spacing="80px" bg="white">
              <Heading as="h5" size="sm">
                Concern
              </Heading>
              <Spacer />
              <FiChevronDown />
            </HStack>
          </div>
        </VStack>
        <div>
          <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10}>
            {data?.map((it) => (
              //   <ProductCard
              //     id={it.id}
              //     avt={it.avtr}
              //     name={it.name}
              //     price={it.price}
              //     rating={it.rating}
              //   />
              <Center py={6}>
                <Box
                  key={it.id}
                  maxW={"300px"}
                  h={450}
                  w={"full"}
                  //   bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  overflow={"hidden"}
                  lineHeight="30px"
                  borderRadius="20px"
                >
                  <Flex justify={"center"}>
                    <Image
                      boxSize="200px"
                      borderRadius="10px"
                      src={it.avt}
                      alt={"Author"}
                    />
                  </Flex>
                  <Box p={6}>
                    <Stack spacing={0} align={"center"} mb={5}>
                      <Text>{it.name}</Text>
                      {/* <VscCircleFilled /> */}
                      <Text color={"gray.500"}>{Math.random()} shades</Text>
                      <Heading
                        fontSize={"2xl"}
                        fontWeight={500}
                        fontFamily={"body"}
                      >
                        ₹{it.price}
                      </Heading>
                      <Text color={"gray.500"}>
                        <StarIcon />
                        {it.rating}
                      </Text>
                      <Flex h="20" alignItems="end" gap="1rem">
                        <Box
                          mt={8}
                          borderRadius="10px"
                          border="1px solid black"
                          p={3}
                        >
                          <BsHeart />
                        </Box>
                        <Button
                          w={"full"}
                          mt={8}
                          //   bg={useColorModeValue("#151f21", "gray.900")}
                          color={"white"}
                          rounded={"md"}
                          _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "lg",
                          }}
                          onCliCk={() => dispatch("addToCart"(it))}
                        >
                          ADD TO CART
                        </Button>
                      </Flex>
                    </Stack>
                  </Box>
                </Box>
              </Center>
            ))}
          </SimpleGrid>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Makeup2;
