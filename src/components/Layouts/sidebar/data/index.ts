import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Home",
        icon: Icons.HomeIcon,
        url: "/",
        items: [],
      },
      {
        title: "Health",
        icon: Icons.PieChart,
        items: [
          {
            title: "Analytics",
            url: "/analytics",
          },
          {
            title: "Health",
            url: "/Health",
          },
          {
            title: "Injury",
            url: "/Injury",
          },
        ],
      },
      {
        title: "Career",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Achievements",
            url: "/achievements",
          },
          {
            title: "Find a coach",
            url: "/coach",
          },
          {
            title: "Tutorial",
            url: "/tutorial",
          },
          {
            title: "Upcoming events",
            url: "/upcoming",
          },
          {
            title: "Financial",
            url: "/finacial",
          },
          {
            title: "Schemes",
            url: "/schemes",
          }
        ],
      },
      {
        title: "Community",
        icon: Icons.Alphabet,
        url: "/community",
        items: [],
      },
      {
        title: "Ask AI",
        icon: Icons.Table,
        url: "/ai",
        items: [],
      },
      {
        title: "Settings",
        icon: Icons.Authentication,
        url: "/settings",
        items: [],
      },
      
    ],
  },
];
