import {
    Flex,
    Heading,
    Avatar,
    Link,
    List,
    ListItem,
    Button,
    Fade,
} from "@chakra-ui/react";
import AddIcon from "./icons/AddIcon";
import NextLink from 'next/link'
import { useState } from "react";
import { theme } from "../styles/theme";

interface headerProps {
    headerTitle: string;
    avatarImage: string;
}

export default function Header({ headerTitle, avatarImage }: headerProps) {
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
            <Heading as="h1" size="md" fontWeight={500}>
                {headerTitle}
            </Heading>
            <Flex alignItems="center">
                <Button onClick={() => setMenu(!menuOpen)} bg="none" display="flex" alignItems="center" justifyContent="center" p={0} m={0} _hover={{ bg: "none" }}>
                    <AddIcon width={24} height={24} />
                </Button>
                {menuOpen ? (
                    <Fade in={menuOpen}>
                        <List
                            backgroundColor={theme.colors.orange}
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
                <Link pl={2} as={NextLink} href="/profile">
                    <Avatar src={avatarImage} size="sm" />
                </Link>
            </Flex>
        </Flex>
    );
}
