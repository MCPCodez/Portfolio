import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SECRET } from '../../components/secrets/secrets.js';

export default function Contact() {
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm('service_624vh2s','template_cjdnl7n', form.current,{
        publicKey:process.env.SECRET
      })
      .then(
        () => {
          console.log('Success!');
        },
        (error) => {
          console.log('Failed...', error.text);
        }
      )
  };

  return (
    <div className='bg-mainBg bg-cover w-screen h-screen'>
      <div className=''>
        <form onSubmit={sendEmail} ref={form} className='grid content-center h-screen w-screen pb-20'>
          <ul className=''>  
            <li>
              <p className='hidden md:block text-white text-3xl p-4 pb-4 w-screen text-center pr-14'>Have a question?</p>
              <p className='hidden md:block text-white text-2xl p-4 pb-10 w-screen text-center'>Send me an Email Today!</p>
            </li>
            <li className='grid justify-items-center pb-4'>
              <label htmlFor="from_name" className='text-white text-xl pr-24 mr-14 pb-4 md:text-2xl md:pr-28 md:pl-2'>Full Name</label>
              <input type="text" id='from_name' name='from_name' className='text-white bg-gray-600 border border-gray-900 text-lg pl-2 rounded-lg md:text-xl' required/>
            </li>
            <li className='grid justify-items-center pb-4'>
              <label htmlFor="return_email" className='text-white text-xl pr-24 mr-24 pb-4 md:text-2xl md:pr-28'>Email</label>
              <input type="email" id='return_email' name='return_email' className='text-white bg-gray-600 border border-gray-900 text-lg pl-2 rounded-lg md:text-xl' required/>
            </li>
            <li className='grid justify-items-center pb-4'>
              <label htmlFor="title" className='text-white text-xl pr-24 mr-24 pb-4 md:text-2xl md:pr-36 md:mr-20 md:ml-2'>Title</label>
              <input type="text" id='title' name='title' className='text-white bg-gray-600 border border-gray-900 text-lg pl-2 rounded-lg md:text-xl' required/>
            </li>
            <li className='grid justify-items-center pb-4'>
              <label htmlFor="message" className='text-white text-xl pr-24 mr-16 pb-4 md:text-2xl md:mr-20 md:ml-2'>Message</label>
              <textarea name="message" id="message" className='text-white bg-gray-600 border border-gray-900 text-lg pl-2 rounded-lg md:text-xl' rows='5'></textarea>
            </li>
            <li className='grid justify-items-center pb-4 pt-10'>
              <input type="submit" value="Send Email" className='border border-gray-900 p-4 pr-6 pl-6 rounded-lg text-lg font-bold bg-gray-800 hover:bg-teal-400 cursor-pointer text-white hover:text-purple-500 md:pr-10 md:pl-10'/>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}
