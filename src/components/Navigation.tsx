import { Box, List, ListItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import HomeIcon from "./icons/HomeIcon";
import AppleIcon from "./icons/AppleIcon";
import BarbellIcon from "./icons/BarbellIcon";
import ChartIcon from "./icons/ChartIcon";
import AddIcon from "./icons/AddIcon";
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
      pt={3}
      pb="calc(1rem + env(safe-area-inset-bottom))"
      bg={theme.colors.white}
      w="100%"
      borderTop="2px solid"
      borderColor={theme.colors.lightgrey}
    >
      {/* Home */}
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
        {/* Workouts */}
        <ListItem opacity={
          router.pathname == "/workouts"
            ? "1"
            : ".5"
        }>
          <NavItem href="/workouts" navTitle="Workouts">
            <BarbellIcon width={24} height={24} />
          </NavItem>
        </ListItem >
        {/* Create */}
        <ListItem opacity={
          router.pathname == "/create"
            ? "1"
            : ".5"
        }>
          <NavItem href="/create" navTitle="Create">
            <AddIcon width={24} height={24} />
          </NavItem>
        </ListItem >
        {/* meals */}
        <ListItem opacity={
          router.pathname == "/meals"
            ? "1"
            : ".5"
        }>
          <NavItem href="/meals" navTitle="Meals">
            <AppleIcon width={24} height={24} />
          </NavItem>
        </ListItem >
        {/* Progress */}
        <ListItem opacity={
          router.pathname == "/progress"
            ? "1"
            : ".5"
        }>
          <NavItem href="/progress" navTitle="Progress">
            <ChartIcon width={24} height={24} />
          </NavItem>
        </ListItem >
      </List>
    </Box>
  );
}
