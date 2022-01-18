import Sidebar from "../components/sidebar"
import Footer from "../components/footer"
import ReactPlayer from "react-player/file"
import { useState, useEffect } from "react"

const contentful = require('contentful')


export default function Home(props) {
	const [page, setPage] = useState(0)
	const [photo, setPhoto] = useState(null)
	const [action, setAction] = useState(null)
	const [video, setVideo] = useState(null)

	const client = contentful.createClient({
		space: '2tm5nmp1y6j8',
		accessToken: 'eGNhESDpGkcBiLbYB7YEnwGPktm5sZdoXCu-qCW6Yx8'
	})

	useEffect(() => {
		client.getEntry('2M1BYoc3BsAl6TPDLON8n9').then((res) => {
			setVideo(res.fields.video.fields.file.url)
		})
	}, [])

	const config = {
		file: {
			forceVideo: true
		}
	}

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
				if (photo == 26) {
					setPhoto(1)
				}
				else {
					setPhoto(photo + 1)
				}
			}
			else {
				if (photo == 1) {
					setPhoto(26)
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

	const get_photos = () => {
		return (
			<button onClick={() => setPhoto(null)} className='hover:opacity-70'>
				{props.photos[photo]}
			</button>	
		)
	}


	const loading = (
		<div className={"loading-screen flex flex-col justify-center items-center " + `${!props.loaded ? 'z-30' : 'hide-loading z-0'}`}>
			<div className="flex flex-row">
				<div className="dot dot1" />
				<div className="dot dot2 mx-2" />
				<div className="dot dot3" />
			</div>
			<h1 className='text-white text-2xl mt-8 poppins'>Gathering Media</h1>
		</div>
	)

	return (
		<div className="flex flex-col items-center mb-12">
			{loading}
			<img className="md:hidden mt-20 w-3/4 sm:px-20 mb-8" src="./JTM_logo.svg"/>
			<div className="flex flex-row items-start justify-center bg-black">
				{video == null ? 
					<img src="https://joeythemonk.s3.amazonaws.com/media/home/5.webp" height={'55%'} width={'75%'} />
				:
					<ReactPlayer url={video} height={"55%"} width={'75%'} playing={true} loop={true} muted={true} config={config}/>
				}				
			</div>
			<div className="max-w-myFull relative z-10">
				<div className="flex flex-row justify-between pt-8">
					<Sidebar />	
					{!props.loaded ? null : 
						<div className="flex flex-row items-center w-full md:w-3/4 mt-12 md:mt-24">
							<button onClick={() => page_switch(true)} className='relative text-4xl text-white px-2 hover:opacity-50'>&lt;</button>
							{props.loaded ? photo !== null ? get_photos() : get_photo_grid() : null}
							<button onClick={() => page_switch()} className='relative text-4xl text-white px-2 hover:opacity-50'>&gt;</button>
						</div>
					}								
				</div>					
			</div>
			<Footer />					
		</div>
	)
}
