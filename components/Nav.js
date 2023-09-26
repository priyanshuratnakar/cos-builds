import { Flex, Link, Text } from "@chakra-ui/react";

function Nav() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      marginTop={"20px"}
      p={["20px", "0px"]}
    >
      <Text
        marginLeft={["0", "120px"]}
        fontWeight={"700"}
        fontSize={"24px"}
        color={"rgba(236, 255, 16, 1)"}
      >
        COS BUILDS
      </Text>
      <Flex gap="10">
        <Link
          href="https://buy.copperx.dev/payment/payment-link/67290ca6-5f21-4820-800b-7b01844193f7"
          isExternal
          fontWeight={400}
          fontSize="18px"
          color={"rgba(236, 255, 16, 1)"}
        >
          Donate In Crypto
        </Link>
        <Link
          href="https://tally.so/r/3NqvpQ"
          isExternal
          marginRight={["0", "120px"]}
          fontWeight={400}
          fontSize="18px"
          color={"rgba(236, 255, 16, 1)"}
        >
          WANT TO JOIN
        </Link>
      </Flex>
    </Flex>
  );
}

export default Nav;
