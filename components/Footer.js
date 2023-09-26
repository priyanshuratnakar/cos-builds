import { Flex, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      alignItems={{ base: "flex-start" }}
      position={["static", "absolute"]}
      background={"#0B0B0B"}
      bottom={"0"}
      p={["20px", "32px 160px"]}
      pt={{ base: "120px" }}
      width={"100%"}
      justifyContent={"space-between"}
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "flex-start", lg: "center" }}
        align={"center"}
        justify={"center"}
        height={["auto", "31px"]}
        gap={"8px"}
      >
        <Text
          fontWeight={"700"}
          fontSize={"24px"}
          color={"rgba(236, 255, 16, 1)"}
        >
          COS BUILDS
        </Text>
        <Text
          color={"white"}
          opacity={"80%"}
          fontFamily={"IBM Plex Mono, monospace"}
          fontSize={"18px"}
        >
          - A part of{" "}
          <a
            href={"https://cosparivaar.xyz"}
            style={{ textDecoration: "underline" }}
          >
            cos parivaar
          </a>
        </Text>
      </Flex>
      <Link
        href="https://twitter.com/cosparivaar"
        isExternal
        color={"white"}
        opacity={"80%"}
        fontFamily={"IBM Plex Mono, monospace"}
        fontSize={"18px"}
      >
        Follow on Twitter
      </Link>
    </Flex>
  );
}

export default Footer;
