import React,{useEffect, useState} from 'react';
import Link from "next/link";
import { useRouter, router } from "next/router";
// import { HashLink as Link } from "react-router-hash-link";
// 
function Navbar() {
	const [navbar, setNavbar] = useState(false);
		const router = useRouter();

// 	useEffect(() => {
// 		const About = '/about';
// 	    const path = router.asPath;
//     if (path && path.includes('/#')) {
//       const sectionName = path.replace('/#', '');
//       switch (sectionName) {
//         case 'About':
//           About.current.scrollIntoView({ behavior: 'smooth' });
//           break;
//         case 'myOtherSection':
//           myOtherSection.current.scrollIntoView({ behavior: 'smooth' });
//           break;
//         default:
//           break;
//       }
//     }
//   }, [router.asPath]);


  return (
		<nav className="w-full bg-[#221827]">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
				<div>
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
						<a href="#">
							<h2 className="text-2xl text-white font-bold">
								#BOO <span className="text-[#D66025]">Party</span>
							</h2>
						</a>
						<div className="md:hidden">
							<button
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 text-white"
										viewBox="0 0 20 20"
										className="w-6 h-6 text-white"
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
										className="w-6 h-6 text-white"
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
								className={router.asPath == "/#mission" ? "active" : ""}
								style={{ color: "white" }}
							>
								<Link href="#mission">
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
		</nav>
	);
}

export default Navbar