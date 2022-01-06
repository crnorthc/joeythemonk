import { CopyToClipboard } from "react-copy-to-clipboard"
import { useState } from "react"
import { useRouter } from "next/router"
import a from "next/link"

export default function Sidebar(props) {
    const [sideAction, setSideAction] = useState('hidden')
	const router = useRouter()

    const handleSidebar = (show) => {
		if (show) {
			setSideAction('slide-out')

			var sidebarTimer = setTimeout(() => {
				setSideAction(null)
			}, 300)
		}
		else {
			setSideAction('slide-in')

			var sidebarTimer = setTimeout(() => {
				setSideAction('hidden')
			}, 300)
		}

		return () => {
			clearTimeout(sidebarTimer)
		}
 	}

    const sidebar = (
		<div className={"fixed z-30 right-0 top-0 w-1/2 sm:w-1/3 h-screen md:hidden overflow-x-hidden " + sideAction}>
			<div className="flex flex-col items-center w-full h-full bg-white/50 backdrop-blur-lg">
				<button onClick={() => handleSidebar(false)} className="flex flex-row justify-end w-full">
					<img className='w-8 mt-4 mr-4' src='./sidebar.svg'/>
				</button>
				<div className="flex flex-col items-end mt-12 w-3/4">
					<a href="/" className={"w-full hover:text-rust border-b border-rust pb-2 mb-2 text-right " + `${router.pathname == '/' ? 'text-rust font-bold' : 'text-white'}`}>
						Home
					</a>
					<a href="/musicvideos" className={"w-full hover:text-rust border-b border-rust pb-2 mb-2 text-right " + `${router.pathname == '/musicvideos' ? 'text-rust font-bold' : 'text-white'}`}>
						Music Videos
					</a>
					<a href="/commercial" className={"w-full hover:text-rust border-b border-rust pb-2 mb-2 text-right " + `${router.pathname == '/commercial' ? 'text-rust font-bold' : 'text-white'}`}>
						Commercial
					</a>
					<a href="/about" className={"w-full hover:text-rust text-right "  + `${router.pathname == '/about' ? 'text-rust font-bold' : 'text-white'}`}>
						About
					</a>
				</div>
			</div>			
		</div>
	)

	return (
        <>
            <button onClick={() => handleSidebar(true)} className="md:hidden">
				<img className="fixed w-8 top-4 right-4" src='./sidebar.svg' />
			</button>
            <div className="hidden md:flex flex-col mt-12 w-1/4">
                <div className="flex flex-col items-start">
                    <img className="w-52" src="./JTM_logo.svg"/>
                    <div className="flex border-l-2 border-gray-400 pl-1 flex-col items-start mt-12 text-white text-xs">
                        <div className="flex border-l border-gray-400 pl-4 flex-col items-start text-white text-xs">
                            <a href="/" className={"font-bold hover:text-rust pb-4 " + `${router.pathname == '/' ? 'text-rust' : 'text-white'}`}>HOME</a>
                            <a href="/musicvideos" className={"font-bold hover:text-rust pb-4 "  + `${router.pathname == '/musicvideos' ? 'text-rust' : 'text-white'}`}>MUSIC VIDEO</a>
                            <a href="/commercial" className={"font-bold hover:text-rust pb-4 "  + `${router.pathname == '/commercial' ? 'text-rust' : 'text-white'}`}>COMMERCIAL</a>
                            <a href='/about' className={"font-bold hover:text-rust " + `${router.pathname == '/about' ? 'text-rust' : 'text-white'}`}>ABOUT</a>
                        </div>							
                    </div>
                </div>	
                <div className="flex flex-col mt-20">							
                    <div className="flex flex-row mb-2">
                        <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/user/Zxvism/videos"><img className='w-6 mr-4' src="./youtube.webp"/></a>	
                        <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/joeythemonkk/"><img className='w-6 mr-4' src="./insta.webp"/></a>															
                        <a target="_blank" rel="noreferrer noopener" href="https://www.tumblr.com/blog/joeythemonk"><img className='w-6 mr-4' src="./tumblr.webp"/></a>									
                        <CopyToClipboard text={"joey.singhavong@gmail.com"} onCopy={() => alert('Email Copied!')}>
                            <img className='w-6 cursor-pointer' src="./email.webp"/>
                        </CopyToClipboard>								
                    </div>	
                    <p className='text-white text-xs'>Copyright © All rights reserved.</p>						
                </div>			
            </div>
            {sidebar}
        </>       		
	)
}
