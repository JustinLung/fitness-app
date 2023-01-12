import { Flex, Image, Link } from '@chakra-ui/react'

export default function DetailHeader() {
    return (
        <Flex as="header" py={3} maxW="90vw" mx="auto">
            <Link href="/">
                <Image src="/assets/icons/back-icon.svg" />
            </Link>
        </Flex>
    )
}