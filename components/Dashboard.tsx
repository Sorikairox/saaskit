import { type ComponentChild, JSX } from "preact";
import IconListDetails from "tabler-icons/list-details.tsx";
import IconUser from "tabler-icons/user.tsx";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

interface SidebarNavItem {
  icon: typeof IconUser;
  href: string;
  inner: ComponentChild;
}

interface SidebarNavProps extends JSX.HTMLAttributes<HTMLElement> {
  active?: string;
  items: SidebarNavItem[];
}

function SidebarNav(props: SidebarNavProps) {
  return (
    <nav class="w-full md:w-[16rem] md:flex-shrink-0 flex flex-col justify-start">
      {props.items.map((item) => (
        <a
          href={item.href}
          class={`px-4 py-2 rounded w-full ${
            item.href === props.active
              ? "bg-gray-100 font-bold"
              : "hover:bg-gray-100"
          }`}
        >
          <span class="align-middle">
            <item.icon class="inline-block mr-2" />
            {item.inner}
          </span>
        </a>
      ))}
    </nav>
  );
}

interface DashboardProps {
  active: string;
  children: ComponentChild;
}

export default function DashboardLayout(props: DashboardProps) {
  const sidebarNavItems = [
    {
      icon: IconListDetails,
      href: "/dashboard/todos",
      inner: "Todos",
    },
    {
      icon: IconUser,
      href: "/dashboard/account",
      inner: "Account",
    },
  ];

  return (
    <body class="flex flex-col min-h-screen">
      <Header />

      <div class="p-8 mx-auto max-w-7xl flex-1 flex md:flex-row flex-col w-full gap-8">
        <SidebarNav
          {...props}
          items={sidebarNavItems}
        />
        <div class="flex-1">
          {props.children}
        </div>
      </div>
      <Footer />
    </body>
  );
}