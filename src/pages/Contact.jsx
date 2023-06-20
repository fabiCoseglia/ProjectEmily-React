import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import emiliaImg from "../assets/emilia-play-list.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // Puedes utilizar formData para obtener los valores de los campos
    toast({
      title: "Formulario enviado",
      description: "¡Gracias por tu mensaje!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box
      p={4}
      bgImage={`url(${emiliaImg})`}
      bgSize="cover"
      bgPosition="center"
      boxShadow="inset 0 0 0 1000px rgba(0, 0, 0, 0.5)"
    >
      <Container
        border={"1px gray"}
        shadow={"lg"}
        marginY={"8vh"}
        bg={"white"}
        borderRadius={"10px"}
        p="4"
      >
        <Heading as="h2" mb={4} textAlign="center">
          CONTACT / /
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="phone" mb={4}>
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button
            type="submit"
            bg={"black"}
            color={"white"}
            width="100%"
            _hover={{
              bg: "white",
              color: "black",
              border: "1px solid black",
            }}
          >
            Send
          </Button>
        </form>
      </Container>
    </Box>
  );
};
