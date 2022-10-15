import React from 'react';
import ghoul from "../public/Ghouls.png";
import witch from "../public/witch.jpg";
import zombies from "../public/Zombies.png";
import cats from "../public/Cats.png";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Ghoul from "../public/Ghouls.png";
import Link from "next/link";

function About() {
	const router = useRouter();
  return (
		<div>
			<section className="h-full w-full mb-2">
				<div className="h-full pt-10 bg-transparent sm:pt-16 lg:overflow-hidden lg:pt-16 lg:pb-14">
					<div className="mx-auto max-w-7xl lg:px-8">
						<div className="lg:grid lg:grid-cols-2 lg:gap-8">
							<div className="mt-12 mb-16 sm:mb-12 lg:m-0">
								<div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
									<Image
										src={cats}
										height={550}
										width={550}
										className="rounded-full"
									/>
								</div>
							</div>
							<div className="max-w-md px-4 mx-auto text-center sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center md:pt-5 sm:pt-20 lg:px-0 lg:text-left">
								<div className="lg:py-24">
									<h1 className=" text-3xl tracking-tight text-white sm:mt-5 sm:text-6xl mt-25 xl:text-7xl">
										<span className="block">
											About <i className=" text-[#c65825]">#BOO Party</i>
										</span>
									</h1>

									<div className="">
										<div className="sm:mx-auto sm:max-w-7xl">
											<p className="text-sm text-white/70 sm:mt-4">
												Have you not figured out how to spend the most spooky
												night ever? Join us at #boo party! Where spooky stories
												will be told, production will fail and horrific streams
												will be made!
											</p>
										</div>
									</div>
									<div className="mt-3">
										<div className="sm:mx-auto sm:max-w-7xl flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-6 h-6 bg-white rounded-full p-1 lg:mt-3"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
												/>
											</svg>

											<p className="text-sm text-white/70 sm:mt-4 ml-2">
												OCT 31st
											</p>
										</div>
									</div>
									<div className="mt-3">
										<div className="sm:mx-auto sm:max-w-7xl flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-6 h-6 bg-white rounded-full p-1 lg:mt-3"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
												/>
											</svg>
											<p className="text-sm text-white/70 sm:mt-4 ml-2">
												Online
											</p>
										</div>
									</div>
									<div className="mt-3">
										<div className="sm:mx-auto sm:max-w-7xl flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-6 h-6  bg-white rounded-full p-1 lg:mt-3"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
												/>
											</svg>
											<p className="text-sm text-white/70 sm:mt-5 ml-2">Free</p>
										</div>
									</div>
									<div className="mt-5 ml-1">
										<div className="sm:mx-auto sm:max-w-7xl  list-none">
											<li
												className={router.asPath == "/#ticket" ? "active" : ""}
											>
												<button className=" text-white/70 bg-[#cf5925]  shadow-lg pl-5 pr-5 pt-1.5 pb-1.5 rounded-full">
													<Link href="#ticket">
														<a className="font-sm text-white">Get Tickets</a>
													</Link>
												</button>
											</li>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About