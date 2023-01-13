import { Flex, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function DetailHeader() {
    return (
        <Flex as="header" py={3} maxW="90vw" mx="auto">
            <NextLink href="/">
                <Link >
                    <Image src="/assets/icons/back-icon.svg" alt="Back icon" />
                </Link>
            </NextLink>
        </Flex>
    )
}