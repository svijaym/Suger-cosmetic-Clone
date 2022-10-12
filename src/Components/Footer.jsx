import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { TiSocialTumbler } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div>
        <HStack>
          <Text fontSize="lg">READ MORE ABOUT SUGAR COSMETICS</Text>
          <AiOutlineRight />
        </HStack>
        <br />
        <div style={{ lineHeight: "50px" }}>
          <div>
            <Heading>LET’S STAY IN TOUCH</Heading>
          </div>
          <Text>
            Get the latest beauty tips straight to your inbox. Can’t wait to
            connect!
          </Text>
          <Box w="650px" margin="auto">
            <InputGroup border="1px solid black" borderRadius="10px">
              <Input type="email" placeholder="Enter Email" bg="white" />
              <InputRightAddon children="SUBSCRIBE" bg="black" color="white" />
            </InputGroup>
          </Box>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ color: "white", backgroundColor: "black" }}>
          <Flex justify={"center"} mt={-58}>
            <Avatar
              size={"xl"}
              src={
                "https://media.sugarcosmetics.com/upload/SugarMobileIcon2.png"
              }
              alt={"Author"}
            />
          </Flex>
          <Heading as="h4" size="md" color="white">
            SUGAR
          </Heading>
          <br />
          <div
            style={{
              width: "700px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "550px",
            }}
          >
            <div>
              <HStack spacing="20px">
                <BsFacebook />
                <TiSocialTumbler />
                <AiFillYoutube />
                <AiFillTwitterCircle />
                <AiOutlineInstagram />
                <IoMdMail />
                <BsPinterest />
              </HStack>
            </div>
          </div>
          <br />
          <hr />
          <Box p={6}>
            <HStack spacing="100px" marginLeft="250px">
              <Text fontSize="lg" fontWeight="bold">
                Stores
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                Terms & Conditions
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                Returns
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                FAQs
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                About Us
              </Text>
            </HStack>
          </Box>
          <hr />
          <div style={{ margin: "auto" }}>
            <div
              style={{ textAlign: "left", marginLeft: "40px", width: "800px" }}
            >
              <Heading as="h3" size="lg">
                GET IN TOUCH
              </Heading>
            </div>
            <Box p={10}>
              <HStack spacing="70px">
                <div
                  style={{
                    textAlign: "left",
                    lineHeight: "25px",
                    marginTop: "-5px",
                  }}
                >
                  <Text fontSize="lg" fontWeight="bold">
                    Call us at
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="#919696">
                    1800-209-9933
                  </Text>
                  <Text color="#919696">Monday to Friday : 9 AM to 7 PM</Text>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    lineHeight: "25px",
                    marginTop: "-45px",
                  }}
                >
                  <Text fontSize="lg" fontWeight="bold">
                    Support
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="#919696">
                    hello@sugarcosmetics.com
                  </Text>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    lineHeight: "25px",
                    marginTop: "-45px",
                  }}
                >
                  <Text fontSize="lg" fontWeight="bold">
                    Carrers
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="#919696">
                    We're hiring
                  </Text>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    lineHeight: "25px",
                    marginTop: "-45px",
                  }}
                >
                  <Text fontSize="lg" fontWeight="bold">
                    Press & Media
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="#919696">
                    pr@sugarcosmetics.com
                  </Text>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    lineHeight: "25px",
                    marginTop: "-45px",
                  }}
                >
                  <Text fontSize="lg" fontWeight="bold">
                    Influencer Collab
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="#919696">
                    Join Us
                  </Text>
                </div>
              </HStack>
            </Box>
            <hr />
            <Box p={6} marginLeft="400px">
              <HStack spacing="20px">
                <div>
                  <Text fontSize="lg">GET THE NEW SUGAR APP TODAY!</Text>
                  <Text color="#919696">
                    Tap into a better shopping experience.
                  </Text>
                </div>
                <div>
                  <Img
                    width="120px"
                    height="40px"
                    src="https://in.sugarcosmetics.com/playstore.png"
                    alt="gp"
                  />
                </div>
                <div>
                  <Img
                    width="120px"
                    height="40px"
                    src="https://in.sugarcosmetics.com/apple-store.png"
                    alt="ap"
                  />
                </div>
              </HStack>
            </Box>
            <hr />
            <br />
            <Text color="#919696">
              Copyright © 2022 SUGAR Cosmetics. All rights reserved.
            </Text>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
