'use client'
import Image from "next/image";
import { siteConfig } from "@/config/site";
import profilepic from '../public/prof-pic.png';
import Typewriter from "@/components/typewriter";
import Timeline from "@/components/timeline";
import { Carousel } from "flowbite-react";
import { title } from "@/components/primitives";
import { workIcon } from "@/components/icons";
import ModalForm from "@/components/modalform";

import {useTheme } from "next-themes";
import { useEffect, useState } from 'react';

import { Card } from "flowbite-react";
import ContactUs from "@/components/contactme";

export default function Home() {
	const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    // When component is mounted, set the mounted state to true
    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent rendering until after the theme has been resolved
    if (!mounted) return null;

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
					<h1 className={title()}>Hey folks, I&apos;m a <br/>
					<Typewriter 
						className={title({ color: 'cyan' })} 
						dataText='[" Developer", " Designer", " Notion Expert"]' 
					/>
				</h1>
				<p>As a Notion aficionado, I&apos;ve mastered the art of creating stunning templates that pack a punch and command on working with Notion API. Say goodbye to scattered notes and hello to beautifully structured databases.</p>
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
		<section className="flex flex-col h-screen items-center justify-center gap-4 py-8 md:mx-4" id = 'templates'>
			<h1 className={title({size: 'xs'})}>My Notion Templates</h1>
			<hr className="w-1/2 mx-auto border-black dark:border-white" />
			<Carousel 
				className="relative overflow-hidden rounded-lg h-full"
			>
				{
					siteConfig.templates.map((image, index) => (
							<div key={index} className="relative h-full">
								<Image
									src={theme === "dark" ? image.src.dark : image.src.light}
									alt={image.alt}
									layout="fill"
									objectFit="cover"
									objectPosition="top"
									className="rounded-lg"
								/>
							</div>
					))
				}
			</Carousel>
		</section>
		<ContactUs/>
		</>
	);
}
