import Sidebar from "../components/sidebar"
import Footer from "../components/footer"
import { useEffect } from "react"


export default function About(props) {

    useEffect(() => {
        props.setVisited(true)
    }, [])

    const bio = (
        <div className="text-white poppins">
            <div className="mb-4">
                <t className="hidden sm:inline">&nbsp; &nbsp; &nbsp; &nbsp;</t> I began my creative journey as a kid 
                dabbling in 2D animations using Pivot Animator. Continuing this journey into high school, my friends 
                and I would create short films as a hobby - solidifying my love for the art. I continued filmmaking 
                as a hobby until the spring of 2021, when I quit my job to pursue my passion full-time.
            </div>   
            <div className="mb-4">
                <t className="hidden sm:inline">&nbsp; &nbsp; &nbsp; &nbsp;</t> Since then, I have started a career 
                helping other artists and businesses alike produce valuable, result-driven content, because to me 
                success means the growth of both my work and my clients.
            </div>          
            <div className="mb-4">
                <t className="hidden sm:inline">&nbsp; &nbsp; &nbsp; &nbsp;</t> I draw my inspiration from 
                passionate and ambitious individuals who are looking to push their brand or aesthetics to 
                the next level and if that individual is you, then please don&apos;t hesitate to reach out.
            </div> 
        </div>
    )

	return (
		<div className="flex flex-col items-center mb-12">			
			<img className="md:hidden mt-20 w-3/4 sm:px-20" src="./JTM_logo.svg"/>
			<div className="myFull:w-myFull mb-12">
				<div className="flex flex-row justify-between pt-8">
					<Sidebar />
                    <div className="w-full sm:mt-24">
                        <div className="px-6 sm:ml-4">
                            <img className="w-full sm:hidden mb-6" src="https://joeythemonk.s3.amazonaws.com/media/about/photo1.jpg"/>
                            <h1 className="text-rust hidden sm:block text-2xl mb-2 font-bold">Hello!</h1>
                            <div className="text-white text-lg font-light">
                                <t className="hidden sm:inline">&nbsp; &nbsp; &nbsp; &nbsp;</t>My name is <t className="font-bold">Phommachak Singhavong</t>, but you can call me Joey. I also go by my director&apos;s name, 
                                Joey The Monk. I am a freelance filmmaker and a young entrepreneur based out of Nashua, 
                                New Hampshire. You can often find me working around the Boston area.
                            </div>
                        </div>
                        <h1 className="hidden sm:block text-rust text-2xl font-bold ml-8 mt-8">Biography</h1> 
                        <div className="flex flex-col sm:flex-row w-full items-center">                            
                            <div className="flex flex-col w-full px-4 sm:px-0 sm:w-1/3 mt-2 sm:ml-8">                            
                                <img className="w-full hidden sm:block" src="https://joeythemonk.s3.amazonaws.com/media/about/photo1.jpg"/>
                                <h1 className="sm:hidden text-rust text-3xl mt-6 mb-4">Biography</h1>
                                <div className="flex flex-row">
                                    <div className="flex flex-col justify-between w-1/2 mt-2 mr-2">
                                        <img className="w-full" src="https://joeythemonk.s3.amazonaws.com/media/about/photo2.jpg"/>
                                        <img className="w-full" src="https://joeythemonk.s3.amazonaws.com/media/about/photo3.jpg"/>
                                    </div>
                                    <img className="w-1/2 mt-2" src="https://joeythemonk.s3.amazonaws.com/media/about/photo4.jpg"/>                                
                                </div>
                            </div>   
                            <div className="w-full sm:w-2/3 px-4 sm:ml-8 mt-8 sm:mt-4 sm:mr-4">                                                               
                                {bio}
                            </div>                                         
                        </div>	
                    </div>	                    
				</div>
			</div>								
			<Footer />					
		</div>
	)
}
