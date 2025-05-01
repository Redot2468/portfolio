"use client";

import Button from "@/app/_components/Button";
import FormInput from "@/app/_components/contact/FormInput";

function ContactForm() {
  return (
    <form className="contact-form mt-2 space-y-10">
      <FormInput label="Name" error="">
        <input
          type="text"
          name="name"
          id="name"
          className="duration-500"
          placeholder="Please enter your name"
        />
      </FormInput>
      <FormInput label="Email" error="">
        <input
          type="text"
          name="email"
          id="email"
          className="duration-500"
          placeholder="Please enter your email"
        />
      </FormInput>
      <FormInput label="Subject" error="">
        <input
          type="text"
          name="subject"
          id="subject"
          className="duration-500"
          placeholder="Please enter your subject"
        />
      </FormInput>

      <FormInput label="Message" error="">
        <textarea
          name="message"
          id="message"
          rows={6}
          className="w-full duration-500 placeholder:text-sm"
          placeholder="Please enter your subject"
        />
      </FormInput>

      <Button>Send message</Button>
    </form>
  );
}

export default ContactForm;
