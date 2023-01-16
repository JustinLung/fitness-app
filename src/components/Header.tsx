import {
    Flex,
    Heading,
    Avatar,
    Link,
    Button,
} from "@chakra-ui/react";
import NextLink from 'next/link'
import BarbellIcon from "./icons/BarbellIcon";

interface headerProps {
    headerTitle: string;
    avatarImage: string;
}

export default function Header({ headerTitle, avatarImage }: headerProps) {
    return (
        <Flex
            as="header"
            alignItems="center"
            maxW="90vw"
            mx="auto"
            py={5}
            gap={2}
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
