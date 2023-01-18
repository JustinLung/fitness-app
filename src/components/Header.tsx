import {
    Flex,
    Heading,
    Avatar,
    Link,
} from "@chakra-ui/react";
import NextLink from 'next/link'
import BarbellIcon from "./icons/BarbellIcon";
import BackIcon from "./icons/BackIcon";
import { useRouter } from "next/router";

interface headerProps {
    headerTitle: string;
    avatarImage: string;
    avatarName: string;
}

export default function Header({ headerTitle, avatarImage, avatarName }: headerProps) {
    const router = useRouter();
    return (
        <Flex
            as="header"
            alignItems="center"
            py={3}
            gap={2}
            borderBottom="2px solid"
            borderColor={"lightgrey"}
            maxW="90vw"
            mx="auto"
        >
            <Link as={NextLink} href="/" mr="auto" opacity={router.pathname == "/"
                ? "0"
                : "1"}>
                <BackIcon width={24} height={24} />
            </Link>
            <BarbellIcon width={24} height={24} />
            <Heading as="h1" size="md" fontWeight={500}>
                {headerTitle}
            </Heading>
            <Flex alignItems="center" ml="auto">
                <Link as={NextLink} href="/profile">
                    <Avatar src={avatarImage} name={avatarName} size="sm" loading="lazy" />
                </Link>
            </Flex>
        </Flex >
    );
}
