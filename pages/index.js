import { Flex, Text } from "@chakra-ui/react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Shipped from "../components/Shipped";
import Ongoing from "../components/Ongoing";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Flex
        //display={{ base: "none", lg: "flex" }}

        fontFamily={"Silkscreen, cursive"}
        height={"3320px"}
        background={"#0B0B0B"}
        flexDir={"column"}
        margin={"0"}
        padding={"0"}
      >
        <Nav />

        <Hero />

        <Shipped />

        <Flex
          height={"1684px"}
          background={"black"}
          paddingTop={"114px"}
          flexDir={"column"}
          align={"center"}
        >
          <Ongoing />

          <Faq />

          <Footer />
        </Flex>
      </Flex>
      {/* <Flex
        fontFamily={"Silkscreen, cursive"}
        height={"100vh"}
        background={"black"}
        display={{ base: "flex", lg: "none" }}
        align={"center"}
        justify={"center"}
      >
        <Text
          fontWeight={"700"}
          fontSize={"20px"}
          color={"rgba(236, 255, 16, 1)"}
        >
          coming soon on mobile
        </Text>
      </Flex> */}
    </>
  );
}
