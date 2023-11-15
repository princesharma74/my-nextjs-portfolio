import { workIcon } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Prince Sharma",
	description: "I'm a Student, Developer, and Notion Expert. I'm passionate about building products that make a difference.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
		label: "Templates",
		href: "#templates",
		},
		{
		label: "Gallery",
		href: "#gallery",
		},
		{
		label: "Message",
		href: "#message",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
	experience: [
			{
				title: 'Notion Campus Leader & Template Creator',
				startDate: new Date(2022, 3, 1),
				endDate: new Date(),
				description: 'Organised and led workshops under the guidance of Global Community Lead to educate peers about the benefits of Notion and how to use it effectively for academic and personal organisation. Actively promoted Notion on-campus, leading to increased awareness and usage among students. Assisted in nationwide events and collaborated with students globally for community initiatives.',
			}, 
			{
				title: 'Web Developer, Fakir Mohan Foundation',
				startDate: new Date(2019, 2, 11),
				endDate: new Date(2021, 8, 21),
				description: 'Developed and maintained the website for the NGO, Fakir Mohan Foundation, using HTML, CSS, and JavaScript. Created a custom CMS for the website using PHP and MySQL. Designed and developed a custom web application for the NGO using ReactJS and Firebase. Created a custom dashboard for the web application using ReactJS and Firebase.',
			},
			{
				title: 'Subject Matter Expert, Computer Science',
				startDate: new Date(2020, 4, 20),
				endDate: new Date(2022, 5, 19),
				description: 'Assisted students with complex computer science problems, improving their understanding and academic performance. More than 400 answers posted with detailed explanation and guide.',
			}
	],

	templates: [
		{ 
			src: 
			{ 
				dark: '/templates/the_task_takedown.png', 
				light: '/templates/the_task_takedown_light.png' 
			}, 
			
			alt: 'The Task Takedown',
			link: 'princesharma74.gumroad.com/l/gqeuaq'
		},
		{ 
			src: 
			{ 
				dark: '/templates/advanced_weekly_routine.png', 
				light: '/templates/advanced_weekly_routine_light.png' 
			}, 
			
			alt: 'Advanced Weekly Routine',
			link: 'princesharma74.gumroad.com/l/dhnazh'
		},
		{
			src: 
			{ 
				dark: '/templates/the_student_dashboard.png', 
				light: '/templates/the_student_dashboard_light.png' 
			}, 
			alt: 'The Student Dashboard',
			link: 'princesharma74.gumroad.com/l/macpc'
		},
	],

	projects: [
		{ 
			title: 'Coding Profiles Tracker', 
			description: 'Automated Python script to track coding proles (LeetCode, Codeforces, CodeChef) for 42 friends, utilizing Selenium and Django, with nightly updates on Alibaba Cloud for 99.99% uptime.', 
			link: '',
		 }, 
		{ 
			title: 'CodeBuddy - A Social Coding Platform', 
			description: 'Developed a social coding platform using ReactJS, Firebase, and TailwindCSS, with features like real-time chat, code editor, and user profiles.',
			link: '',
		},
		{ 
			title: 'Certificate Generation Tool',
			description: 'Developed an automated certicate generation tool in Java and JavaFX. Streamlined the certicate creation process from CSV data, reducing manual eort by 80%. Designed a user-friendly GUI for easy and intuitive use, resulting in a 50% reduction in training time for new users.',
			link: '',
		}
	]
};
