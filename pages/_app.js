import { useState, useEffect } from "react"
import Head from "next/head";
import "../styles/globals.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }) {
	const [loaded, setLoaded] = useState(false)
	const [photos, setPhotos] = useState(null)
	const [visited, setVisited] = useState(false)

	useEffect(() => {
		var home_photos = []
		for (let i = 1; i < 30; i++) {
			const img = new Image()

			if (i == 29) {
				img.onload = () => {
					setLoaded(true)
				}
			}
			img.src = 'https://joeythemonk.s3.amazonaws.com/media/home/' + i + '.webp'
			
			home_photos.push(
				<img key={'image_' + i} src={'https://joeythemonk.s3.amazonaws.com/media/home/' + i + '.webp'} />
			)
		}
		setPhotos(home_photos)
	}, [])

	return (
		<div className="bg">
			<Head>
				<title>Joey The Monk</title>
				<meta name="description" content="Joey Singhavong - Director, Editor, Visual Artist in the Boston area. Specializing in commercial and music video production." />
				<link rel='shortcut icon' type='image/svg' href='./JTM_icon.svg' />
			</Head>
			<div className="the-pages">
				<Component {...pageProps} loaded={loaded} photos={photos} visited={visited} setVisited={setVisited} />
			</div>			
		</div>
	)
}

export default MyApp

