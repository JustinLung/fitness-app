import {
    Flex,
    Heading,
    Avatar,
    Image,
    Link,
    List,
    ListItem,
    Fade,
} from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "../styles/theme";

interface headerProps {
    headerTitle: string;
}

export default function Header({ headerTitle }: headerProps) {
    const [menuOpen, setMenu] = useState(false);
    return (
        <Flex
            as="header"
            justifyContent="space-between"
            alignItems="center"
            maxW="90vw"
            mx="auto"
            py={5}
        >
            <Heading as="h1" size="md">
                {headerTitle}
            </Heading>
            <Flex gap=".5rem" alignItems="center">
                <Image
                    src="/assets/icons/add-icon.svg"
                    cursor="pointer"
                    onClick={() => setMenu(!menuOpen)}
                />
                {menuOpen ? (
                    <Fade in={menuOpen}>
                        <List
                            backgroundColor={theme.colors.black}
                            color={theme.colors.white}
                            zIndex={99}
                            borderRadius=".2rem"
                            transition="ease-in"
                            position="absolute"
                            left="50%"
                            right="3rem"
                        >
                            <ListItem px={5} py={2} whiteSpace="nowrap">
                                <Link>Add Workout</Link>
                            </ListItem>
                            <ListItem px={5} py={2} borderTop={`1px solid ${theme.colors.white}`}>
                                <Link>Add Meal</Link>
                            </ListItem>
                        </List>
                    </Fade>
                ) : null}
                <Image src="/assets/icons/notification-icon.svg" cursor="pointer" />
                <Link href="/">
                    <Avatar src="https://bit.ly/kent-c-dodds" size="sm" />
                </Link>
            </Flex>
        </Flex>
    );
}
