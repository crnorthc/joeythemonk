import { CopyToClipboard } from "react-copy-to-clipboard"

export default function Footer() {

    

	return (
        <div className="md:hidden flex flex-row justify-center items-center fixed bottom-0 h-12 w-full bg-dark fixed bottom-0 z-50 mt-8">
            <div className="w-1/4 h-full flex flex-row justify-center items-center cursor-pointer">
                <CopyToClipboard text={"joey.singhavong@gmail.com"} onCopy={() => alert('Email Copied!')}>
                <img className="w-1/3 phone:w-1/4" src="./email_icon.svg" />
                </CopyToClipboard>
            </div>			
            <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/user/Zxvism/videos" className="w-1/4 h-full flex flex-row justify-center items-center">
                <img className="w-1/3 phone:w-1/4" src="./youtube_icon.svg" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/joeythemonkk/" className="w-1/4 h-full flex flex-row justify-center items-center">
                <img className="w-1/4 phone:w-1/5" src="./insta_icon.svg" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.tumblr.com/blog/joeythemonk" className="w-1/4 h-full flex flex-row justify-center items-center">
                <img className="w-1/4 phone:w-1/5" src="./tumblr.svg" />
            </a>
        </div>
	)
}
