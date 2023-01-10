import {
  Box,
  // chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  // VisuallyHidden,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("#ffff")} color={useColorModeValue("#2b2f3c")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        {/* <Logo /> */}
        <Text
          style={{
            fontSize: "13px",
            fontWeight: "120",
            color: " #2b2f3c",
          }}
        >
          © 2022 ProductHunt clone
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
