"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  UserCheck,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  UserRoundCheck,
} from "lucide-react";

export default function Form() {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="first name" placeholder="First Name" />
        <UserCheck className="absolute right-6 " size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="name" id="Last name" placeholder="Last Name" />
        <UserRoundCheck className="absolute right-6 " size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6 " size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Write your message here..." />
        <MessageSquare className="absolute top-4 right-6 " size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w[165px]">
        Submit
        <ArrowRightIcon size={12} />
      </Button>
    </form>
  );
}
