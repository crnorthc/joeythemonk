import Sidebar from "../components/sidebar"
import Footer from "../components/footer"
import ReactPlayer from "react-player/file"
import { useState, useEffect } from "react"
import Swiper from "swiper"

const contentful = require('contentful')


export default function Home(props) {
	const [page, setPage] = useState(0)
	const [photo, setPhoto] = useState(null)
	const [action, setAction] = useState(null)
	const [video, setVideo] = useState(null)
	const [help, setHelp] = useState(false)

	// Contentful client
	const client = contentful.createClient({
		space: '2tm5nmp1y6j8',
		accessToken: 'eGNhESDpGkcBiLbYB7YEnwGPktm5sZdoXCu-qCW6Yx8'
	})

	// Showcase video config
	const config = {
		file: {
			forceVideo: true
		}
	}

	// Mobile photo gallery
	const swiper = new Swiper('.swiper', {
		speed: 400,
		spaceBetween: 100,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		  },
	})

	// Get showcase video
	useEffect(() => {
		client.getEntry('2M1BYoc3BsAl6TPDLON8n9').then((res) => {
			setVideo(res.fields.video.fields.file.url)
		})
	}, [])

	// Mobile showcase swipe animation
	useEffect(() => {
		if (props.loaded) {
			setHelp(true)
			const helper = setTimeout(() => {
				setHelp(false)
			}, 2900)
			return () => clearTimeout(helper)
		}		
	}, [props.loaded])

	// Desktop photo grid
	const get_photo_grid = () => {
		var _grids = []
		var grid = []
		var current_grid = 0
		for (let i = 1; i < 30; i++) {	
			grid.push(
				<button onClick={() => setPhoto(i - 1)} className='hover:opacity-70'>
					{props.photos[i - 1]}
				</button>					
			)

			if (i % 9 == 0) {					
				_grids.push(
					<div className={"relative z-10 grid grid-rows-3 grid-flow-col gap-2 photo_grid " + `${page == current_grid ? action : 'hidden'}`}>
						{grid}
					</div>
				)
				grid = []
				current_grid = current_grid + 1
			}
		}

		if (grid.length != 0) {
			_grids.push(
				<div className={"relative z-10 grid grid-rows-3 grid-flow-col gap-2 photo_grid " + `${page == current_grid ? action : 'hidden'}`}>
					{grid}
				</div>
			)
		}

		return _grids
	}

	// Switch photo grid page
	const page_switch = (forward) => {
		if (photo == null) {
			if (forward) {
				if (page == 2) {
					setAction('fade-out')
	
					var fade = setTimeout(() => {
						setPage(0)
						setAction(null)
					}, 500)			
				}
				else {
					setAction('fade-out')
	
					var fade = setTimeout(() => {
						setPage(page + 1)
						setAction(null)
					}, 500)		
				}
			}
			else {
				if (page == 0) {
					setAction('fade-out')
	
					var fade = setTimeout(() => {
						setPage(2)
						setAction(null)
					}, 500)		
				}
				else {
					setAction('fade-out')
	
					var fade = setTimeout(() => {
						setPage(page - 1)
						setAction(null)
					}, 500)		
				}
			}
		}		
		else {
			if (forward) {
				if (photo == 28) {
					setPhoto(0)
				}
				else {
					setPhoto(photo + 1)
				}
			}
			else {
				if (photo == 0) {
					setPhoto(28)
				}
				else {
					setPhoto(photo - 1)
				}
			}
		}
		return () => {
			clearTimeout(fade)
		}
	}

	// Single photo gallery desktop
	const get_photos = () => {
		return (
			<button onClick={() => setPhoto(null)} className='hover:opacity-70'>
				{props.photos[photo]}
			</button>	
		)
	}

	// Mobile photo gallery
	const get_slides = () => {
		var grid = []
		for (let i = 1; i < 30; i++) {	
			grid.push(
				<button className='swiper-slide'>
					{props.photos[i - 1]}
				</button>					
			)
		}
		return (
			<div className="swiper">
				<div className="swiper-wrapper">
					{grid}
				</div>				
				<div className="swiper-pagination"></div>
			</div>			
		)
	}

	const loading = (
		<div className={"loading-screen flex flex-col justify-center items-center " + `${!props.loaded ? 'z-30' : 'hide-loading'}`}>
			<div className="flex flex-row">
				<div className="dot dot1" />
				<div className="dot dot2 mx-2" />
				<div className="dot dot3" />
			</div>
			<h1 className='text-white text-2xl mt-8 poppins'>Gathering Media</h1>
		</div>
	)

	// Opacity when scroll down main video
	// Ipad not working
	return (
		<div className="flex flex-col items-center mb-20 phone:mb-12">
			{props.visited ? null : loading}
			<img className="md:hidden mt-20 w-3/4 sm:px-20 mb-8" src="./JTM_logo.svg"/>			
			{video == null ? 
				<div className="flex flex-row items-start justify-center bg-black">
					<img src="https://joeythemonk.s3.amazonaws.com/media/home/5.webp" />
				</div>
			:
				<div>
					<div className="hidden phone:flex flex-row items-start justify-center bg-black">
						<ReactPlayer url={video} height={"65%"} width={'90%'} playing={true} loop={true} muted={true} config={config}/>
					</div>
					<div className="flex phone:hidden flex-row items-start justify-center bg-black">
						<ReactPlayer url={video} height={"100%"} width={'100%'} playing={true} loop={true} muted={true} config={config}/>
					</div>
				</div>				
			}				
			<div className="max-w-myFull relative z-10">
				<div className="flex flex-row justify-between pt-8">
					<Sidebar />	
					{!props.loaded ? null : 
						<div className="w-full md:w-3/4 flex flex-row justify-center">
							<div className="hidden phone:flex flex-row items-center w-full mt-12 md:mt-24">
								<button onClick={() => page_switch(true)} className='relative text-4xl text-white px-2 opacity-50 hover:opacity-100'><img src='./left_arrow.svg' /></button>
								{props.loaded ? photo !== null ? get_photos() : get_photo_grid() : null}
								<button onClick={() => page_switch()} className='relative text-4xl text-white px-2 opacity-50 hover:opacity-100'><img src='./right_arrow.svg' /></button>
							</div>
							<div className="w-screen overflow-x-hidden px-4 mt-8 flex phone:hidden flex-row justify-center">
								<div className={help ? "swipe-indicator" : "hidden"} />
								<div className="overflow-x-hidden relative z-10">
									{get_slides()}
								</div>
							</div>														
						</div>						
					}								
				</div>					
			</div>
			<Footer />					
		</div>
	)
}
