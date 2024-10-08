"use client"
import { paths } from "@/paths";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlus, FaSchool, FaSearch } from "react-icons/fa";


export default function NavbarLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Accueil",
      href: paths.home(),
    },
    {
      label: "Projets",
      href: paths.projets(),
    },
    {
      label: "Contact",
      href: paths.contact(),
    },
  ];

  const isActive = (path: string) => {
    return path === pathname;
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/projets?search=${search}`);
    }
  }

  return (
    <Navbar isBordered isBlurred={false} className="z-40 bg-white" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <FaSchool className="h-7 w-7" />
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden sm:flex gap-3">
        <NavbarItem isActive={isActive(paths.home())}>
          <Link color={isActive(paths.home()) ? "secondary" : "foreground"} href={paths.home()}>
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive(paths.projets())}>
          <Link color={isActive(paths.projets()) ? "secondary" : "foreground"} href={paths.projets()}>
            Projets
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive(paths.contact())}>
          <Link color={isActive(paths.contact()) ? "secondary" : "foreground"} href={paths.contact()}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          placeholder="Rechercher un projet..."
          size="md"
          startContent={<FaSearch size={18} />}
          type="search"
          value={search}
          onChange={onSearch}
          onKeyDown={handleKeyPress}
          className="w-52 md:w-50"
        />
        <Button
          as={Link}
          color="secondary"
          size="md"
          startContent={<FaPlus size={18} />}
          href={paths.addProjet()}
        >
          Ajouter un projet
        </Button>
      </NavbarContent>
      <NavbarMenu className="bg-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={isActive(item.href) ? "secondary" : "foreground"}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}