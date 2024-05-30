import { Box, Container, Flex, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Keep track of your health and notifications",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">ElectroShop</Link>
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>Home</Link>
          <Link as={RouterLink} to="/products" p={2} mx={2}>Products</Link>
          <Link as={RouterLink} to="/contact" p={2} mx={2}>Contact Us</Link>
        </Flex>
      </Flex>
      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          {sampleProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} maxW="sm">
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={4}>
                <Heading as="h3" size="md">{product.name}</Heading>
                <Text mt={2}>{product.description}</Text>
                <Text mt={2} fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;