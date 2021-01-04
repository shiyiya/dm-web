import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
  Heading,
  useToast,
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import React from 'react'
import Wrapper from '../components/Wrapper'
import {
  MeQuery,
  MeQueryResult,
  useRegisterMutation,
} from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'
import NavBar from '../components/NavBar'
import theme from '../theme'
import { AtSignIcon } from '@chakra-ui/icons'
import withApollo from '../withApollo'

const Register: React.FC<{}> = () => {
  const [register] = useRegisterMutation()
  const router = useRouter()
  const toast = useToast()

  return (
    <>
      <NavBar />
      <Wrapper>
        <Box w={theme.breakpoints.sm} margin="auto" pb={20}>
          <Heading my="20" as="h1" textAlign="center">
            Register <AtSignIcon /> Login
          </Heading>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setErrors, setSubmitting }) => {
              register({
                variables: values,
                update: (store, { data }) => {
                  // store.writeQuery<MeQueryResult>({
                  //   query: CurrentUserDocument,
                  //   data: {
                  //     currentUser: data?.register.user
                  //   },
                  // })
                },
              }).then(({ data }: any) => {
                setSubmitting(false)

                if (values.email.length < 0 || values.email.length > 8) {
                  toast({
                    position: 'top',
                    title: 'username max length 8',
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
                <Field name="email">
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email">Username</FormLabel>
                      <Input
                        {...field}
                        id="email"
                        placeholder="email"
                        minLength={1}
                        maxLength={8}
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <br />

                <Field name="password">
                  {({ field, form }: any) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.email && form.touched.email}
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

                <Box textAlign="right" mt={10}>
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

export default withApollo(Register)
