import { Heading, Flex } from "@chakra-ui/react"

interface mealIdProps {
    mealIdTitle: string;
    
}

export default function MealId() {
    return (
        <Flex as="section" flexDir="column" maxW="90vw" mx="auto">
            <Heading>Detail Meal</Heading>
        </Flex>
    )
}