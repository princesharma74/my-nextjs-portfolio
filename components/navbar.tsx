'use client'
import React from 'react';
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { PrinceLogo, Logo } from "@/components/icons";
import { subtitle } from './primitives';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const menuItems = [
		"About",
		"Projects",
		"Templates",
		"Message",
	  ];

	return (
		<NextUINavbar maxWidth="xl" position="sticky" onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className='sm:hidden'
				/>
				<Link
					href="/"
					color="foreground"
					className={clsx(
						linkStyles,
						"flex items-center gap-2",
					)}
				>
					<PrinceLogo/>
				</Link>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems.map((item, index) => (
					<NavbarItem className='font-semibold' key={`${item}-${index}`}>
						<Link color="foreground" href='#'>{item}</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link className='w-full' size='lg' href='#'>{item}</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
			<NavbarContent justify='end'>
				<Button>Book an Appointment</Button>
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch/>
			</NavbarContent>
		</NextUINavbar>
	);
};
