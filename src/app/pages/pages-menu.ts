import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Manage Monitoring Stations",
    icon: "radio-outline",
    link: "/pages/stations",
  },
  {
    title: "About",
    icon: "info-outline",
    link: "/pages/iot-dashboard",
  },
  // {
  //   title: "Maps",
  //   icon: "map-outline",
  //   children: [
  //     {
  //       title: "Leaflet Maps",
  //       link: "/pages/maps/leaflet",
  //     },
  //     {
  //       title: "Bubble Maps",
  //       link: "/pages/maps/bubble",
  //     },
  //   ],
  // },
  // {
  //   title: "Charts",
  //   icon: "pie-chart-outline",
  //   children: [
  //     {
  //       title: "Echarts",
  //       link: "/pages/charts/echarts",
  //     },
  //   ],
  // },
];
