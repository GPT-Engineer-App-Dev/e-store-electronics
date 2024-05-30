import { Box, Container, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";

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

const Products = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Our Products</Heading>
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

export default Products;