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

import { Logo } from "@/components/icons";
import { subtitle } from './primitives';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const menuItems = [
		"About",
		"Projects",
		"Templates",
		"Message",
	  ];

	const { theme } = useTheme();

	useEffect(() => {
	(async function () {
		const cal = await getCalApi();
		cal("ui", {
		"styles": {
			"branding": {
			"brandColor": theme === "dark" ? "#000000" : "#ffffff",
			},
		},
		"hideEventTypeDetails": false,
		"layout": "month_view",
		});
	})();
	}, [theme]);

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
					<Logo/>
				</Link>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{siteConfig.navItems.map((item, index) => (
					<NavbarItem className='font-semibold' key={`${item}-${index}`}>
						<Link color="foreground" href='#'>{item.label}</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarMenu>
				{siteConfig.navItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link className='w-full' size='lg' href='#'>{item.label}</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
			<NavbarContent justify='end'>
				<Button 
					data-cal-link="princesharma74/book-an-appointment" 
					data-cal-config='{"layout":"month_view"}'
				>Book an Appointment</Button>
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch/>
			</NavbarContent>
		</NextUINavbar>
	);
};
