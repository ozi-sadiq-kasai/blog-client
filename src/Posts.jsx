import workmode from './assets/workmode.jpg'

const Posts = () => {
  return (
    <section className='grid grid-cols-3 gap-5'>
    <div>
      <img src={workmode} alt="workmode" className='h-full w-full' />
    </div>
    <div className='flex flex-col justify-center  col-span-2 '>
    <h2 className=' text-3xl text-blue-400 font-bold'>workmode activated</h2>
    <p>
      <a href="" className='mr-2 font-bold text-sm'>ozi's blog</a>
      <time>2024-04-29 9:32</time>
    </p>
    <p className='mt-5 text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit eligendi doloremque odio facere
       blanditiis cumque quod quis voluptas, beatae itaque, dolor quo? Quae incidunt ad culpa accusamus aliquam odio.
    </p>
    </div>
   
  </section>
  )
}

export default Posts