import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { ThemeSwitcher } from "./swithThemes";

export default function App() {
    return (
        <Navbar className="bg-black/50 backdrop-blur-md dark:bg-neutral-900 bg-neutral-300">
            <NavbarBrand className="flex items-center ponter">
                <Link className="" href="/">
                    <p className="font-black text-xl bg-black rounded-full text-white dark:bg-white dark:text-black pl-2 py-0.5">AI SDK <span className="font-bold text-lg bg-white px-2 py-2 rounded-full text-black dark:bg-black dark:text-white border border-white dark:border-black">Innovations</span> </p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <ThemeSwitcher />
            </NavbarContent>
        </Navbar>
    );
}
