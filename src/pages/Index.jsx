import { Box, Button, Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Box align="center">
          <Heading as="h1" size="xl" mb={2}>
            AI Voice Assistant
          </Heading>
          <Text fontSize="lg">Schedule your appointments effortlessly over the phone.</Text>
        </Box>
        <Box align="center">
          <Image src="https://images.unsplash.com/photo-1528310263469-da619c84a9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMHZvaWNlJTIwYXNzaXN0YW50fGVufDB8fHx8MTcxMzg3NzE3Mnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="AI Voice Assistant" boxSize="300px" objectFit="cover" />
        </Box>
        <VStack spacing={4}>
          <Button leftIcon={<FaPhoneAlt />} colorScheme="teal" size="lg">
            Make a Call
          </Button>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" size="lg">
            Schedule Appointment
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
