import React, { useState } from 'react';
import { Input, Button, Spacer, Link } from '@nextui-org/react';
import { title } from './primitives';
import { button as buttonStyles } from "@nextui-org/theme";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <section className="body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className={title()}>Contact Me</h2>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <Input
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='focus:outline-none border-0'
                />
              </div>
              <div className="p-2 w-1/2">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='focus:outline-none border-0'
                />
              </div>
              <div className="p-2 w-full">
                <Input
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className=''
                />
              </div>
              <div className="p-2 w-full">
                <button
                  className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <Spacer y={2} />
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <Link href="mailto:princesharma2899@gmail.com">princesharma2899@gmail.com</Link>
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
