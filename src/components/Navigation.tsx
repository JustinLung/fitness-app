import { Container, List, ListItem, Image, Link } from "@chakra-ui/react";

export default function Navigation() {
  return (
    <Container
      as="nav"
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      p="0.7em 0"
      pb="2em"
      borderRadius=".5em"
      backgroundColor="#ffffff"
    >
      <List display="flex" justifyContent="space-around" mx="auto">
        <ListItem>
          <Link href="/">
            <Image src="/assets/icons/home-icon.svg" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/workouts">
            <Image src="/assets/icons/barbell-icon.svg" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/meals">
            <Image src="/assets/icons/apple-icon.svg" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/profile">
            <Image src="/assets/icons/user-icon.svg" />
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}
