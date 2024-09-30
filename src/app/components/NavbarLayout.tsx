"use client"
import { paths } from "@/paths";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlus, FaSchool, FaSearch } from "react-icons/fa";


export default function NavbarLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");

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
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <FaSchool size={30} />
        </NavbarBrand>
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
          size="sm"
          startContent={<FaSearch size={18} />}
          type="search"
          value={search}
          onChange={onSearch}
          onKeyDown={handleKeyPress}
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
        />
        <Button
          color="secondary"
          size="md"
          startContent={<FaPlus size={18} />}
        >
          Ajouter un projet
        </Button>
      </NavbarContent>
    </Navbar>
  );
}