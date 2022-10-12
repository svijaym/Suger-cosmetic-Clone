import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaClipboardList } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGift } from "react-icons/bi";
const Account = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", width: "95%" }}>
        <div style={{ width: "25%" }}>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              alignItems: "center",
            }}
          >
            <img
              src="https://media.sugarcosmetics.com/upload/accountMask.png"
              alt="pr"
            />
            <Heading>User</Heading>
            <Text> User Mobile number</Text>
            <Text> User Email</Text>
          </div>
          <Flex>
            <FaClipboardList />
            <Text>Orders</Text>
            <FiChevronRight />
          </Flex>
          <Flex>
            <GoLocation />
            <Text>Adress</Text>
            <FiChevronRight />
          </Flex>
          <Flex>
            <AiOutlineHeart />
            <Text>Wishlist</Text>
            <FiChevronRight />
          </Flex>
          <Flex>
            <BiGift />
            <Text>Refer & earn</Text>
            <FiChevronRight />
          </Flex>
        </div>
        <div style={{ width: "75%" }}>
          <div>
            <img
              src="https://media.sugarcosmetics.com/upload/ic_empty_order%201.png"
              alt="cart"
            />
            <Text>Order is empty</Text>
            <Text>What! No order yet? Get going already!</Text>
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
