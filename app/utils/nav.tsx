import { ListChecks, ListTodo, CheckSquare, CheckCheck } from "lucide-react";

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: <ListTodo size={20}/>,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: <ListChecks size={20}/>,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: <CheckSquare size={20}/>,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: <CheckCheck size={20}/>,
    link: "/incomplete",
  },
];

export default menu;
