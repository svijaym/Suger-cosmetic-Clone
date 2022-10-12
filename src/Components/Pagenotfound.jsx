import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Pagenotfound = () => {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  return (
    <div>
      <Heading>No such page exist</Heading>
      <img
        src="https://c8.alamy.com/comp/2D9R7T6/error-404-page-not-found-vector-illustration-for-web-design-2D9R7T6.jpg"
        alt=""
      />
      <Button p={4} onClick={handleHome} colorScheme="orange">
        Return to home{" "}
      </Button>
    </div>
  );
};

export default Pagenotfound;
