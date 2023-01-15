import { Flex, Link } from '@chakra-ui/react'
import BackIcon from '../icons/BackIcon'
import NextLink from 'next/link'

interface DetailHeaderProps {
    href: string;
}

export default function DetailHeader({ href }: DetailHeaderProps) {
    return (
        <Flex as="header" py={3} maxW="90vw" mx="auto">
            <Link as={NextLink} href={href}>
                <BackIcon width={24} height={24} />
            </Link>
        </Flex>
    )
}