import swiming from '../../assets/swimming.png'
import play from '../../assets/playground.png'
import classRoom from '../../assets/class.png'

export const Qzone = ()=>{
    return(
        <div className=' bg-base-300 p-4'>
          <h1 className="text-base-content font-bold mb-4">Q-Zone</h1>
          <img className='mx-auto mb-3' src={swiming} alt="" />
          <img className='mx-auto mb-3' src={classRoom} alt="" />
          <img className='mx-auto mb-3' src={play} alt="" />
        </div>
    )
}