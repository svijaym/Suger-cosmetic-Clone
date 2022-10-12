import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";
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
const Makeup = () => {
  const [data, setdata] = useState([]);
  const [stext, setStext] = useState("Relevence");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  useEffect(() => {
    setLoading(true);
    getdata()
      .then((res) => {
        setdata(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handlesort = () => {
    if (stext === "High To Low") {
      data.sort((a, b) => b.cost_for_two - a.cost_for_two);
      setdata([...data]);
    } else if (stext === "Low To High") {
      data.sort((a, b) => a.cost_for_two - b.cost_for_two);
      setdata([...data]);
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "auto",
          // backgroungImage: `url(${blr})`,
          // filter: "blur(8px",
        }}
      >
        <Navbar />
        <img
          style={{ width: "100%", height: "300px" }}
          src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"
          alt="mbnr"
        />
      </div>
      <div style={{ display: "flex", gap: "3rem" }}>
        <VStack textAlign="left">
          <Box h="40px" bg="white" w="150pxpx" display="flex" gap="2rem">
            <label>Sort By:</label>
            <select
              onChange={(e) => setStext(e.target.value)}
              onClick={handlesort}
            >
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
          {loading && (
            <Stack w="800px">
              <Heading>......Loading</Heading>
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
            </Stack>
          )}
          <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10}>
            {data?.map((it) => (
              <ProductCard
                id={it.id}
                avt={it.avtr}
                name={it.name}
                price={it.price}
                rating={it.rating}
              />
            ))}
          </SimpleGrid>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Makeup;
