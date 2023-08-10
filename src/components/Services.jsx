import servicesA from '../assets/services-1.png'
import servicesB from '../assets/services-2.png'
import servicesC from '../assets/services-3.png'
import servicesD from '../assets/services-4.png'
import servicesBackground from '../assets/service-background.jpg'

export default function Services (){
    return(
        <div>
            <div className='relative'>
                <div>
                    <img src={servicesBackground} className='absolute w-full h-full  -z-40 backdrop-brightness-100'/>
                </div>
                <div class="absolute inset-0 bg-black bg-opacity-70">
                </div>
                <div className="flex flex-col justify-center text-white gap-4 py-20 px-10">
                    <h1 className=" text-5xl text-center mb-4 z-20"> Our Services </h1>
                    <p className="text-2xl text-center z-20">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex justify-center py-20 px-14 gap-8'>
                <div className='flex flex-col justify-center items-center py-10 px-12 rounded bg-white z-20'>
                    <img src={servicesA} className='h-20 w-20 mb-3'/>
                    <h2 className='my-4'>Adoption</h2>
                    <p className='mt-3 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ratione est deserunt et nisi hic odit, eos velit autem facilis iusto, ipsam molestias</p>
                </div>
                <div className='flex flex-col justify-center items-center py-10 px-12 rounded bg-white z-20'>
                    <img src={servicesB} className='h-20 w-20 text-center mb-3'/>
                    <h2 className='my-4'>Dog walking</h2>
                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ratione est deserunt et nisi hic odit, eos velit autem facilis iusto, ipsam molestias</p>
                </div>
                <div className='flex flex-col justify-center items-center py-10 px-12 rounded bg-white z-20'>
                    <img src={servicesC} className='h-20 w-20 text-center mb-3'/>
                    <h2 className='my-4'>Dog training</h2>
                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ratione est deserunt et nisi hic odit, eos velit autem facilis iusto, ipsam molestias</p>
                </div>
                <div className='flex flex-col justify-center items-center py-10 px-12 rounded bg-white z-20'>
                    <img src={servicesD} className='h-20 w-20 text-center mb-3'/>
                    <h2 className='my-4'>Volunteer</h2>
                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ratione est deserunt et nisi hic odit, eos velit autem facilis iusto, ipsam molestias</p>
                </div>
                </div>           
            </div>
        </div>
        
    )
}