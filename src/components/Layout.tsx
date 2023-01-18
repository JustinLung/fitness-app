import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header headerTitle="Fitcheck" avatarImage="/assets/images/deadlift-image_1.webp" user="User Profile Image" />
            <Box as="main" mb="5rem">
                {children}
            </Box>
            <Navigation />
        </>
    );
}
