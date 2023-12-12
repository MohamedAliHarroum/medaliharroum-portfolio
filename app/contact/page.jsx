'use client';
import{MailIcon,HomeIcon,PhoneIcon} from 'lucide-react';

import React from "react";
import {Form} from "../components/Form";
 const Contact = () => {
  return <section className="min-h-screen pt-12 text-lg mb-4 ">
    <div className="container mx-auto ">
      {/*   text & illustration */}
    <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
      {/* text */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-x-4 text-primary">
          <span className="w-[30px] h-[2px] bg-primary"></span>
          <div>Say Hello 👋</div>
        </div>
        <h1 className="h1 max-w-md mb-8"> Let's Work Together !.</h1>
        <p className="subtitle max-w-[400px]">
            I'm currently available for  work.
          If you have a project that you want to get started,
          think you need my help with something or just fancy saying hey,
          then get in touch.
        </p>
      </div>
      {/* illustration */}
      <div className="hidden xl:flex w-full  bg-contact_illustration_light dark:bg-contact_illustration_dark
      bg-contain bg-top bg-no-repeat "></div>
    </div>

      {/*info text  & form*/}
      <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
        {/* info text */}
        <div className='flex flex-col gap-x-4 xl:gap-y-14 mb-12 xl:mb-24
        text-base xl:text-lg'>
          {/* mail */}
          <div className='flex items-center gap-x-8'>
            <MailIcon size={18} className='text-primary'/>
            <div>mohamedali.harroum@gmail.com</div>
          </div>
          {/* address */}
          <div className='flex items-center gap-x-8'>
            <HomeIcon size={18} className='text-primary'/>
            <div>Sahline , Monastir 5012</div>
          </div>
          {/* phone */}
          <div className='flex items-center gap-x-8'>
            <PhoneIcon size={18} className='text-primary'/>
            <div>+216 25 041 852</div>
          </div>
        </div>
       <Form />
      </div>
    </div>
      </section>;
};

export default Contact;