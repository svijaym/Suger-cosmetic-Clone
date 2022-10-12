import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
import { MdOutlineContentCopy } from "react-icons/md";
const Offers = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h2>OFFERS</h2>
        <Flex backgroundColor="#f2f2f2" gap="2rem" margin="auto">
          <div
            style={{
              borderRadius: "15px",
              backgroundColor: "white",
              width: "450px",
              height: "300px",
            }}
          >
            <img
              style={{ width: "350px", height: "230px", borderRadius: "15px" }}
              src="https://d32baadbbpueqt.cloudfront.net/Promotion/4468b37d-adac-4cad-9587-a5f67ba38aa6.jpg"
              alt="of1"
            />
            <div
              style={{
                alignItems: "right",
                justifyContent: "end",
                marginLeft: "200px",
              }}
            >
              <button
                style={{
                  color: "pink",
                  border: "2px dotted pink",
                  borderRadius: "6px",
                }}
              >
                GSW100 <MdOutlineContentCopy />
              </button>
            </div>
          </div>
          <div
            style={{
              borderRadius: "15px",
              backgroundColor: "white",
              width: "450px",
              height: "300px",
            }}
          >
            <img
              style={{ width: "350px", height: "230px", borderRadius: "15px" }}
              src="https://d32baadbbpueqt.cloudfront.net/Promotion/d04c8d0b-d9b8-4074-9024-4ba34fb54a31.jpg"
              alt="of2"
            />
            <div
              style={{
                alignItems: "right",
                justifyContent: "end",
                marginLeft: "200px",
              }}
            >
              <button
                style={{
                  color: "pink",
                  border: "2px dotted pink",
                  borderRadius: "6px",
                }}
              >
                GSW100 <MdOutlineContentCopy />
              </button>
            </div>
          </div>
          <div
            style={{
              borderRadius: "15px",
              backgroundColor: "white",
              width: "450px",
              height: "300px",
            }}
          >
            <img
              style={{ width: "350px", height: "230px", borderRadius: "15px" }}
              src="https://d32baadbbpueqt.cloudfront.net/Promotion/db0c68f4-988b-4d2d-ae17-99f945eacc49.jpg"
              alt="of3"
            />
            <div
              style={{
                alignItems: "right",
                justifyContent: "end",
                marginLeft: "200px",
              }}
            >
              <button
                style={{
                  color: "pink",
                  border: "2px dotted pink",
                  borderRadius: "6px",
                }}
              >
                GSW100 <MdOutlineContentCopy />
              </button>
            </div>
          </div>
        </Flex>
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
