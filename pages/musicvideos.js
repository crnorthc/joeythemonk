import Sidebar from "../components/sidebar"
import Footer from "../components/footer"
import ReactPlayer from "react-player/file"


export default function MusicVideos() {
	const config = {
		file: {
			forceVideo: true
		}
	}

	const music_videos = (
		<div className="grid grid-cols-1 sm:grid-cols-2 myFull:grid-cols-3">
			<div className="px-2 py-2">
				<img height={"149px"} width={'265px'} src="./music_videos/video7.jpg" />
				<h1 className="poppins text-white text-xs mt-2">Don Zero - Damage ft. Skylarr</h1>
				<h1 className="poppins text-rust text-2xs mt-1">Release Date: March 2022</h1>
			</div>
			<div className="px-2 py-2">
				<img height={"149px"} width={'265px'} src="./music_videos/video6.jpg" />
				<h1 className="poppins text-white text-xs mt-2">Zaradiah - BROKEN GODZ</h1>
				<h1 className="poppins text-rust text-2xs mt-1">Release Date: January 2022</h1>
			</div>
			<div className="px-2 py-2">
				<ReactPlayer light="./music_videos/video5.jpg" url="./music_videos/video5.mp4" previewTabIndex={1} height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">Heart Eyed - Ohwow (prod.hoodwtch)</h1>
			</div>
			<div className="px-2 py-2">
				<ReactPlayer light="./music_videos/video4.jpg" url="./music_videos/video4.mp4" height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">Heart Eyed - Temple Song / I can&apos;t do this by myself</h1>
			</div>
			<div className="px-2 py-2">
				<ReactPlayer light="./music_videos/video3.jpg" url="./music_videos/video3.mp4" height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">Jamboree - Yung Bambi x Kamiyada+ ft. Chef Courage (Prod. J Allan)</h1>
			</div>
			<div className="px-2 py-2">
				<ReactPlayer light="./music_videos/video2.jpg" url="./music_videos/video2.mp4" height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">7th 7amurai -  Alone in Kyoto</h1>
			</div>
			<div className="px-2 pt-2">
				<ReactPlayer light="./music_videos/video1.jpg" url="./music_videos/video1.mp4" height={"149px"} width={'265px'} controls={true} config={config}/>
				<h1 className="poppins text-white w-video text-xs mt-2">Heart Eyed - Citrus Bud Karts (prod. Palmer)</h1>
			</div>
		</div>
	)

	return (
		<div className="flex flex-col items-center mb-12">			
			<img className="md:hidden mt-20 w-3/4 sm:px-20" src="./JTM_logo.svg"/>
			<div className="myFull:w-myFull mb-12">
				<div className="flex flex-row justify-between pt-8">
					<Sidebar />
					<div className="flex flex-col items-end w-full mt-8 sm:mt-16">
						<div className="w-full text-center items-center mb-4 sm:mb-8">
							<h1 className="text-2xl font-bold text-white">MUSIC VIDEOS</h1>
						</div>
						{music_videos}
					</div>			
				</div>
			</div>								
			<Footer />					
		</div>
	)
}
