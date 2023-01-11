import { Container, List, ListItem, Image, Link } from "@chakra-ui/react";
import { theme } from '../styles/theme'

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
      backgroundColor={theme.colors.white}
    >
      <List display="flex" justifyContent="space-around" mx="auto">
        <ListItem>
          <Link href="/" _after={{ content: '"Home"', fontSize: ".8rem" }} display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Image src="/assets/icons/home-icon.svg" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/workouts" _after={{ content: '"Workouts"', fontSize: ".8rem" }} display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Image src="/assets/icons/barbell-icon.svg" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/meals" _after={{ content: '"Recipes"', fontSize: ".8rem" }} display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Image src="/assets/icons/apple-icon.svg" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/profile" _after={{ content: '"Profile"', fontSize: ".8rem" }} display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Image src="/assets/icons/user-icon.svg" />
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}
