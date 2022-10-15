import React from 'react'
import ghoul from "../public/Ghouls.png";
import Image from "next/image";


function Mission() {
  return (
		<div>
			<section className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-top">
				<div className="h-full pt-10 bg-transparent sm:pt-16 lg:overflow-hidden lg:pt-16 lg:pb-14">
					<div className="mx-auto max-w-7xl lg:px-8">
						<div className="lg:grid lg:grid-cols-2 lg:gap-8">
							<div className="max-w-md px-4 mx-auto text-center sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
								<div className="lg:py-24">
									<h1 className="mt-4 text-3xl tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
										<span className="block">
											#Boo <i className=" text-[#c65825]">Party</i>
										</span>
									</h1>

									<div className="">
										<div className="sm:mx-auto sm:max-w-7xl">
											<p className="text-sm text-[#9B9E21] sm:mt-4">
												WHY SHOULD YOU GO TO THE BOO PARTY?
											</p>
										</div>
									</div>
									<div className="mt-5 flex">
										<div className="bg-[#545DBd] w-1 rounded-full m-0.5"></div>

										<div className="p-2 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-top">
											<p className="text-sm text-white/70 text-bold text-lg">
												Fun
											</p>
										</div>
									</div>
									<div className="mt-5 ml-7 flex">
										<div className="bg-[#C84C1B] w-1 rounded-lg m-0.5 "></div>
										<div className="p-2 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-top">
											<p className="text-sm text-white/70 text-bold text-lg">
												Spooky stories
											</p>
										</div>
									</div>
									<div className="mt-5 flex">
										<div className="bg-[#CBAB52] w-1 rounded-full m-0.5"></div>

										<div className="p-2 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-top">
											<p className="text-sm text-white/70 text-lg text-bold ">
												Horror movie streaming
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
									<Image
										src={ghoul}
										height={500}
										width={500}
										className="rounded-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Mission