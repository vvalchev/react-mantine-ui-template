import { AppShell, NavLink, ScrollArea, useMantineColorScheme } from "@mantine/core";
import { IconDashboard, IconLogout, IconPalette, IconSettings } from "@tabler/icons-react";
import { Outlet, NavLink as RNavLink } from "react-router-dom";

import Logo from "@/assets/logo.svg?react";

import classes from "./Shell.module.css";

export default function Shell() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      className={classes.shell}
      navbar={{
        width: 48,
        breakpoint: "none",
      }}
    >
      <AppShell.Navbar className={classes.navbar}>
        <Logo className={classes.logo} />

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
