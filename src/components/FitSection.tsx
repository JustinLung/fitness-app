import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface fitSectionProps {
    children: ReactNode;
    fitSectionTitle: string;
}

export default function FitSection({
    children,
    fitSectionTitle,
}: fitSectionProps) {
    return (
        <Flex as="section" maxW="90vw" mx="auto" gap="1rem" flexDir="column">
            <Heading size="xl">{fitSectionTitle}</Heading>
            {children}
        </Flex>
    );
}
