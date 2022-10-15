import React from 'react'
import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { RiGithubFill } from "react-icons/ri";
import {useRouter} from 'next/router'

function Footer() {
	const router = useRouter();
  return (
		<footer className="pt-9 mx-auto pb-5 bg-[#221827]">
			<div className="justify-between px-4  mx-auto lg:max-w-7xl md:items-center sm:items-center md:flex md:px-8">
				<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center  md:flex md:px-8">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							<a href="#">
								<h2 className="text-2xl text-white font-bold">
									#BOO <span className="text-[#D66025]">Party</span>
								</h2>
							</a>
						</div>
					</div>
				</div>
				<div>
					<div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
						<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
							<li
								className={router.asPath == "/" ? "active" : ""}
								style={{ color: "white" }}
							>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li
								className={router.asPath == "/" ? "active" : ""}
								style={{ color: "white" }}
							>
								<Link href="/#about">
									<a>About</a>
								</Link>
							</li>

							<li
								className={router.asPath == "/#about" ? "active" : ""}
								style={{ color: "white" }}
							>
								<Link href="#about">
									<a>Mission</a>
								</Link>
							</li>
							<li className={router.asPath == "/#ticket" ? "active" : ""}>
								<button className=" text-white/70 bg-[#cf5925]  shadow-lg pl-5 pr-5 pt-1.5 pb-1.5 rounded-full">
									<Link href="#ticket">
										<a className="font-sm text-white">Get Tickets</a>
									</Link>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<a href="https://twitter.com/claire__charles/">
					<AiFillTwitterCircle
						fontSize={18}
						color="#888"
						className="mx-1 mt-2"
					/>
				</a>
				<a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGmvTpQZCCjGxDLltswNgPddsnH">
					<SiGmail fontSize={18} color="#888" className="mx-2 mt-2" />
				</a>
				<a href="https://github.com/clairecharles">
					<RiGithubFill fontSize={18} color="#888" className="mx-1 mt-2" />
				</a>
			</div>
		</footer>
	);
}

export default Footer
