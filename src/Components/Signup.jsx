import React, { useContext } from "react";
import { CgArrowLeft } from "react-icons/cg";
import gle from "./ctgle.jpeg";
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Heading,
  Checkbox,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const Signup = () => {
  const { auth, toggleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin3() {
    toggleAuth();
    navigate("/");
  }
  function handleBacks() {
    navigate("/loginb");
  }
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "40%" }}>
        <img
          src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
          alt="sgl"
        />
      </div>
      <div
        style={{
          backgroundImage:
            'url("https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png")',
          width: "60%",
        }}
      >
        <CgArrowLeft onClick={handleBacks} />
        <div>
          <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
            <Heading as="h5" size="sm">
              Please fill this form below
            </Heading>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First name" border="2px solid black" />
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last name" border="2px solid grey" />
              <FormLabel>Enter email id</FormLabel>
              <Input placeholder="First name" border="2px solid grey" />
            </FormControl>
          </div>
          <br />
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              padding: "10px",
              borderRadius: "10px",
            }}
            onClick={handleLogin3}
          >
            SUBMIT
          </button>
          <hr />
          <p>or</p>
          <div style={{ marginLeft: "200px" }}>
            <img style={{ borderRadius: "20px" }} src={gle} alt="asc" />
          </div>
          <Flex justifyContent="end">
            <Text>
              Need Help? <span style={{ color: "#fb3679" }}>Contact Us</span>
            </Text>
          </Flex>
          <hr />
          <Text>
            By Signing up or logging in, you agree to our{" "}
            <span style={{ color: "#fb3679" }}>Terms and Conditions</span>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Signup;
