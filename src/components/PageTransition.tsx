import { Box } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}


export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {children}
        </Box>
    )
}