import { Container, List, ListItem, Image, Link, color } from "@chakra-ui/react";
import NextLink from 'next/link'
import { useRouter } from "next/router";
import { theme } from "../styles/theme";

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <Container
        as="nav"
        pos="fixed"
        bottom={0}
        left={0}
        right={0}
        zIndex={4}
        py={3}
        pb="calc(1em + env(safe-area-inset-bottom))"
        bg={theme.colors.white}
        w="100%"
        borderTop="2px solid"
        borderColor={theme.colors.lightgrey}
      >
        <List display="flex" justifyContent="space-around" mx="auto">
          <ListItem>
            <NextLink href="/">
              <Link
                _hover={{ textDecor: "none" }}
                _after={{
                  content: '"Home"',
                  fontSize: ".8rem",
                  opacity:
                    router.pathname == "/"
                      ? "1"
                      : ".5",
                }}
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/assets/icons/home-icon.svg"
                  alt="Home"
                  opacity={
                    router.pathname == "/"
                      ? "1"
                      : ".5"
                  }
                />
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/workouts">
              <Link
                _hover={{ textDecor: "none" }}
                _after={{
                  content: '"Workouts"',
                  fontSize: ".8rem",
                  opacity:
                    router.pathname == "/workouts"
                      ? "1"
                      : ".5",
                }}
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  alt="Workouts"
                  src="/assets/icons/barbell-icon.svg"
                  opacity={
                    router.pathname == "/workouts"
                      ? "1"
                      : ".5"
                  }
                />
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/meals">
              <Link
                _hover={{ textDecor: "none" }}
                _after={{
                  content: '"Recipes"',
                  fontSize: ".8rem",
                  opacity:
                    router.pathname == "/meals"
                      ? "1"
                      : ".5",
                }}
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  alt="Meals"
                  src="/assets/icons/apple-icon.svg"
                  opacity={
                    router.pathname == "/meals"
                      ? "1"
                      : ".5"
                  }
                />
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/profile">
              <Link
                _after={{
                  content: '"Profile"',
                  fontSize: ".8rem",
                  opacity:
                    router.pathname == "/profile"
                      ? "1"
                      : ".5",
                }}
                _hover={{ textDecor: "none" }}
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  alt="Profile"
                  src="/assets/icons/user-icon.svg"
                  opacity={
                    router.pathname == "/profile"
                      ? "1"
                      : ".5"
                  }
                />
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </>
  );
}
