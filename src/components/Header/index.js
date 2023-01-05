/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />

      {/* <Box justify={['flex-end']} backgroundColor={'gray.600'}>Sign In</Box> */}
      <Box display={"flex"} justifyContent={"space-between"} width={"150px"}>
        <Box justify={["flex-end"]} alignItems="end">
          <MenuItem to="/signup" isLast>
            <Link>Sign In</Link>
          </MenuItem>
        </Box>
        <Box>
          <MenuItem>
            <Button size="sm" rounded="md" bg={["#F85964"]} color={["#FFFF"]}>
              Sign up
            </Button>
          </MenuItem>
        </Box>
      </Box>
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest} color={"gray.800"}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Icon
          icon="fa6-brands:product-hunt"
          color="#f85964"
          width={"40"}
          height={"40"}
        />
        <Stack>
          <InputGroup>
            {/* <InputLeftElement pointerEvents={'none'}
              children={<PhoneIcon color='gray.300' />}
            /> */}
            <Input type={"text"} placeholder={"search"} color={"gray.800"} />
          </InputGroup>
        </Stack>
        {dataMenu &&
          dataMenu.map((val) => {
            return <MenuItem to={val.link}>{val.name}</MenuItem>;
          })}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={6}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      borderBottom={"solid 1px #e6e6e6"}
      fontSize={"15px"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Navbar;

const dataMenu = [
  {
    id: 1,
    name: "Project",
    link: "/project",
  },

  {
    id: 2,
    name: "Community",
    link: "/community",
  },

  {
    id: 3,
    name: "Tools",
    link: "/tools",
  },

  {
    id: 4,
    name: "About",
    link: "/about",
  },
];
