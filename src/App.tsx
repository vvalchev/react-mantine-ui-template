import "@mantine/core/styles.css";

import { Center, Loader, MantineProvider } from "@mantine/core";
import { Suspense } from "react";
import Layout from "./components/main/Layout";
import AllRoutes from "./routes";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Suspense
        fallback={
          <Center>
            <Loader />
          </Center>
        }
      >
        <AllRoutes />
        <Layout />
      </Suspense>
    </MantineProvider>
  );
}
