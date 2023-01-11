import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Box as="main" mb="5rem">
                {children}
            </Box>
            <Navigation />
        </>
    );
}
