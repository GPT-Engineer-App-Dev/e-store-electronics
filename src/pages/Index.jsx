import { Container, Text, VStack, Box, SimpleGrid, Image } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$799",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
  {
    id: 4,
    name: "Headphones",
    image: "https://via.placeholder.com/150",
    price: "$99",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Welcome to E-Shop
        </Text>
        <Text fontSize="xl" textAlign="center">
          Your one-stop shop for the latest electronics
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={8}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} />
              <Text fontSize="xl" fontWeight="bold" mt={2}>
                {product.name}
              </Text>
              <Text>{product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;