import React , {useContext} from 'react'
import { captainDataContext } from '../Context/captainContext'

function CaptainDetails() {
  const captain = useContext(captainDataContext)


  return (
    <div>
         <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947" alt="" />
          <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname}</h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>₹2039.30</h4> 
        <p className='text-sm font-medium text-gray-600'>Earned</p>
        </div>
      </div>

      <div className='flex flex-row p-3 bg-gray-200 mt-4 rounded-xl justify-center gap-5 items-start'>
        <div className='text-center '>
        <i className="text-3xl mb-2 font-thin ri-time-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center '>
        <i class="text-3xl mb-2 font-thin ri-speed-up-line"></i>
        <h5 className='text-lg font-medium'>12.7 Km</h5>
        <p className='text-sm text-gray-600'>Total Distance</p>
        </div>
        <div className='text-center '>
        <i class="text-3xl mb-2 font-extralight ri-booklet-line"></i>
        <h5 className='text-lg font-medium'>10</h5>
        <p className='text-sm text-gray-600'>Total Jobs</p>
        </div>
      </div>
    </div>
 )
}

export default CaptainDetails