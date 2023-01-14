import { Box, List, ListItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import HomeIcon from "./icons/HomeIcon";
import AppleIcon from "./icons/AppleIcon";
import BarbellIcon from "./icons/BarbellIcon";
import UserIcon from "./icons/UserIcon";
import NavItem from "./NavItem";
import { theme } from "../styles/theme";

export default function Navigation() {
  const router = useRouter();
  return (
    <Box
      as="nav"
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={4}
      py={3}
      pb="calc(1rem + env(safe-area-inset-bottom))"
      bg={theme.colors.white}
      w="100%"
      borderTop="2px solid"
      borderColor={theme.colors.lightgrey}
    >
      <List display="flex" justifyContent="space-around" mx="auto">
        <ListItem opacity={
          router.pathname == "/"
            ? "1"
            : ".5"
        }>
          <NavItem href="/" navTitle="Home">
            <HomeIcon width={24} height={24} />
          </NavItem>
        </ListItem >
        <ListItem opacity={
          router.pathname == "/workouts"
            ? "1"
            : ".5"
        }>
          <NavItem href="/workouts" navTitle="Workouts">
            <BarbellIcon width={24} height={24} />
          </NavItem>
        </ListItem>
        <ListItem opacity={
          router.pathname == "/meals"
            ? "1"
            : ".5"
        }>
          <NavItem href="/meals" navTitle="Meals">
            <AppleIcon width={24} height={24} />
          </NavItem>
        </ListItem>
        <ListItem opacity={
          router.pathname == "/profile"
            ? "1"
            : ".5"
        }>
          <NavItem href="/profile" navTitle="Profile">
            <UserIcon width={24} height={24} />
          </NavItem>
        </ListItem>
      </List>
    </Box>
  );
}
