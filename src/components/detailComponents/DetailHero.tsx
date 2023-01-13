import { Image } from "@chakra-ui/react";

interface DetailHeroProps {
    heroImage: string;
}

export default function DetailHero({ heroImage }: DetailHeroProps) {
    return (
        <Image src={heroImage} alt="Hero Image"></ Image>
    )
}