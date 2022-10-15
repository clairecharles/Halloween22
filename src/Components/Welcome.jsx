import React from 'react';
import ghoul from "../public/Ghouls.png";
import witch from "../public/witch.jpg";
import { useState } from "react";
// import {forest} from '../public/forest.mp4'
import Link from "next/link";
import {useRouter} from 'next/router'
import Image from "next/image";
import zombies from "../public/Zombies.png";

function Welcome() {
	const router = useRouter();

  return (
		<section className="">
			<div className=" pt-10 bg-transparent sm:pt-16 lg:pt-16 lg:pb-14">
				<div className="mx-auto max-w-7xl lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:gap-8">
						<div className="max-w-md px-4 mx-auto text-center sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
							<div className="lg:py-24">
								<h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6.5xl">
									<span className="block">Halloween</span>
									<span className="text-[#c65825]">Spooky Fun Night</span>
								</h1>
								<p className="mt-5 text-base text-[#9B9E21] text-sm">
									OCTOBER 31, START AT 7PM
								</p>

								<div className="">
									<div className="sm:mx-auto sm:max-w-7xl">
										<p className="text-sm text-white/70 sm:mt-4">
											The sacriest night for the most beautiful audience! A
											night of fun, horror and games. This night you can let
											your demons out!
										</p>
									</div>
								</div>
								<div className="mt-5 ml-1">
									<div className="sm:mx-auto sm:max-w-7xl list-none">
										<li className={router.asPath == "/#ticket" ? "active" : ""}>
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
						<div className="mt-12 -mb-16 sm:mb-15 lg:m-0">
							<div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
								<Image
									src={zombies}
									alt="zombies image"
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Welcome