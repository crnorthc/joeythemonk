import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<div className="">
			<video className='video-bg' playsInline autoPlay muted loop>
				<source src="./background_video.mp4" type="video/mp4"/>
			</video>
			<div className="the-pages">
				<Component {...pageProps} />
			</div>			
		</div>
	)
}

export default MyApp
