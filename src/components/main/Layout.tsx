import { AppShell, Burger, Center, NavLink, ScrollArea, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDashboard, IconLogout, IconPalette, IconSettings } from "@tabler/icons-react";
import { Outlet, NavLink as RNavLink } from "react-router-dom";
import Logo from "@/assets/logo.svg?react";

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell>
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>
          <Center>
            <Logo />
          </Center>
        </AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
          <NavLink to="/" label={<IconDashboard />} component={RNavLink} />
        </AppShell.Section>
        <AppShell.Section>
          <NavLink to="/settings" label={<IconSettings />} component={RNavLink} />
          <NavLink href="#" label={<IconPalette />} onClick={() => toggleColorScheme()} />
          <NavLink to="/logout" label={<IconLogout />} component={RNavLink} />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
