"use client";

import {
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon, LinkedinIcon, FacebookIcon } from "./social-icons";

const socials = [
  { icon: WhatsAppIcon, href: "https://wa.me/8801703750565", label: "WhatsApp",className: "size-1" },
  { icon: FacebookIcon, href: "https://www.facebook.com/i.am.riad01", label: "Facebook" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/rsriad", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rsriad00@gmail.com", label: "Email" },
];

export function ProfileCard() {
  return (
    <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
      {/* Profile Image & Overlaid Socials */}
      <div className="relative aspect-[5/4] rounded-[1.5rem] overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm group">
        <Image
          src="/profile.png"
          alt="Md. Rawha Siddiqi Riad"
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover"
          priority
        />
        
        {/* Transparent rounded overlay icons on bottom right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              className="w-9 h-9 flex items-center justify-center bg-white/30 backdrop-blur-md text-gray-900 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-sm border border-white/20"
              aria-label={social.label}
            >
              <social.icon className="w-[18px] h-[18px]" />
            </Link>
          ))}
        </div>
      </div>

      {/* Info Card — compact */}
      <div className="mt-2 p-2">
      {/* border border-gray-100 dark:border-white/10 shadow-sm */}
        <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
          Md. Rawha Siddiqi Riad
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Full Stack Developer, Software Engineer &amp; Researcher
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
            <span>UTC+6</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Phone className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
            <span>+880 1703-750565</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Mail className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
            <span className="truncate">rsriad00@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}