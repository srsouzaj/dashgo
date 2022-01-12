import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <Flex w='100vw'
      h='100vh'
      align='center'
      justify='center'>

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing='4'>

        <Input name='email' type="email" label="E-mail"/>
        <Input name='password' type="password" label="password"/>


        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size='lg'>
          Entrar
        </Button>

      </Flex>

    </Flex>

  )
}
