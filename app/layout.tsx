/* eslint-disable @next/next/no-head-element */

import { Box } from "@chakra-ui/react";
import Header from "../src/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Header headerTitle={"Fitcheck"} avatarImage={"../assets/images/placeholder.png"} />
        <Box as="main" mb={5}>
          {children}
        </Box>
      </body>
    </html>
  );
}
