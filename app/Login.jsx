import { useState } from "react";
import {Center, Box, Heading, VStack, FormControl, Input, Button} from "native-base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './fbConfig'


export default function Login({ setUser }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(response => {
            setUser(response.user)
        })
        .catch(err => alert(err.message))
    }

    return (
        <Center w="100%">
            <Box safeArea px={2} py={8} w="90%" maxW={290} mb={40}>
                <Heading size="lg" fontWeight="600" color="coolGray.50">
                    Welcome
                </Heading>
                <Heading mt={1} color="coolGray.400" fontWeight="medium" size="xs">
                    Sign in to continue...
                </Heading>
                <VStack space={3} mt={5}>
                    <FormControl isRequired>
                        <FormControl.Label color="coolGray.400">Email</FormControl.Label>
                        <Input onChangeText={setEmail} size="lg" color="coolGray.200" placeholder="example@gmail.com" keyboardType="email-address"></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label color="coolGray.400">Passowrd</FormControl.Label>
                        <Input onChange={setPassword} size="lg" color="coolGray.200" type="password"></Input>
                    </FormControl>
                    <Button onPress={handleLogin} mt={3} colorScheme="blue">
                        Sign In
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
  }