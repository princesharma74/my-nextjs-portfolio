'use client'
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import profilepic from '../public/prof-pic.png';
import { color } from "framer-motion";
import Typewriter from "@/components/typewriter";
import Timeline from "@/components/timeline";
import { SiteConfig } from "@/config/site";
import { Carousel } from "flowbite-react";
import { title } from "@/components/primitives";
import { workIcon } from "@/components/icons";
import ContactForm from "@/components/contactform";
import ModalForm from "@/components/resumerequest";
import {useTheme } from "next-themes";

export default function Home() {
	const { theme } = useTheme();

	return (
		<>
		{/* Hero Section */}
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:mx-4 md:py-10">
			<div className=''>
				<Image
					src={profilepic}
					alt="Profile Picture"
					width={200}
					height={200}
					className="rounded-full"
				/>
			</div>
			<div className='inline-block max-w-lg text-center justify-center space-y-4'>
				<h1 className={title()}>Hey folks, I'm a <br/>
					<Typewriter 
						className={title({ color: 'cyan' })} 
						dataText='[" Developer", " Designer", " Notion Expert"]' 
					/>
				</h1>
				<p>As a Notion aficionado, I've mastered the art of creating stunning templates that pack a punch and command on working with Notion API. Say goodbye to scattered notes and hello to beautifully structured databases.</p>
			</div>
			<ModalForm />
		</section>
		{/* Experience Section */}
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:mx-4 md:py-10">
			<Timeline
				title='Experience'
				Icon={workIcon}
				items={siteConfig.experience}
			/>
		</section>
		{/* Templates */}
		<section className="flex flex-col md:h-screen items-center justify-center gap-4 py-8 md:mx-4" id = 'templates'>
			<h1 className={title({size: 'xs'})}>My Notion Templates</h1>
			<hr className="w-1/2 mx-auto border-black dark:border-white" />
			<Carousel 
				className="relative h-96 overflow-hidden rounded-lg md:h-5/6"
			>
				{
					siteConfig.templates.map((image, index) => (
						<div key={index} className="relative h-5/6">
							<h1 className={title()}>The Student Dashboard</h1>
							<Image
								src={theme === "dark" ? image.src.dark : image.src.light}
								alt={image.alt}
								layout="fill"
								objectFit="cover"
								objectPosition="top"
								className="rounded-lg"
							/>
							<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black" />
						</div>
					))
				}
			</Carousel>
		</section>
		{/* Contact Section */}
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:mx-4 md:py-10">
		</section>
		</>
	);
}
