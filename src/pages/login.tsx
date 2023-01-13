import {
    Heading,
    Text,
    Stack,
    InputGroup,
    Input,
    Flex,
    Link,
    Image
} from "@chakra-ui/react";
import NextLink from 'next/link';
import { theme } from "../styles/theme";

export default function Login() {
    return (
        <Flex flexDir="column" maxW="90vw" h="70vh" mx="auto" justifyContent="center" as="section">
            <Heading textAlign="center">Welcome to Fitcheck!</Heading>
            <Text textAlign="center">To improve yourself by sharing!</Text>
            <Stack as="form" spacing={3} mt={6}>
                <InputGroup>
                    <Input
                        type="email"
                        placeholder="Email"
                        _placeholder={{ color: theme.colors.black }}
                        backgroundColor={theme.colors.grey}
                    />
                </InputGroup>
                <InputGroup>
                    <Input
                        type="password"
                        placeholder="Password"
                        _placeholder={{ color: theme.colors.black }}
                        backgroundColor={theme.colors.grey}
                    />
                </InputGroup>
                <InputGroup>
                    <Input
                        type="submit"
                        backgroundColor={theme.colors.black}
                        color={theme.colors.white}
                        value="Login"
                    />
                </InputGroup>
                <NextLink href="/">
                    <Link textAlign="center">Forgot Password?</Link>
                </NextLink> 
                <Text textAlign="center">Don&apos;t have an account? <Link>Register</Link></Text>
            </Stack>
        </Flex >
    );
}
