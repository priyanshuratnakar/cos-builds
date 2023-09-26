import { Flex, Text, Button, Image, Progress, Grid } from "@chakra-ui/react";

function Ongoing() {
  return (
    <Flex background={"black"} width={"100%"} justify={"center"}>
      <Flex maxWidth="1200px" flexDir={"column"}>
        <Flex gap={"60px"} flexDir={"column"}>
          <Grid
            gridTemplateColumns={["initial", "1fr 1fr 1fr"]}
            m={"20px"}
            flexDir={["column", "row"]}
            gap={"60px"}
          >
            <Flex
              rounded={"4px"}
              padding={"20px"}
              height={"320px"}
              background={"#EA33A7"}
              justify={"center"}
              align={"center"}
            >
              <Flex
                height={"280px"}
                justifyContent={"space-between"}
                flexDir={"column"}
              >
                <Flex
                  height={"200px"}
                  padding={"16px"}
                  background={"#190612"}
                  rounded={"4px"}
                  align={"center"}
                  justify={"center"}
                >
                  <Flex
                    height={"172px"}
                    flexDir={"column"}
                    color={"white"}
                    justifyContent={"space-between"}
                  >
                    <Flex flexDir={"column"}>
                      <Text fontSize={"24px"} fontWeight={"400"}>
                        DECLUTR
                      </Text>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"14px"}
                        fontWeight={"bold"}
                        opacity={"80%"}
                      >
                        {" "}
                        Your one stop solution for everything bookmarks. Declutr
                        lets you save, organize and share your favorite links.{" "}
                      </Text>
                    </Flex>

                    <Flex gap={"4px"} flexDir={"column"}>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"10px"}
                        fontWeight={"bold"}
                      >
                        Progress...
                      </Text>
                      <Progress
                        value={90}
                        colorScheme={"green"}
                        height={"2px"}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <a
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button
                    width={"100%"}
                    height={"36px"}
                    rounded={"2px"}
                    background={"#190612"}
                    boxShadow={" 3px 3px 0px rgba(8, 8, 8, 0.25)"}
                    gap={"12px"}
                    _hover={""}
                    _active={{ boxShadow: "0px 0px 0px rgba(8, 8, 8, 0.25)" }}
                  >
                    <Text
                      fontFamily={"IBM Plex Mono, monospace"}
                      fontSize={"14px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Check Updates
                    </Text>
                    <Image src={"up-arrow-white.svg"} />
                  </Button>
                </a>
              </Flex>
            </Flex>

            <Flex
              rounded={"4px"}
              padding={"20px"}
              height={"320px"}
              background={"#3395EA"}
              justify={"center"}
              align={"center"}
            >
              <Flex
                height={"280px"}
                justifyContent={"space-between"}
                flexDir={"column"}
              >
                <Flex
                  padding={"16px"}
                  height={"200px"}
                  background={"#06101A"}
                  rounded={"4px"}
                  align={"center"}
                  justify={"center"}
                >
                  <Flex
                    height={"172px"}
                    flexDir={"column"}
                    color={"white"}
                    justifyContent={"space-between"}
                  >
                    <Flex flexDir={"column"}>
                      <Text fontSize={"24px"} fontWeight={"400"}>
                        ACTUALWORK
                      </Text>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"14px"}
                        fontWeight={"bold"}
                        opacity={"80%"}
                      >
                        {" "}
                        Document your journey of building a product in public
                        with ease.
                      </Text>
                    </Flex>

                    <Flex gap={"4px"} flexDir={"column"}>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"10px"}
                        fontWeight={"bold"}
                      >
                        Progress...
                      </Text>
                      <Progress
                        value={20}
                        colorScheme={"green"}
                        height={"2px"}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <a
                  href={"https://www.actualwork.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button
                    width={"100%"}
                    height={"36px"}
                    rounded={"2px"}
                    background={"#190612"}
                    boxShadow={" 3px 3px 0px rgba(8, 8, 8, 0.25)"}
                    gap={"12px"}
                    _hover={""}
                    _active={{ boxShadow: "0px 0px 0px rgba(8, 8, 8, 0.25)" }}
                  >
                    <Text
                      fontFamily={"IBM Plex Mono, monospace"}
                      fontSize={"14px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Check Updates
                    </Text>
                    <Image src={"up-arrow-white.svg"} />
                  </Button>
                </a>
              </Flex>
            </Flex>

            <Flex
              rounded={"4px"}
              padding={"20px"}
              height={"320px"}
              background={"#EA9533"}
              justify={"center"}
              align={"center"}
            >
              <Flex
                height={"280px"}
                justifyContent={"space-between"}
                flexDir={"column"}
              >
                <Flex
                  height={"200px"}
                  padding={"16px"}
                  background={"#1A1006"}
                  rounded={"4px"}
                  align={"center"}
                  justify={"center"}
                >
                  <Flex
                    height={"172px"}
                    flexDir={"column"}
                    color={"white"}
                    justifyContent={"space-between"}
                  >
                    <Flex flexDir={"column"}>
                      <Text fontSize={"24px"} fontWeight={"400"}>
                        MEMORIES ON CHAIN
                      </Text>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"14px"}
                        fontWeight={"bold"}
                        opacity={"80%"}
                      >
                        Mint your memories as media on chain forever
                      </Text>
                    </Flex>

                    <Flex gap={"4px"} flexDir={"column"}>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"10px"}
                        fontWeight={"bold"}
                      >
                        Progress...
                      </Text>
                      <Progress
                        value={75}
                        colorScheme={"green"}
                        height={"2px"}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <a
                  href={
                    "https://playful-pocket-ebf.notion.site/Memories-On-Chain-e2a0cf1eed464986832f4909d9005935"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button
                    width={"100%"}
                    height={"36px"}
                    rounded={"2px"}
                    background={"#190612"}
                    boxShadow={" 3px 3px 0px rgba(8, 8, 8, 0.25)"}
                    gap={"12px"}
                    _hover={""}
                    _active={{ boxShadow: "0px 0px 0px rgba(8, 8, 8, 0.25)" }}
                  >
                    <Text
                      fontFamily={"IBM Plex Mono, monospace"}
                      fontSize={"14px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Check Updates
                    </Text>
                    <Image src={"up-arrow-white.svg"} />
                  </Button>
                </a>
              </Flex>
            </Flex>
          </Grid>

          <Grid
            gridTemplateColumns={["initial", "1fr 1fr 1fr"]}
            m={"20px"}
            flexDir={["column", "row"]}
            gap={"60px"}
          >
            <Flex
              rounded={"4px"}
              padding={"20px"}
              height={"320px"}
              background={"#9E33EA"}
              justify={"center"}
              align={"center"}
            >
              <Flex
                height={"280px"}
                justifyContent={"space-between"}
                flexDir={"column"}
              >
                <Flex
                  height={"200px"}
                  padding={"16px"}
                  background={"#11061A"}
                  rounded={"4px"}
                  align={"center"}
                  justify={"center"}
                >
                  <Flex
                    height={"172px"}
                    flexDir={"column"}
                    color={"white"}
                    justifyContent={"space-between"}
                  >
                    <Flex flexDir={"column"}>
                      <Text fontSize={"24px"} fontWeight={"400"}>
                        GRAPEVINE
                      </Text>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"14px"}
                        fontWeight={"bold"}
                        opacity={"80%"}
                      >
                        Drop anonymous review about anyone on twitter.
                      </Text>
                    </Flex>

                    <Flex gap={"4px"} flexDir={"column"}>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"10px"}
                        fontWeight={"bold"}
                      >
                        Progress...
                      </Text>
                      <Progress
                        value={80}
                        colorScheme={"green"}
                        height={"2px"}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <a
                  href={"https://grapevine-lemon.vercel.app/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button
                    width={"100%"}
                    height={"36px"}
                    rounded={"2px"}
                    background={"#190612"}
                    boxShadow={" 3px 3px 0px rgba(8, 8, 8, 0.25)"}
                    gap={"12px"}
                    _hover={""}
                    _active={{ boxShadow: "0px 0px 0px rgba(8, 8, 8, 0.25)" }}
                  >
                    <Text
                      fontFamily={"IBM Plex Mono, monospace"}
                      fontSize={"14px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Check Updates
                    </Text>
                    <Image src={"up-arrow-white.svg"} />
                  </Button>
                </a>
              </Flex>
            </Flex>

            <Flex
              rounded={"4px"}
              padding={"20px"}
              height={"320px"}
              background={"#A7EA33"}
              justify={"center"}
              align={"center"}
            >
              <Flex
                height={"280px"}
                justifyContent={"space-between"}
                flexDir={"column"}
              >
                <Flex
                  height={"200px"}
                  padding={"16px"}
                  background={"#121A06"}
                  rounded={"4px"}
                  align={"center"}
                  justify={"center"}
                >
                  <Flex
                    height={"172px"}
                    flexDir={"column"}
                    color={"white"}
                    justifyContent={"space-between"}
                  >
                    <Flex flexDir={"column"}>
                      <Text fontSize={"24px"} fontWeight={"400"}>
                        FRENSBOOK
                      </Text>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"14px"}
                        fontWeight={"bold"}
                        opacity={"80%"}
                      >
                        A connection building platform for Web3 with scan QR/NFC
                        + Add to notion
                      </Text>
                    </Flex>

                    <Flex gap={"4px"} flexDir={"column"}>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"10px"}
                        fontWeight={"bold"}
                      >
                        Progress...
                      </Text>
                      <Progress
                        value={20}
                        colorScheme={"green"}
                        height={"2px"}
                      />
                    </Flex>
                  </Flex>
                </Flex>

                <a
                  href={
                    "https://playful-pocket-ebf.notion.site/Frensbook-186de046d0bc4e9fa8461e7a6b9fc658"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button
                    width={"100%"}
                    height={"36px"}
                    rounded={"2px"}
                    background={"#190612"}
                    boxShadow={" 3px 3px 0px rgba(8, 8, 8, 0.25)"}
                    gap={"12px"}
                    _hover={""}
                    _active={{ boxShadow: "0px 0px 0px rgba(8, 8, 8, 0.25)" }}
                  >
                    <Text
                      fontFamily={"IBM Plex Mono, monospace"}
                      fontSize={"14px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Check Updates
                    </Text>
                    <Image src={"up-arrow-white.svg"} />
                  </Button>
                </a>
              </Flex>
            </Flex>

            <Flex
              rounded={"4px"}
              padding={"20px"}
              height={["auto", "320px"]}
              background={"#33EADB"}
              justify={"center"}
              align={"center"}
             
            >
              <Flex
                height={["auto", "280px"]}
                justifyContent={"space-between"}
                flexDir={"column"}
                gap={['40px' , '0px']}
              >
                <Flex
                  height={["auto", "200px"]}
                  padding={"16px"}
                  background={"#061A18"}
                  rounded={"4px"}
                  align={"center"}
                  justify={"center"}
                >
                  <Flex
                    height={["auto", "172px"]}
                    flexDir={"column"}
                    color={"white"}
                    justifyContent={"space-between"}
                  >
                    <Flex flexDir={"column"}>
                      <Text fontSize={"24px"} fontWeight={"400"}>
                        LITEBULB
                      </Text>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"14px"}
                        fontWeight={"bold"}
                        opacity={"80%"}
                      >
                        {" "}
                        The ultimate startup launchpad! Share ideas, get
                        feedback, conduct research, network & find co-founders.
                        Ignite your startup dream with us.
                      </Text>
                    </Flex>

                    <Flex gap={"4px"} flexDir={"column"}>
                      <Text
                        marginTop={"8px"}
                        fontFamily={"IBM Plex Mono, monospace"}
                        fontSize={"10px"}
                        fontWeight={"bold"}
                      >
                        Progress...
                      </Text>
                      <Progress
                        value={50}
                        colorScheme={"green"}
                        height={"2px"}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <a
                  href={
                    "https://playful-pocket-ebf.notion.site/Lightbulb-62c57885a3bf40ba9e7be6fbc436308c"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button
                    width={"100%"}
                    height={"36px"}
                    rounded={"2px"}
                    background={"#190612"}
                    boxShadow={" 3px 3px 0px rgba(8, 8, 8, 0.25)"}
                    gap={"12px"}
                    _hover={""}
                    _active={{ boxShadow: "0px 0px 0px rgba(8, 8, 8, 0.25)" }}
                  >
                    <Text
                      fontFamily={"IBM Plex Mono, monospace"}
                      fontSize={"14px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      Check Updates
                    </Text>
                    <Image src={"up-arrow-white.svg"} />
                  </Button>
                </a>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Ongoing;
