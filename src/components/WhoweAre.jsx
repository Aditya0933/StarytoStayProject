import WWR from '../assets/wwr.avif'

export default function WhoweAre(){
    return(
        <div className="relative">
            <div>
                <img src={WWR} className='absolute w-full h-full  -z-40 backdrop-brightness-100'/>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-70">
            </div>
            <div className="flex flex-col justify-center  py-20 px-10 text-black">
                <h1 className=" text-5xl text-center mb-4 text-white z-50"> Who We Are </h1>
                <p className="text-1xl text-center mt-4 text-white z-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas mollitia quam vitae, et alias repellat eos accusamus eum officia doloribus consequuntur dolorum perspiciatis, maxime neque magnam ratione. Aperiam, numquam temporibus.</p>
            </div>
        </div>
    )
}