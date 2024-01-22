export interface ILinks {
  icon?: React.ReactNode;
  label: string;
  href: string;
  id: string | number;
}
export const links: ILinks[] = [
  { id: "1", label: "chat", href: "/chat" },
  { id: "2", label: "tours", href: "/tours" },
  { id: "3", label: "new-tour", href: "/tours/new-tour" },
  { id: "4", label: "profile", href: "/profile" },
];
