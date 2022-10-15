import React, { useState } from 'react';
import ghoul from "../public/Ghouls.png";
import witch from "../public/witch.jpg";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import zombies from "../public/Zombies.png";
import axios from 'axios';
import cats from "../public/Cats.png";
import { useForm } from 'react-hook-form'
import Link from "next/link";
import Ghoul from "../public/Ghouls.png";

// toast.configure()

function Ticket() {
	const notify = () => {
		    toast("Sent! You will recive your tickets soon!", {
				position: toast.POSITION.TOP_CENTER
				});
	}
	const { handleSubmit, register, formState:{isSubmitting} } = useForm();
	const [successMessage, setSuccessMessage] = useState('');
	function onSubmit(data) {
		axios
			.post("https://eows84zv0px63rh.m.pipedream.net", data)
			.then((response) => {
				setSuccessMessage(`Your ticket will be with you soon :)`);
			})
			.catch((e) => console.error(e));
	}

  return (
		<div>
			<section className="h-full w-full bg-white">
				<div className="h-full pt-10 bg-transparent sm:pt-16 lg:overflow-hidden lg:pt-16 lg:pb-14">
					<h1 className="mt-4 text-3xl tracking-tight text-[#221827] text-center sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl">
						<span className="block">
							Join The #Boo <i className=" text-[#c65825]">Party</i>
						</span>
					</h1>
					<div className=" max-w-7xl lg:px-8">
						<div className="lg:grid lg:grid-cols-2 lg:gap-8">
							<div className="max-w-md px-4 mx-auto text-center sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
								<div className="lg:py-24 ">
									<form
										onSubmit={handleSubmit(onSubmit)}
										className="rounded-md bg-[#D66025] shadow-xl flex flex-col w-100 px-8 py-8 dark:bg-blue-500"
									>
										<h1 className="text-2xl text-center font-bold text-white">
											Get Ticket
										</h1>

										<label
											htmlFor="fullname"
											className="text-white font-light mt-8 dark:text-gray-50"
										>
											Your Name
											<span className="text-black-500 dark:text-gray-50">
												*
											</span>
										</label>
										<input
											type="text"
											name="fullname"
											required
											className="border-b p-1 focus:outline-none focus:rounded-md focus:ring-1 font-light text-gray-500"
										/>

										<label
											htmlFor="email"
											className="text-white  font-light mt-4 dark:text-gray-50"
										>
											E-mail<span className="text-black-500">*</span>
										</label>
										<input
											{...register("email")}
											required
											type="email"
											className="border-b p-1 focus:outline-none focus:rounded-md focus:ring-1 font-light text-gray-500"
										/>
										<label
											htmlFor="email"
											className="text-white  font-light mt-4 dark:text-gray-50"
										>
											Tickets<span className="text-black-500">*</span>
										</label>
										<input
											type="number"
											name="ticket"
											required
											className="border-b p-1 focus:outline-none focus:rounded-md focus:ring-1 font-light text-gray-500"
										/>

										<div className="flex items-center justify-center">
											<button
												className="px-8 mt-8 border-2 border-white text-gray-50 font-light rounded-md text-lg"
												type="submit"
												onClick={notify}
											>
												{isSubmitting ? "Submitting" : "Get Tickets"}
											</button>
											<ToastContainer />
										</div>
										<br />
										{successMessage && (
											<p className="text-white">{successMessage}</p>
										)}
									</form>
								</div>
							</div>
							<div className="sm:-mb-48">
								<div className="mt-36">
									<div className="sm:mx-auto sm:max-w-7xl">
										<p className="text-sm text-[#221827] sm:mt-4 font-bold text-2xl">
											Fill out the form and send us to get your ticket!
											Remember, it will be fun and scary! Muahahaha! muahahaha
										</p>
									</div>
								</div>
								<div className="max-w-md px-4 mt-5 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
									<Image
										src={witch}
										height={300}
										width={300}
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

export default Ticket