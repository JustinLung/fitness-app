import { Container, List, ListItem, Image, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { useRouter } from "next/router";
import { theme } from "../styles/theme";

export default function Navigation() {
  const router = useRouter();
  return (
    <Container
      as="nav"
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      p="0.7em 0"
      pb="2em"
      bg={theme.colors.white}
      w="100%"
    >
      <List display="flex" justifyContent="space-around" mx="auto">
        <ListItem>
          <NextLink href="/">
            <Link
              _hover={{ textDecor: "none" }}
              _after={{
                content: '"Home"',
                fontSize: ".8rem",
                filter:
                  router.pathname == "/"
                    ? "invert(12%) sepia(63%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%)"
                    : "",
              }}
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/assets/icons/home-icon.svg"
                alt="Home"
                filter={
                  router.pathname == "/"
                    ? "invert(12%) sepia(63%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%)"
                    : ""
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
                filter:
                  router.pathname == "/workouts"
                    ? "invert(12%) sepia(63%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%)"
                    : "",
              }}
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                alt="Workouts"
                src="/assets/icons/barbell-icon.svg"
                filter={
                  router.pathname == "/workouts"
                    ? "invert(12%) sepia(63%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%)"
                    : ""
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
                filter:
                  router.pathname == "/meals"
                    ? "invert(12%) sepia(63%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%)"
                    : "",
              }}
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                alt="Meals"
                src="/assets/icons/apple-icon.svg"
                filter={
                  router.pathname == "/meals"
                    ? "invert(12%) sepia(63%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%)"
                    : ""
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
                filter:
                  router.pathname == "/profile"
                    ? "invert(12%) sepia(63%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%)"
                    : "",
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
                filter={
                  router.pathname == "/profile"
                    ? "invert(12%) sepia(63%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%)"
                    : ""
                }
              />
            </Link>
          </NextLink>
        </ListItem>
      </List>
    </Container>
  );
}
