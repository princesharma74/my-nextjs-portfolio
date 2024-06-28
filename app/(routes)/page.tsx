import Container from '@/components/container';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import pb from '@/lib/pb';
import { useEffect, useState } from 'react';
import Hero from './components/hero';
import Pocketbase from 'pocketbase'; 
import { TemplateBase, ExperienceBase, ProjectBase, SocialBase, PublicationBase } from '@/types';
import { Templates } from './components/templates';
import { Socials } from './components/socials';
import { ExperienceSection } from './components/experiences';
import { Projects } from './components/projects';
import { PublicationSection } from './components/publications';

// to avoid caching...
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const username = process.env.USERNAME
const password = process.env.PASSWORD
const recordId = process.env.RECORD_ID

export default async function Home() {

  if (!username || !password || !recordId) {
    throw new Error('Please set USERNAME and PASSWORD in .env.local');
  }
  try {
    await pb.admins.authWithPassword(username, password);
  }
  catch (e) {
    console.error(e);
  }

  const me = await pb.collection('users').getOne(recordId, {
    expand: 'projects, projects.skills, education, skills.title, experiences, publications, socials, roles_and_responsibility, templates'
  })


  const info = {
    roles: me.roles, 
    introduction: me.introduction, 
    avatar: `${process.env.POCKETBASE_URL}/api/files/users/${recordId}/${me.avatar}`,
    resume: `${process.env.POCKETBASE_URL}/api/files/users/${recordId}/${me.resume}`,
  }


  const projects = me.expand && me.expand.projects.map(( project : ProjectBase ) => {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      skills: project.expand && project.expand.skills.map(skill => skill.title),
      github: project.github,
      hosted_link: project.hosted_link,
      images: project.images.map(image => {
        return `${process.env.POCKETBASE_URL}/api/files/${project.collectionName}/${project.id}/${image}`
      })
    }
  })

  const experiences = me.expand && me.expand.experiences.map(( experience : ExperienceBase ) => {
    return {
      id: experience.id,
      title: experience.title,
      responsibility: experience.responsibility,
      achievements: experience.achievements,
      start_time: new Date(experience.start_time),
      end_time: new Date(experience.end_time),
      company: experience.company
    }
  })
  // sort experiences based on end_time and keep the latest one at the top. Also end_time with Invalid Date should be at at the top
  experiences.sort((a : any, b : any) => {
    if (a.end_time.toString() === 'Invalid Date') {
      return -1
    }
    if (b.end_time.toString() === 'Invalid Date') {
      return 1
    }
    return b.end_time.getTime() - a.end_time.getTime()
  })


  const socials = me.expand && me.expand.socials.map(( social : SocialBase ) => {
    return {
      id: social.id,
      title: social.title,
      url: social.url,
      icon: `${process.env.POCKETBASE_URL}/api/files/${social.collectionName}/${social.id}/${social.icon}`
    }
  })

  const templates = me.expand && me.expand.templates.map(( template : TemplateBase ) => {
    return {
      id: template.id,
      title: template.title,
      description: template.description,
      url: template.url,
      price: template.price,
      purchase_link: template.purchase_link,
      images: template.images.map(image => {
        return `${process.env.POCKETBASE_URL}/api/files/${template.collectionName}/${template.id}/${image}`
      })
    }
  })

  // console.log(me.expand?.publications)
  const publications = me.expand && me.expand.publications.map(( publication : PublicationBase ) => {
    return {
      id: publication.id,
      title: publication.title,
      info: publication.info,
      published: publication.published,
      url: publication.url
    }
  }
)


  return (
    <>
    		<div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
		</div>
      <Navbar/>
        <Hero data={info}/>
        <Projects data={projects}/>
        <ExperienceSection data={experiences}/>
        <PublicationSection data={publications}/>
        <Templates data={templates}/>
        <Socials data={socials}/>
      <Footer/>
    </>
  );
}
