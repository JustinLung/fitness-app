"use client"

import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { ReactNode } from "react";

interface fitSectionProps {
    children: ReactNode;
    fitSectionTitle: string;
    fitSectionDescription: string;
}

export default function FitSection({
    children,
    fitSectionTitle,
    fitSectionDescription
}: fitSectionProps) {
    return (
        <Flex as="section" maxW="90vw" mx="auto" flexDir="column">
            <Heading as="h2" size="lg">{fitSectionTitle}</Heading>
            <Text mb={2}>{fitSectionDescription}</Text>
            <Flex flexDir="column" gap={2}>
                {children}
            </Flex>
        </Flex>
    );
}
