import { Box, Link } from '@chakra-ui/react'
import { ReactNode } from 'react';
import NextLink from 'next/link'

interface NavItemProps {
    href: string;
    navTitle: string,
    children: ReactNode,
}

export default function NavItem({ href, navTitle, children }: NavItemProps) {
    return (
        <Link
            _hover={{ textDecor: "none" }}
            _after={{
                content: `'${navTitle}'`,
                fontSize: ".8rem"
            }}
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            as={NextLink}
            href={href}
            aria-label={navTitle}
        >
            <Box as="figure">
                {children}
            </Box>
        </Link>
    )
}