import { Input, InputGroup, InputLeftElement, Image } from "@chakra-ui/react"
import { theme } from '../styles/theme'

interface SearchInterface {
    searchPlaceholder: string;
}

export default function Search({ searchPlaceholder }: SearchInterface) {
    return (
        <>
            <InputGroup maxW="90vw" mx="auto" my={5}>
                <InputLeftElement h="full" ><Image src="/assets/icons/search-icon.svg" alt="Search" /></InputLeftElement>
                <Input type="text" placeholder={searchPlaceholder} _placeholder={{ color: theme.colors.black }} bg={theme.colors.lightgrey} />
            </InputGroup>
        </>
    )
}
