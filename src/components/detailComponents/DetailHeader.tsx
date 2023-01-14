import { Flex, Link } from '@chakra-ui/react'
import BackIcon from '../icons/BackIcon'
import NextLink from 'next/link'

export default function DetailHeader() {
    return (
        <Flex as="header" py={3} maxW="90vw" mx="auto">
            <Link as={NextLink} href="/">
                <BackIcon width={24} height={24} />
            </Link>
        </Flex>
    )
}