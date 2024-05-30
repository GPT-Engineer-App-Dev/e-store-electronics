import { Box, Flex, Link, Spacer, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box bg="brand.800" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          E-Shop
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" px={2}>
            Products
          </Link>
          <Link as={RouterLink} to="/contact" px={2}>
            Contact Us
          </Link>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            width="200px"
            marginRight="2"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;