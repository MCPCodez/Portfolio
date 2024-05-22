import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { url } from '../../components/secrets/secrets.js';

export default function Contact() {
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm('service_624vh2s','template_cjdnl7n', form.current,{
        publicKey:url
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
    <div className='bg-mainBg bg-cover w-screen h-screen text-purple-500'>
      <div>
        <form onSubmit={sendEmail} ref={form}>
          <ul>  
            <li>
              <label htmlFor="from_name">Full Name</label>
              <input type="text" id='from_name' name='from_name' required/>
            </li>
            <li>
              <label htmlFor="return_email">Email</label>
              <input type="email" id='return_email' name='return_email' required/>
            </li>
            <li>
              <label htmlFor="title">Title</label>
              <input type="text" id='title' name='title' required/>
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </li>
          </ul>
          <input type="submit" value="Send Email"/>
        </form>
      </div>
    </div>
  )
}
