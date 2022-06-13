import { NbMenuItem } from "@nebular/theme";

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Manage Stations",
    icon: "radio-outline",
    link: "/pages/stations",
  },
  {
    title: "Manage Users",
    icon: "people-outline",
    link: "/pages/users",
  },
  {
    title: "About",
    icon: "info-outline",
    link: "/pages/about",
  },
];
export const USER_MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Manage Station",
    icon: "radio-outline",
    link: "/pages/station",
  },
  {
    title: "About",
    icon: "info-outline",
    link: "/pages/iot-dashboard",
  },
];
