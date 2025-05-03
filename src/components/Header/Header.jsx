
import logo from '../../assets/logo.png'
export const Header = ()=>{
    return(
        <div className='flex flex-col justify-center items-center mt-10'>
           <div><img src={logo} alt="" /></div>
           <p className='font-semibold text-base-200 text-lg mt-2'>Journalism Without Fear or Favour</p>
           <p className='font-semibold text-base-200 text-lg mt-2'>Sunday, November 27, 2025</p>

        </div>
    )
}