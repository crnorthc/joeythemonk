import Sidebar from "../components/sidebar"
import Footer from "../components/footer"
import ReactPlayer from "react-player/file"


export default function MusicVideos() {
	const config = {
		file: {
			forceVideo: true
		}
	}

    const music_video = (
		<div className="flex flex-wrap justify-center sm:justify-around myFull:justify-between myFull:pl-10 sm:mr-4">			
			<div className="px-2 py-2 sm:w-2/5 myFull:w-30">
				<ReactPlayer light="https://joeythemonk.s3.amazonaws.com/media/commercial/video5.jpg" url="https://joeythemonk.s3.amazonaws.com/media/commercial/video5.mp4" previewTabIndex={1} height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">SERVPRO Emma&apos;s Cafe Testimonial</h1>
			</div>
			<div className="px-2 py-2 sm:w-2/5 myFull:w-30">
				<ReactPlayer light="https://joeythemonk.s3.amazonaws.com/media/commercial/video4.jpg" url="https://joeythemonk.s3.amazonaws.com/media/commercial/video4.mp4" height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">SERVPRO Hazmat Antimicrobial Spraying</h1>
			</div>
			<div className="px-2 py-2 sm:w-2/5 myFull:w-30">
				<ReactPlayer light="https://joeythemonk.s3.amazonaws.com/media/commercial/video3.jpg" url="https://joeythemonk.s3.amazonaws.com/media/commercial/video3.mp4" height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">SERVPRO Mold Demolition</h1>
			</div>
			<div className="px-2 py-2 sm:w-2/5 myFull:w-30">
				<ReactPlayer light="https://joeythemonk.s3.amazonaws.com/media/commercial/video2.jpg" url="https://joeythemonk.s3.amazonaws.com/media/commercial/video2.mp4" height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">SERVPRO Barnhouse Dust Cleaning</h1>
			</div>
			<div className="px-2 py-2 sm:w-2/5 myFull:w-30">
				<ReactPlayer light="https://joeythemonk.s3.amazonaws.com/media/commercial/video1.jpg" url="https://joeythemonk.s3.amazonaws.com/media/commercial/video1.mp4" height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">SERVPRO x Operation Delta Dogs Commercial</h1>
			</div>
            <div className='hidden sm:block w-3/4 sm:w-2/5 myFull:w-30'/>
		</div>
	)

	return (
		<div className="flex flex-col items-center mb-12 w-full">			
			<img className="md:hidden mt-20 w-3/4 sm:px-20" src="./JTM_logo.svg"/>
			<div className="myFull:w-myFull mb-12">
				<div className="flex flex-row justify-between pt-8">
					<Sidebar />			
					<div className="flex flex-col items-center md:items-start myFull:items-end w-full mt-8 sm:mt-16">
						<div className="w-full flex flex-col items-center items-center mb-4 sm:mb-6">
							<img src="https://joeythemonk.s3.amazonaws.com/media/commercial/Servpro.webp" />                            
                            <div className="flex px-6 sm:pl-12 pt-6 flex-row w-full justify-start">
                                <div className="flex flex-col sm:flex-row pb-1 border-b-2 border-rust">
                                    <h1 className="text-white font-bold pr-2 mr-2 sm:border-r-2 border-rust">SERVPRO OF NASHUA</h1>
                                    <h1 className="text-rust font-bold">DIGITAL MARKETING PROJECT (2021)</h1>
                                </div>                               
                            </div>
                            <div className="poppins px-6 sm:pl-12 mt-2  myFull:mr-0 text-white">
                                I was contracted by SERVPRO of Nashua, to help startup their online presence with the goal of generating 
                                more online leads to the business. To achieve this goal, I created branding advertisements to be used on 
                                their social media pages. 
                            </div>
						</div>         
                        <div className="flex flex-row justify-around w-full mb-8 mt-2 px-4 sm:pl-10">
                                <div className="flex flex-col items-center justify-around">
                                    <img src="./eye.svg" className="h-8 sm:py-0 sm:h-8 stats2:h-10 stats:h-18 mb-2"/>
                                    <h1 className="text-rust text-xs sm:text-md stats2:text-xl stats:text-2xl mb-1">Impressions</h1>
                                    <h1 className="text-white text-xs sm:text-sm stats2:text-lg stats:text-xl">46,473 views</h1>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <img src="./phone.svg" className="h-8 sm:h-10 stats2:h-12 stats:h-18 mb-2"/>
                                    <h1 className="text-rust text-xs sm:text-md stats2:text-xl stats:text-2xl mb-1">Total Reach</h1>
                                    <h1 className="text-white text-xs sm:text-sm stats2:text-lg stats:text-xl">11,480 users</h1>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <img src="./thumb.svg" className="h-8 sm:h-10 stats2:h-12 stats:h-18 mb-2"/>
                                    <h1 className="text-rust text-xs sm:text-md stats2:text-xl stats:text-2xl mb-1">Engagements</h1>
                                    <h1 className="text-white text-xs sm:text-sm stats2:text-lg stats:text-xl">3,945 likes</h1>
                                </div>
                                <div className="flex flex-col items-center justify-around">
                                    <img src="./pointer.svg" className="h-8 sm:h-10 stats2:h-12 stats:h-18 mb-2"/>
                                    <h1 className="text-rust text-xs sm:text-md stats2:text-xl stats:text-2xl mb-1">Consumption</h1>
                                    <h1 className="text-white text-xs sm:text-sm stats2:text-lg stats:text-xl">3,790 clicks</h1>
                                </div>
                            </div>                                    
						{music_video}          
					</div>			
				</div>
			</div>								
			<Footer />					
		</div>
	)
}
