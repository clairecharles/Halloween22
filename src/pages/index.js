import Head from "next/head";
import { Navbar, Welcome, About, Ticket, Footer, Mission } from "../Components";

export default function index() {
	return (
		<>
			<div className="bg-[#221827]">
				<Head>
					<title>#BOO Party</title>
					<meta name="description" content="A spooky halloween website" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Welcome />
				<About />
				<Mission/>
				<Ticket />
			</div>
		</>
	);
}
