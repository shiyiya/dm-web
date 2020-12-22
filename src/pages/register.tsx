import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
  Heading,
  useToast,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import React from 'react'
import Wrapper from '../components/Wrapper'
import { useRegisterMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'
import NavBar from '../components/NavBar'
import theme from '../theme'
import { AtSignIcon } from '@chakra-ui/icons'

const Register: React.FC<{}> = () => {
  const [, register] = useRegisterMutation()
  const router = useRouter()
  const toast = useToast()

  return (
    <>
      <NavBar />
      <Wrapper>
        <Box w={theme.breakpoints.sm} margin="auto">
          <Heading my="20" as="h1" textAlign="center">
            Register <AtSignIcon /> Login
          </Heading>

          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setErrors, setSubmitting }) => {
              register(values).then(({ data }) => {
                setSubmitting(false)
                if (values.username.length < 0 || values.username.length > 8) {
                  toast({
                    position: 'top',
                    title: 'username max length 8',
                    status: 'error',
                    duration: 3000,
                  })
                  return
                }
                if (
                  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}/.test(
                    values.password
                  )
                ) {
                  toast({
                    position: 'top',
                    render: () => (
                      <Box color="red" p={3} bg="red.500">
                        <UnorderedList>
                          <ListItem>最少6个字符</ListItem>
                          <ListItem>至少有1个大写字符</ListItem>
                          <ListItem>至少1个小写字符</ListItem>
                          <ListItem>至少1个小写字符</ListItem>
                        </UnorderedList>
                      </Box>
                    ),

                    status: 'error',
                    duration: 3000,
                  })
                  return
                }
                if (data?.register.errors) {
                  setErrors(toErrorMap(data.register.errors))
                } else {
                  router.replace('/')
                }
              })
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field name="username">
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input
                        {...field}
                        id="username"
                        placeholder="username"
                        minLength={1}
                        maxLength={8}
                      />
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <br />

                <Field name="password">
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...field}
                        id="password"
                        placeholder="password"
                        minLength={6}
                        maxLength={12}
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Box textAlign="right" mt={4}>
                  <Button
                    mr={4}
                    isLoading={isSubmitting}
                    type="button"
                    variant="ghost"
                  >
                    Login
                  </Button>

                  <Button isLoading={isSubmitting} type="submit">
                    Register
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Wrapper>
    </>
  )
}

export default Register
