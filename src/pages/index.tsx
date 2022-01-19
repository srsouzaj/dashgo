import { Flex, Button, Stack, useWhyDidYouUpdate } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input'

type SigninFormData = {
  email: string;
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
  password: yup.string().required("Senha Obrigatória"),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SigninFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  const { errors } = formState

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>

          <Input
            name='email'
            type="email"
            label="E-mail"
            error = {errors.email}
            {...register('email')} />
          <Input
            name='password'
            type="password"
            label="Senha"
            error = {errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="teal"
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

      </Flex>

    </Flex>

  )
}
