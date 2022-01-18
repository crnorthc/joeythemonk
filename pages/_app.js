import { useState, useEffect } from "react"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	const [loaded, setLoaded] = useState(false)
	const [photos, setPhotos] = useState(null)

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
			<div className="the-pages">
				<Component {...pageProps} loaded={loaded} photos={photos} />
			</div>			
		</div>
	)
}

export default MyApp

