import PersonIcon from "@material-ui/icons/Person";
import PersonAddOutlined from "@material-ui/icons/PersonAddOutlined";
import { SidebarItem } from "./SidebarItem";

export const SidebarData: SidebarItem[] = [
  {
    title: "Employees",
    path: "/",
    icon: <PersonIcon />,
  },
  {
    title: "Add Employee",
    path: "/employee/add",
    icon: <PersonAddOutlined />,
  },
];
