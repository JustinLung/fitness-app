import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header headerTitle="Welcome, Justin!" />
            <Box as="main" mb="5rem">
                {children}
            </Box>
            <Navigation />
        </>
    );
}
