import { Navbar } from "../Components";
import { Footer } from "../Components";

export default function WebXLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-[#221827]">
			<Navbar />
			<div className="flex flex-1 md:flex-row">
				<main className="flex-1">{children}</main>
			</div>
			<Footer />
		</div>
	);
}
