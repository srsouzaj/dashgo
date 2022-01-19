import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";

import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from '../../components/Header';
import Sidebar from "../../components/Sidebar";


type CreateUserFormData = {
  name: string;
  email: string
  password: string;
  password_confirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório"),
  email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
  password: yup.string().required("Senha Obrigatória").min(6, "a senha precisa ter, no mínimo, 6 caracteres"),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], "As senha precisam ser iguais"),

})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as='form'
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >

          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register('name')} />
              <Input
                name="email"
                label="E-mail"
                error={errors.email}
                {...register('email')} />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')} />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar Senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button type='submit' as="a" colorScheme="whiteAlpha"

                  isLoading={formState.isSubmitting}
                >Cancelar</Button>
              </Link>
              <Button colorScheme="teal">Cadastrar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
}