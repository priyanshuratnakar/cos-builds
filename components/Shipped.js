import React from "react";
import { Flex, Text, Button, Image, Grid } from "@chakra-ui/react";

function Shipped() {
  const shippedProjects = [
    {
      name: "",
      link: "",
      description: "",
    },
  ];
  return (
    <Flex
      flexDir={"column"}
      height={"845px"}
      backgroundImage={"second.png"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      align={"center"}
      
    >
      <Flex maxW={'1200px'} flexDir={"column"}>
        <Flex
          border={"1px solid black"}
          backgroundImage={"btn.svg"}
          background={""}
          color={"black"}
          marginTop={"79px"}
          maxWidth={"367px"}
          height={"68px"}
          backgroundSize={"cover"}
          fontSize={"24px"}
          fontWeight={"700"}
          justify={"center"}
          align={"center"}
        >
          <Text>SHIPPED PROJECTS</Text>
        </Flex>

        <Grid
          gridTemplateColumns={["initial" , "1fr 1fr 1fr"]} m={"20px"}
          flexDir={["column", "row"]}
          marginTop={"69px"}
          gap={"32px"}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"space-between"}
            height={"211px"}
          >
            <Flex gap={"8px"} flexDir={"column"}>
              <Image height={"48px"} width={"48px"} src={"designacad.png"} />
              <Text fontSize={"20px"} fontWeight={"400"} color={"white"}>
                DESIGNACAD
              </Text>
              <Text
                color={"white"}
                opacity={"80%"}
                fontFamily={"IBM Plex Mono, monospace"}
                fontSize={"14px"}
                fontWeight={"bold"}
                lineHeight={"135%"}
              >
                A platform to help you get started in your Product design
                journey for free.
              </Text>
            </Flex>
            <a
              href={"https://www.designacad.xyz/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button
                width="100%"
                marginTop={"38px"}
                background={""}
                border={"1px solid rgba(236, 255, 16, 1)"}
                height={"36px"}
                fontFamily={"IBM Plex Mono, monospace"}
                fontSize={"14px"}
                fontWeight={"bold"}
                color={"rgba(236, 255, 16, 1)"}
                rounded={"0"}
                gap={"12px"}
                _hover={{ background: "rgba(236, 255, 16, 1)", color: "black" }}
                _active={{ background: "" }}
              >
                <Text>View Project</Text>
                <Image src={"up-arrow.svg"} />
              </Button>
            </a>
          </Flex>

          <Flex
            flexDir={"column"}
            justifyContent={"space-between"}
            height={"211px"}
          >
            <Flex gap={"8px"} flexDir={"column"}>
              <Image height={"48px"} width={"48px"} src={"aimint.png"} />
              <Text fontSize={"20px"} fontWeight={"400"} color={"white"}>
                AI MINT
              </Text>
              <Text
                color={"white"}
                opacity={"80%"}
                fontFamily={"IBM Plex Mono, monospace"}
                fontSize={"14px"}
                fontWeight={"bold"}
                lineHeight={"135%"}
              >
                Generative art meets digital wallet
              </Text>
            </Flex>
            <a
              href={"https://aimint.fun/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button
                _active={{ background: "" }}
                background={""}
                width="100%"
                border={"1px solid rgba(236, 255, 16, 1)"}
                height={"36px"}
                fontFamily={"IBM Plex Mono, monospace"}
                fontSize={"14px"}
                fontWeight={"bold"}
                color={"rgba(236, 255, 16, 1)"}
                rounded={"0"}
                gap={"12px"}
                _hover={{ background: "rgba(236, 255, 16, 1)", color: "black" }}
              >
                <Text>View Project</Text>
                <Image src={"up-arrow.svg"} />
              </Button>
            </a>
          </Flex>

          <Flex
            flexDir={"column"}
            justifyContent={"space-between"}
            height={"211px"}
          >
            <Flex gap={"8px"} flexDir={"column"}>
              <Image height={"48px"} width={"48px"} src={"quickplayer.png"} />
              <Text fontSize={"20px"} fontWeight={"400"} color={"white"}>
                QUICKPLAYER
              </Text>
              <Text
                color={"white"}
                opacity={"80%"}
                fontFamily={"IBM Plex Mono, monospace"}
                fontSize={"14px"}
                fontWeight={"bold"}
                lineHeight={"135%"}
              >
                Stop wasting time deciding what to watch while having lunch,
                just click one
              </Text>
            </Flex>
            <a
              href={"https://www.quickplayer.xyz/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button
                _active={{ background: "" }}
                width="100%"
                marginTop={"38px"}
                background={""}
                border={"1px solid rgba(236, 255, 16, 1)"}
                height={"36px"}
                fontFamily={"IBM Plex Mono, monospace"}
                fontSize={"14px"}
                fontWeight={"bold"}
                color={"rgba(236, 255, 16, 1)"}
                rounded={"0"}
                gap={"12px"}
                _hover={{ background: "rgba(236, 255, 16, 1)", color: "black" }}
              >
                <Text>View Project</Text>
                <Image src={"up-arrow.svg"} />
              </Button>
            </a>
          </Flex>
        </Grid>
      </Flex>

      <Flex
        height={"93.78px"}
        marginTop={"174px"}
        backgroundImage={"strip.svg"}
        backgroundSize={"cover"}
        width={"100%"}
      ></Flex>
    </Flex>
  );
}

export default Shipped;
