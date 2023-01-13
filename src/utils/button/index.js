/* eslint-disable react/prop-types */
import { Button, Box } from "@chakra-ui/react";

const ButtonController = ({ validColor, color, props, disabled }) => {
  return (
    <Box>
      <Button
        variant={"solid"}
        color={color}
        backgroundColor={validColor ? "#f85964" : "#fffff"}
        size={"sm"}
        mr={4}
        isDisabled={disabled}
      >
        {props}
      </Button>
    </Box>
  );
};

export default ButtonController;
