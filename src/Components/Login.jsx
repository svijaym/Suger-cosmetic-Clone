import React from "react";
import { CgArrowLeft } from "react-icons/cg";
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Heading,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const otp = Math.floor(Math.random() * 10000) + 1;
  const navigate = useNavigate();
  function handleLogin1() {
    alert(`Collect your otp ${otp}`);
    navigate("/loginb");
  }
  function handleBackh() {
    navigate("/");
  }
  return (
    <div>
      <Banner />
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
          <CgArrowLeft onClick={handleBackh} />
          <div
            style={{
              width: "80%",
              textAlign: "center",
              margin: "auto",
              marginLeft: "100px",
            }}
          >
            <div
              style={{
                width: "50%",
                margin: "auto",
                textAlign: "center",
                margin: "auto",
                marginLeft: "200px",
              }}
            >
              <img
                src="https://media.sugarcosmetics.com/upload/Hi!.png"
                alt="mid"
              />
              <Heading as="h4" size="md">
                Login/Sign Up Using Phone
              </Heading>
              <br />
              <label>Enter mobile number</label>
              <br />
              <InputGroup border="1px solid grey" borderRadius="10px">
                <InputLeftAddon children="+91" />
                <Input type="tel" />
              </InputGroup>
            </div>
            <br />
            <Text>
              Registering for this site allows you to access your order status
              and history. Just fill in the above fields, and we'll get a new
              account set up for you in no time. We will only ask you for
              information necessary to make the purchase process faster and
              easier.
            </Text>
            <br />
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "10px",
                borderRadius: "10px",
              }}
              onClick={handleLogin1}
            >
              SEND ME OTP
            </button>
            <br />
            <br />
            <hr />
            <Checkbox size="sm" defaultChecked>
              Get important updates on Whatsapp{" "}
              <span style={{ color: "#fb3679" }}>Terms and Conditions</span>
            </Checkbox>
            <br />
            <br />
            <Flex justifyContent="end">
              <Text>
                Need Help? <span style={{ color: "#fb3679" }}>Contact Us</span>
              </Text>
            </Flex>
            <hr />
            <hr />
            <Text>
              By Signing up or logging in, you agree to our{" "}
              <span style={{ color: "#fb3679" }}>Terms and Conditions</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
