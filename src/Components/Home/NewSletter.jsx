import { FaArrowRight} from 'react-icons/fa6';

const NewSletter = () => {

    return (
        <div className=" bg-[#1B6392] space-y-8">
            <div className="text-center space-y-3">
                <h2 className="text-[32px] font-bold text-white">Subscribe to our newsletter</h2>
                <p  className="text-[16px] text-white max-w-[500px] text-center m-auto font-normal opacity-60">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            </div>

            <div className="relative w-full max-w-[646px] lg:w-[646px] md:w-[400px] sm:w-full m-auto">
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="w-full h-[48px] pr-10 pl-5 py-3.5 rounded-tl-sm border focus:outline-none focus:ring-0 rounded-[3px]"
                />
                {/* search button */}
                <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white flex bg-[#FA8232] p-2 mt-1/2 rounded-[2px]">
                    <p>Subscribe</p>
                    <FaArrowRight className="ml-2 mt-1"/>
                </button>
                </div>

                {/* devider */}
                <div className='max-w-[424px] h-[1px] bg-white opacity-15 m-auto'></div>

                <div className='flex max-w-[552px] m-auto justify-between opacity-60 flex-col md:flex-row items-center`'>
                    <img src="./google.png" alt="" className='max-w-[72px] max-h-[72px] m-auto' />
                    <img src="./Frame.png" alt="" className='max-w-[72px] max-h-[72px] m-auto' />
                    <img src="./philips.png" alt="" className='max-w-[72px] max-h-[72px] m-auto' />
                    <img src="./toshiba.png" alt=""  className='max-w-[72px] max-h-[72px] m-auto'/>
                    <img src="./samsung.png" alt="" className='max-w-[72px] max-h-[72px] m-auto' />
                </div>
            </div>
    )
}

export default NewSletter