import { Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import Bestseller from "../Bestseller";
import Explore from "../Explore";
import Gifting from "../Gifting";
import Hotdeal from "../Hotdeal";
import Justin from "../Justin";
import Newly from "../Newly";
import Quickt from "../Quickt";
import Skinb from "../Skinb";
import Slider from "../Slider";
import Streaming from "../Streaming";
import Sugarb from "../Sugarb";
import Supers from "../Supers";
import Toppick from "../Toppick";
import Footer from "./Footer";
import Navbar from "./Navbar";

const bst =
  "https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg";
const supersaver =
  "https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <br />
      <div
        style={{
          backgroundImage: `url(${bst})`,
          width: "100%",
          height: "600px",
        }}
      >
        <br />
        <Heading as="h4" size="md" color="white">
          BESTSELLERS
        </Heading>
        <br />
        <Bestseller />
      </div>
      <div>
        {" "}
        <br />
        <Heading as="h4" size="md">
          HOT DEALS
        </Heading>
        <br />
        <Hotdeal />
      </div>
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          JUST-IN
        </Heading>
        <br />
        <Justin />
      </div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          textAlign: "center",
          marginLeft: "200px",
        }}
      >
        <br />
        <Heading as="h4" size="md" marginLeft="-225px">
          SHUKAR HAI, SUGAR HAI
        </Heading>
        <br />
        <img
          style={{ width: "1000px", borderRadius: "12px" }}
          src="https://d32baadbbpueqt.cloudfront.net/Homepage/a6ab1591-874a-40d4-9851-09498c8122c1.jpg"
          alt="vid"
        />
      </div>
      <div>
        <br />
        <Heading as="h4" size="md">
          TOP PICKS OF THE WEEK
        </Heading>
        <br />
        <Toppick />
      </div>
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          GIFTING
        </Heading>
        <br />
        <Gifting />
      </div>
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          REFER YOUR FRIENDS
        </Heading>
        <br />
        <img
          src="https://d32baadbbpueqt.cloudfront.net/Homepage/c807ee2f-ac79-46a4-ad99-eee353fec1f8.jpg"
          alt="ref"
        />
      </div>
      <br />
      <div
        style={{
          backgroundImage: `url(${supersaver})`,
          width: "100%",
          height: "600px",
        }}
      >
        <br />
        <Heading as="h4" size="md" color="white">
          SUPER SAVERS
        </Heading>
        <br />
        <Supers />
      </div>
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          NEWLY LAUNCHED
        </Heading>
        <br />
        <Newly />
      </div>
      <br />
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          SUGAR STREAMING
        </Heading>
        <br />
        <Streaming />
      </div>
      <br />
      <br />
      <div style={{ width: "90%", margin: "auto" }}>
        <Heading as="h4" size="md">
          THIS OR THAT
        </Heading>
        <br />
        <HStack spacing="25px">
          <Image
            width="550px"
            height="320px"
            borderRadius="20px"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg"
            alt="t1"
          />
          <Image
            width="550px"
            height="320px"
            borderRadius="20px"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/984514b9-81c3-4e2a-922e-7b18f42ef77f.jpg"
            alt="t2"
          />
        </HStack>
      </div>
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          SKINCARE BASICS
        </Heading>
        <br />
        <Skinb />
      </div>
      <br />
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          SUGAR BEAUTY BLOG
        </Heading>
        <br />
        <Sugarb />
      </div>
      <br />
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          QUICK TIPS
        </Heading>
        <br />
        <Quickt />
      </div>
      <br />
      <br />
      <div>
        <br />
        <Heading as="h4" size="md">
          EXPLORE
        </Heading>
        <br />
        <Explore />
      </div>
      <br />
      <hr />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
