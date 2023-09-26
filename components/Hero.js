import React from "react";
import { Flex, Text, Button, Image, Progress } from "@chakra-ui/react";

function Hero() {
  return (
    <Flex
      marginTop={"20px"}
      height={"740px"}
      backgroundImage={"hero.svg"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      justify={"center"}
      align={"center"}
    >
      <Flex
        margin={"20px"}
        borderRadius={"20px"}
        background={"black"}
        boxShadow={"0px 0px 28px rgba(255, 255, 255, 0.25)"}
        height={["200px", "424px"]}
        width={["100%", "861px"]}
        justify={"center"}
        align={"center"}
      >
        <iframe
          style={{ borderRadius: "20px" }}
          width="100%"
          height={"100%"}
          src="https://www.youtube.com/embed/ZwMqoRS29kA"
          title="Introducing CoS BUILDS"
          frameborder="0"
          allow="acce lerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Flex>
    </Flex>
  );
}

export default Hero;
