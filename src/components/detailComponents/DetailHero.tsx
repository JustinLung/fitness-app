import { Image, Box } from "@chakra-ui/react";

interface DetailHeroProps {
    heroImage: string;
}

export default function DetailHero({ heroImage }: DetailHeroProps) {
    return (
        <Box h="20rem" w="100%">
            <Image src={heroImage} loading="lazy" w="100%" h="100%" objectFit="cover" alt="Hero Image" />
        </Box>
    )
}