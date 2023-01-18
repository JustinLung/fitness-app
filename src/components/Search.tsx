import { InputGroup, InputLeftElement } from "@chakra-ui/react"
import { ReactNode } from "react";
import SearchIcon from "./icons/SearchIcon";

interface SearchInterface {
    children: ReactNode
}

export default function Search({ children }: SearchInterface) {
    return (
        <>
            <InputGroup maxW={{ base: "90vw", md: "50vw" }} mx="auto" my={5}>
                <InputLeftElement h="full" ><SearchIcon width={24} height={25} /></InputLeftElement>
                {children}
            </InputGroup>
        </>
    )
}
