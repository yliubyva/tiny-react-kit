export interface SidebarMenuOptionBase {
  label: string;
  icon: React.ReactNode;
}

export type SidebarMenuOptions =
  | (SidebarMenuOptionBase & { hasChildren: false; href: string })
  | (SidebarMenuOptionBase & {
      hasChildren: true;
      children: { name: string; href: string }[];
    });
