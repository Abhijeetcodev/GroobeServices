import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Groobe,Instagram,Whatsapp} from '../assets/index.js'
import { useState } from "react";
export default function Navbar(){
 
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white-500 shadow">
            <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
                <div>
                    <div className="flex items-center justify-between py-2 md:py-4 md:block">
                    <img
                    className="block h-12 w-auto"
                    src={Groobe}
                    alt="Your Company"
                  />
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black text-lg  h-8 font-semibold hover:text-indigo-200">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-black text-lg h-8 font-semibold  hover:text-indigo-200">
                                <a href="javascript:void(0)">Our Service</a>
                            </li>
                            <li className="text-black text-lg   h-8 font-semibold  hover:text-indigo-200">
                                <a href="javascript:void(0)">Gallery</a>
                            </li>
                            <li className="text-black text-lg  h-8 font-semibold  hover:text-indigo-200">
                                <a href="javascript:void(0)">Testimonial</a>
                            </li>
                            <li className="text-black text-lg   h-8 font-semibold  hover:text-indigo-200">
                                <a href="javascript:void(0)">About Us</a>
                            </li>
                            <li className="text-black text-lg  h-8 font-semibold  hover:text-indigo-200">
                                <a href="javascript:void(0)">Contact Us</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                <div className="absolute gap-2 inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3">
                 <div>
                   <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white-800">
                     <span className="sr-only">Whatsapp</span>
                     <img
                        className="h-8 w-8 rounded-full"
                        src= {Whatsapp}
                        alt="images"
                      />
                    </Menu.Button>


                  </div>
                 
                </Menu>
                
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src= {Instagram}
                        alt=""
                      />
                    </Menu.Button>


                  </div>
                 
                </Menu>
                
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Contact Us</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
           
                </button>
               </div>
                </div>
            </div>
        </nav>
    );

}


// const navigation = [
//   { name: 'Highlights', href: '#', current: true },
//   { name: 'Our Service', href: '#', current: false },
//   { name: 'Gallery', href: '#', current: false },
//   { name: 'Testimonial', href: '#', current: false },
//   { name: 'About Us', href: '#', current: false },
//   { name: 'Contact Us', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-white-200">
//       {({ open }) => (
//         <>
//           <div className="mx-auto shadow-md max-w-8xl px-2 sm:px-6 ">

//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center sm:hidden justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1  items-center  justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="block h-8 w-auto lg:hidden"
//                     src={Groobe}
//                     alt="Your Company"
//                   />
//                   <img
//                     className="hidden h-8 w-auto lg:block"
//                     src={Groobe}
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-black',
//                           'rounded-md px-3 py-2 text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
             
//               <div className="absolute gap-2 inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white-800">
//                       <span className="sr-only">Whatsapp</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src= {Whatsapp}
//                         alt="images"
//                       />
//                     </Menu.Button>


//                   </div>
                 
//                 </Menu>
                
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src= {Instagram}
//                         alt=""
//                       />
//                     </Menu.Button>


//                   </div>
                 
//                 </Menu>
                
//                 <button
//                   type="button"
//                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="sr-only">Contact Us</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
           
//                 </button>
            
               
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-black',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>


//         </>
//       )}
//     </Disclosure>
//   )
// }