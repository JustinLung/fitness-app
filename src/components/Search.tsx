import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { theme } from '../styles/theme'
import SearchIcon from "./icons/SearchIcon";

interface SearchInterface {
    searchPlaceholder: string;
}

export default function Search({ searchPlaceholder }: SearchInterface) {
    return (
        <>
            <InputGroup maxW="90vw" mx="auto" my={5}>
                <InputLeftElement h="full" ><SearchIcon width={24} height={25} /></InputLeftElement>
                <Input type="search" placeholder={searchPlaceholder} _placeholder={{ color: theme.colors.black }} bg={theme.colors.lightgrey} />
            </InputGroup>
        </>
    )
}
