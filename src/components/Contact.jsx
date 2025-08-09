import React, { useEffect, useRef, useState } from 'react';
import copywrite from '../resources/Frame 2762.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messaged, setMessaged] = useState(false);
  const [notification, setNotification] = useState('');

  const form = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.notification-container', { y: 0, duration: 1.4, opacity: 1 });
    tl.to(
      '.notification-container',
      {
        y: '10rem',
        duration: 1.4,
        opacity: 0,
        onComplete: () => {
          setNotification('');
        },
      },
      "+3"
    );
  }, [notification]);

  useGSAP(() => {
    gsap.from('.bottom-line', {
      yPercent: 100,
      ease: 'power3.out',
      duration: 1.2,
      scrollTrigger: {
        trigger: '.contact-bottom',
        start: '80% bottom',
        toggleActions: 'play play play reverse',
      },
    });

    gsap.from(['.name-field div', '.email-field div', '.message-field div'], {
      xPercent: -100,
      duration: 2.5,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.email-field',
        start: 'bottom bottom',
        end: 'bottom top',
        toggleActions: 'play play play reverse',
      },
    });

    gsap.from('.message-btn-txt', {
      yPercent: 150,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.message-btn-txt',
        start: 'bottom bottom',
        end: 'bottom top',
      },
    });

    gsap.to('.connect-screen', {
      y: '-70dvh',
      borderRadius: 0,
      duration: 2,
      marginBottom: '-80dvh',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 105%',
        end: 'top 20%',
        scrub: 2,
        toggleActions: 'play play play reverse',
      },
    });

    gsap.to('.contact-container', {
      y: '0',
      duration: 1.5,
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 90%',
        end: 'top top',
        scrub: 2,
        toggleActions: 'play play play reverse',
      },
    });
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
    gsap.to('.name-field label', { color: e.target.value ? '#D1FD0A' : '#FFFFFF' });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    gsap.to('.email-field label', { color: e.target.value ? '#D1FD0A' : '#FFFFFF' });
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    gsap.to('.message-field label', { color: e.target.value ? '#D1FD0A' : '#FFFFFF' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (messaged) {
      setNotification('Thank you, but you have already submitted 😊');
      return;
    }

    if (!name || !email || !message) {
      setNotification('Please fill all fields 👀');
      return;
    }

    emailjs
      .sendForm('service_sq7iyr7', 'template_46h3m0n', form.current, {
        publicKey: 'jLLlR0-ujwRYgvbdP',
      })
      .then(
        () => {
          gsap.to('.message-btn-txt', { color: '#5cb85c' });
          setNotification('Thank you for your time 😁');
          setMessaged(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('error in sending email');
          setNotification('Could you try that again 💀');
        }
      );
  };

  return (
    <div className="contact-section relative font-days-one overflow-xhidden rounded-t-[2.5rem] sm:rounded-t-[5rem]">
      <div className="translate-y-[-20dvh] connect-screen bg-white-bg h-[120dvh] absolute w-full top-0">
        
        <div className="font-humane-black opacity-[1] text-center text-[40svw]">CONNECT</div>
      </div>

      <div className="contact-container mt-[20dvh] w-full overflow-hidden font-sansation-light rounded-t-[2.5rem] sm:rounded-t-[5rem] bg-black-bg text-white pt-[6rem] sm:pt-[8rem] pb-[6rem] xl:pb-[10rem] px-[2rem] sm:px-[4rem] md:px-[6rem] lg:px-[10rem] xl:px-[15rem] 2xl:px-[20rem]">
        <div className="text-start text-[2.1rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] lg:pt-[3rem] xl:pt-[8rem]">
          <h2 className="opacity-80">Great things</h2>
          <h2 className="mt-[-1rem] sm:mt-[-2rem]">
            <span className="opacity-80">don't just </span>
            <span className="text-opacity-100">
              <span className="font-sansation">happen !!</span>
            </span>
          </h2>
        </div>

        <div className="contact-form mt-[5rem] md:mt-[6rem] mb-[12rem] lg:mt-[10rem] sm:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.75rem]">
          <div className="contact-head z-10 bg-black-bg font-days-one relative gap-2 flex items-center sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem]">
            LET'S MAKE IT
            <span className="text-black-bg relative z- bg-yellow-bg px-2 rounded-sm">HAPPEN !</span>
          </div>
          <form ref={form} onSubmit={handleFormSubmit} method="post" className="input-field-container text-left gap-20 font-sansation flex flex-col mt-[6rem] md:mt-[8rem] lg:mt-[10rem] xl:mt-[14rem]">
            <div className="relative p-14 rounded-3xl bg-gradient-to-br from-[#040404] via-[#090909] to-[#000000] shadow-2xl border border-white/10 backdrop-blur-sm min-h-[650px] overflow-hidden 
    transition-all duration-500 hover:scale-[1.05]  hover:shadow-2xl">

  {/* Decorative Gradient Blob */}
  <div className="absolute -top-20 -right-20 align-middle w-72 h-72 bg-gradient-to-br from-yellow-400/20 via-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

  {/* Name & Email */}
  <div className="name-email-field flex flex-col md:flex-row gap-12 relative z-10">
    <div className="name-field flex-1">
      <label htmlFor="name" className="block mb-4 text-2xl font-semibold tracking-wide text-gray-100">Name</label>
      <input
        type="text"
        name="from_name"
        id="name"
        className="w-full interactable cursor-button capitalize px-6 py-5 text-xl rounded-xl bg-white/5 text-white placeholder-gray-400 outline-none 
        focus:ring-2 focus:ring-yellow-400 focus:shadow-[0_0_25px_rgba(250,204,21,0.4)] focus:border-transparent transition-all"
        data-type="input"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your full name"
      />
    </div>

    <div className="email-field flex-1">
      <label htmlFor="email" className="block mb-4 text-2xl font-semibold tracking-wide text-gray-100">Email</label>
      <input
        type="email"
        name="email_id"
        id="email"
        className="w-full interactable cursor-button px-6 py-5 text-xl rounded-xl bg-white/5 text-white placeholder-gray-400 outline-none 
        focus:ring-2 focus:ring-yellow-400 focus:shadow-[0_0_25px_rgba(250,204,21,0.4)] focus:border-transparent transition-all"
        data-type="input"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email address"
      />
    </div>
  </div>

  {/* Message */}
  <div className="message-field w-full mt-12 relative z-10">
    <label htmlFor="message" className="block mb-4 text-2xl font-semibold tracking-wide text-gray-100">Message</label>
    <textarea
      name="message"
      id="message"
      rows="6"
      className="w-full interactable cursor-button px-6 py-5 text-xl rounded-xl bg-white/5 text-white placeholder-gray-400 outline-none 
      focus:ring-2 focus:ring-yellow-400 focus:shadow-[0_0_25px_rgba(250,204,21,0.4)] focus:border-transparent transition-all resize-none"
      data-type="input"
      value={message}
      onChange={handleMessageChange}
      placeholder="Type your message..."
    />
  </div>
</div>

            <button className="mt-[3rem] interactable self-start cursor-button overflow-hidden lg:mt-[4rem] xl:mt-[6rem] sm:text-[6rem] text-[4rem] font-humane-black tracking-wide cursor-pointer text-white border-b-4 leading-[100%] border-[#ffffff70]" data-type="send">
              <div className="message-btn-txt">MESSAGE{messaged ? 'D' : ''} IT</div>
            </button>
          </form>
        </div>

        <div className="contact-bottom overflow-hidden text-black bg-black-bg absolute bottom-0 left-0 right-0">
          <div className="bottom-line bg-white-bg flex justify-between items-center pt-2 sm:pt-4 md:pt-6 xl:pt-10 sm:pb-2 md:pb-4 xl:pb-6 px-[2rem] md:px-[2.5rem] xl:px-[3.75rem] rounded-t-[2rem] sm:rounded-t-[3rem] xl:rounded-t-[5rem]">
            <div className="footer-left font-sansation">
              <span className="opacity-40 sm:text-[1.25rem] md:text-[1.5rem] xl:text-[2rem]">Get in touch</span>
              <h3 className="-mt-1 sm:mt-[-0.6rem] text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] xl:text-[3.8rem]">@fhdnaufal</h3>
            </div>
            <div className="scale-[0.4] sm:scale-50 md:scale-[70%] xl:scale-100">
              <img src={copywrite} alt="" />
            </div>
          </div>
        </div>
      </div>

      {notification && (
        <div className="notification-container scale-75 sm:scale-100 w-full translate-y-40 opacity-0 fixed bottom-20 left-0 flex justify-center">
          <div className="notification bg-green-300 py-2 text-[1.2rem] px-6 rounded-lg bg-opacity-65">{notification}</div>
        </div>
      )}
    </div>
  );
};

export default Contact;
