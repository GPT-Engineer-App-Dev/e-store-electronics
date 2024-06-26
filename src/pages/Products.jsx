import { Box, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

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

const Products = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map((product) => (
          <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <Text fontSize="xl" fontWeight="bold">
              {product.name}
            </Text>
            <Text>{product.price}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;