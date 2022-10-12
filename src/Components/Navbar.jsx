import {
  Box,
  Flex,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightAddon,
  Spacer,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import { GiMeepleCircle } from "react-icons/gi";
import React from "react";
import styles from "./Navbar";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
// style={{ position: "fixed", width: "100%", top: "0", left: "0" }}
//cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Festive-logo_600x_8d987754-bcb3-431e-a6ee-65f454fbd3cf_600x.jpg?v=1617036794
const Navbar = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  function handleLogin() {
    navigate("/login");
  }
  function handleMakeup() {
    navigate("/makeup");
  }
  function handleBrushes() {
    navigate("/brushes");
  }
  function handleSkincare() {
    navigate("/skincare");
  }
  function handleCart() {
    navigate("/cart");
  }
  function handleWish() {
    navigate("/wishlist");
  }
  function handleOffer() {
    navigate("/offers");
  }

  return (
    <div>
      <Banner />
      <div style={{ width: "100%", margin: "auto" }}>
        <HStack width="100%" spacing="24px" bg="black" color="white">
          <div style={{ color: "white", backgroundColor: "black" }}>
            <img
              onClick={handleHome}
              style={{
                width: "150px",
                height: "70px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8PRKRsQW-jgqT2IVemctAcknAka_bPV0dw&usqp=CAU"
              alt="s1"
            />
          </div>
          <Box w="650px">
            <InputGroup>
              <Input
                type="tel"
                placeholder="Try Liquid Lipstick"
                bg="#212121"
              />
              <InputRightAddon children="Search" bg="white" color="black" />
            </InputGroup>
          </Box>
          <Spacer />
          <HStack spacing="10px">
            <Box>
              <FaUserCircle />
            </Box>

            <Box>
              <button onClick={handleLogin}>
                {auth ? "Hi Vijay" : "Login/Register"}
              </button>
            </Box>
          </HStack>

          <Spacer />
          <HStack spacing="12px">
            <MdFavoriteBorder onClick={handleWish} />
            <RiShoppingBagLine onClick={handleCart} />
            <GiMeepleCircle onClick={handleOffer} />
          </HStack>
        </HStack>
      </div>
      <HStack spacing="24px" backgroundColor="#141414" color="white" p="4">
        <div onClick={handleMakeup}>MAKEUP</div>
        <div onClick={handleBrushes}>BRUSHES</div>
        <div onClick={handleSkincare}>SKINCARE</div>
        <div>GIFTING</div>
        <div>BLOG</div>
        <div>OFFERS</div>
        <div>STORES</div>
      </HStack>
    </div>
  );
};

export default Navbar;
