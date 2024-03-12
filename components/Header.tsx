"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bookingcom.svg";
import logoHover from "@/public/bookingcom-hover.svg";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Book a stay",
    description: " Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a flight",
    description: " Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our Support Team",
    description: " Your customers' data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callsToAction = [
  { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
  { name: "Contact Us", href: "#", icon: PhoneIcon },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div>
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <div className="relative group">
              <Image
                src={logo}
                alt="logo"
                className="h-5 w-auto group-hover:hidden"
                priority={true}
              />
              <Image
                src={logoHover}
                alt="logo hover"
                className="h-5 w-auto hidden group-hover:block"
                priority={true}
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gafp-x-1 text-sm font-semibold leading-6 text-white hover:text-gray-300">
              Stays
              <ChevronDownIcon className="h-5 w-5 flex-none text-white hover:text-gray-300" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-o" />
                        </Link>
                        <p className="mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap=x=2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h5- w-5 flex-none text-[#013B94]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Flights
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Attractions
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Car Rental
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Vacations
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg-flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Log in
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="inset-0 fixed z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Booking.com</span>
              <Image src={logo} alt="logo" className="h-4 w-auto" />
            </Link>
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500-10">
              <div className="space-y-2 py-2">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                        Stays
                        <ChevronDownIcon
                          className={cn(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-blue-800"
                >
                  Flights
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-blue-800"
                >
                  Attractions
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-blue-800"
                >
                  Car Rental
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-blue-800"
                >
                  Vacations
                </Link>
                <div className="py-6">
                  <Link
                    href="#"
                    className="block rounded-lg py-3 -mx-3 px-3 text-base font-semibold text-white hover:bg-blue-800"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
