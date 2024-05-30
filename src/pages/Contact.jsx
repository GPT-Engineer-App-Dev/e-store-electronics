import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Contact Us</Heading>
        <Text fontSize="lg">We would love to hear from you! Please reach out to us using the information below:</Text>
        <Box>
          <Text fontWeight="bold">Email:</Text>
          <Text>support@electroshop.com</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Phone:</Text>
          <Text>+1 (555) 123-4567</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Address:</Text>
          <Text>123 ElectroShop St, Tech City, TX 12345</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;