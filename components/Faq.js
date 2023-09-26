import React from "react";
import { Flex, Text, Button, Image, Progress, Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Faq() {
  return (
    <Flex
      p={"20px"}
      pt={"160px"}
      background={"#0B0B0B"}
      flexDir={"column"}
      gap={"40px"}
      width={["100%", "1200px"]}
    >
      <Text fontSize={"32px"} fontWeight={"700"} color={"white"}>
        FAQ<span style={{ fontSize: "20px" }}>s</span>
      </Text>
      <Accordion allowToggle color={"white"}>
        <AccordionItem
          border={"0px"}
          paddingTop={"24px"}
          paddingBottom={"24px"}
        >
          <h2>
            <AccordionButton fontSize={"24px"}>
              <Box as="span" flex="1" textAlign="left">
                Who can join cosparivaar?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            fontFamily={"IBM Plex Mono, monospace"}
            pb={4}
            fontSize={"18px"}
          >
            everyone, designer, developer, marketer, videographer, editor,
            gamer, literally anyone can join.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={"0px"}
          paddingTop={"24px"}
          paddingBottom={"24px"}
        >
          <h2>
            <AccordionButton fontSize={"24px"}>
              <Box as="span" flex="1" textAlign="left">
                How can I join cosparivaar?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            fontFamily={"IBM Plex Mono, monospace"}
            pb={4}
            fontSize={"18px"}
          >
            you can&apos;t , JK simply either contribute in any ongoing projects
            or come up with an idea and let&apos;s build together
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={"0px"}
          paddingTop={"24px"}
          paddingBottom={"24px"}
        >
          <h2>
            <AccordionButton fontSize={"24px"}>
              <Box as="span" flex="1" textAlign="left">
                Where to submit my idea?{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            fontFamily={"IBM Plex Mono, monospace"}
            pb={4}
            fontSize={"18px"}
          >
            just follow this{" "}
            <a
              href={"https://tally.so/r/3NqvpQ"}
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "underline" }}
            >
              link
            </a>{" "}
            and submit your idea
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={"0px"}
          paddingTop={"24px"}
          paddingBottom={"24px"}
        >
          <h2>
            <AccordionButton fontSize={"24px"}>
              <Box as="span" flex="1" textAlign="left">
                Have any doubt?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            fontFamily={"IBM Plex Mono, monospace"}
            pb={4}
            fontSize={"18px"}
          >
            DM on{" "}
            <a
              href={"https://twitter.com/cosparivaar"}
              target={"_blank"}
              style={{ textDecoration: "underline" }}
              rel={"noreferrer"}
            >
              twitter
            </a>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default Faq;
