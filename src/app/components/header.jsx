'use client'
import { useState } from "react";

export const Header = ({ session = null }) => {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
	return (
		<>
			<div className="flex h-128 items-center justify-between border-b border-gray-400 py-4 mx-4 mb-4 sm:mx-8">
				<a href="/">
					<img src="https://designbygio.it/images/logo.png" alt="logo" />
				</a>
				<nav>
					<section className="MOBILE-MENU flex lg:hidden">
						<div
							className="HAMBURGER-ICON space-y-2"
							onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
						>
							<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
							<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
							<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						</div>

						<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
							<div
								className="CROSS-ICON absolute top-0 right-0 px-8 py-4"
								onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
							>
								<svg
									className="h-8 w-8 text-gray-600"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</div>
							<ul className="flex flex-col items-center gap-4 min-h-[250px] text-black">
								<li className="border-b border-gray-400 uppercase">
									<a href="/contact">Profile</a>
								</li>
								<li className="border-b border-gray-400 uppercase">
									{
										!session ?
											<div>SignIn</div> : <div>SignOut</div>
									}
								</li>
							</ul>
						</div>
					</section>

					<ul className="hidden space-x-8 lg:flex">
						<li className="border-b border-gray-400 my-8 uppercase">
							<a href="/contact">Profile</a>
						</li>
						<li className="border-b border-gray-400 my-8 uppercase">
							{
								!session ?
									<div>SignIn</div> : <div>SignOut</div>
							}
						</li>
					</ul>
				</nav>
				<style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
			</div>
		</>
	);
}