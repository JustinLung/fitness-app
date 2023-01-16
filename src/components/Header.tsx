import {
    Flex,
    Heading,
    Avatar,
    Link,
    Box
} from "@chakra-ui/react";
import NextLink from 'next/link'
import BarbellIcon from "./icons/BarbellIcon";
import { theme } from '../styles/theme'

interface headerProps {
    headerTitle: string;
    avatarImage: string;
}

export default function Header({ headerTitle, avatarImage }: headerProps) {
    return (
        <Flex
            as="header"
            alignItems="center"
            py={3}
            mb={5}
            gap={2}
            borderBottom="2px solid"
            borderColor={theme.colors.lightgrey}
            maxW="90vw"
            mx="auto"
        >
            <BarbellIcon width={24} height={24} />
            <Heading as="h1" size="md" fontWeight={500}>
                {headerTitle}
            </Heading>
            <Flex alignItems="center" ml="auto">
                <Link as={NextLink} href="/profile">
                    <Avatar src={avatarImage} size="sm" />
                </Link>
            </Flex>
        </Flex>
    );
}
