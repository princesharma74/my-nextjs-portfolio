import React, { useState } from 'react';
import {Input, Textarea, Button } from '@nextui-org/react';
import { title } from "@/components/primitives";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, subject, message });
  }

  return (
      <form onSubmit={handleSubmit} className='body-font relative'>
         <div className="container px-5 py-24 mx-auto">
            <h1 className={title()}>Contact Us</h1>
         </div>
         
      </form>
  );
}

export default ContactForm;
