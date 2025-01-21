import LinkButton from '@/components/LinkButton'
import TESTIMONIALS from '@/content/testimonials'

// TODO: Add accessiblity and JSON-LD

export default function HomePage() {
  // const date = new Date().toLocaleString('en-US', {
  //   month: 'long',
  //   day: 'numeric',
  //   year: 'numeric',
  // })
  return (
    <div>
      <div className='pt-32 h-screen max-w-[60%] mx-auto grid grid-cols-[1fr_2fr] gap-16'>
        <div className='size-96 rounded-full mx-auto bg-neutral-900'>.</div>
        <div className='mt-4'>
          {/* TODO: Attract attention and convey how your skills can help deveopers/businesses */}
          <div className='mt-4 text-7xl leading-[1.2] text-neutral-200 font-bold'>
            Building products <br />
            for people
          </div>
          <div className='mt-4 text-xl leading-[1.5] text-neutral-400 font-semibold'>
            Full Stack Product Engineer.
            <br /> AI Engineer. Web Developer.
          </div>
          <div className='mt-12 text-base w-[100%] text-neutral-300 text-balance'>
            As a software engineer, I specialize in creating high-quality
            products with humanizing user experience, leveraging integration
            with APIs and libraries. My aim is to aid businesses in optimizing
            their processes for improved efficiency and ease of use.
          </div>

          <button
            type='submit'
            className='mt-16 py-2.5 px-8 border border-neutral-500 text-neutral-800 font-semibold rounded-lg bg-neutral-200'
          >
            Reach Out
          </button>
          {/* <div className='mt-4 text-green-500'>
            <div className='size-3 mr-2 inline-block bg-green-600 rounded-full' />
            Available (as of {date})
          </div> */}
        </div>
      </div>

      <h3 className='font-semibold text-3xl text-center'>
        About Me (in a nutshell)
      </h3>

      <div className='mt-16 mx-auto max-w-[50vw] grid grid-cols-4 grid-rows-5 rounded-2xl *:p-8 *:border-neutral-700 border border-neutral-700'>
        <div className='col-span-2 row-span-3 border-r border-b'>
          Motivation
          {/* Passion, Problem-solving, Learning mindset */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className='row-span-2 text-center col-span-2 border-b grid grid-cols-3 gap-y-8'>
          <div>
            <div className='font-semibold text-2xl my-2'>10+</div>
            Total Projects
          </div>
          <div>
            <div className='font-semibold text-2xl my-2'>4+</div>
            Happy Clients
          </div>
          <div>
            <div className='font-semibold text-2xl my-2'>10+</div>
            GitHub Stars
          </div>
          <div>
            <div className='font-semibold text-2xl my-2'>3+</div>
            Years of Expertise
          </div>
          <div>
            <div className='font-semibold text-2xl my-2'>600+</div>
            Commits
          </div>
          <div>
            <div className='font-semibold text-2xl my-2'>3000+</div>
            Coding Hours
          </div>
        </div>
        <div className='col-span-2 border-b'>
          {/* TODO: Work Process */}
          <p className='text-xs'>
            I am comfortable to work in many programming languages and
            cross-platforms. I love to solve problems using tech, for that, I am
            flexible to learn any language/library/frameworks/tools
          </p>
        </div>
        <div className='row-span-2 col-span-3 border-r'>
          Location
          {/* Timezones comfortable */}
        </div>
        <div className='row-span-2 '>{/* TODO: ADD DIVERSE TOP TECH */}</div>
      </div>

      <div className='max-w-[50vw] h-[40rem] mx-auto mt-8 grid grid-cols-3 grid-rows-3 gap-4'>
        <div className='rounded-xl'>
          <img src='' alt='' className='rounded-xl h-full' />
        </div>
        <div className='rounded-xl row-span-2'>
          <img src='' alt='' className='rounded-xl h-full' />
        </div>
        <div className='rounded-xl'>
          {/* Timelapse of me working on my desk with coffee from a picturesque
          place */}
        </div>
        <div className='rounded-xl row-span-2'>
          <img src='' alt='' className='rounded-xl h-full' />
        </div>
        <div className='rounded-xl row-span-2'>
          <img src='' alt='' className='rounded-xl h-full' />
        </div>
        <div className='rounded-xl'>
          <img src='' alt='' className='rounded-xl h-full' />
        </div>
      </div>

      <LinkButton href='/projects'>Read more About Me</LinkButton>

      <h3 className='mt-48 font-semibold text-3xl text-center'>
        Specialized Services
      </h3>

      <div className='mt-16'>
        <div className='mt-16 justify-center flex flex-col items-center gap-12'>
          {/* INTERACTIVE GIFS + ATTENTION GRABBING */}
          <div className='h-96 w-[400px] p-4 border border-neutral-800 rounded-2xl'>
            Full Stack Web Developer (Product Engineer)
          </div>
          {/* <div className='h-96 w-[400px] p-4 border border-neutral-800 rounded-2xl'></div> */}
          {/* <div className='h-96 w-[400px] p-4 border border-neutral-800 rounded-2xl'>
              Software Engineer (Web)
            </div> */}
          <div className='h-96 w-[400px] p-4 border border-neutral-800 rounded-2xl'>
            AI Engineer
          </div>
        </div>
      </div>

      <h3 className='mt-48 font-semibold text-3xl text-center'>
        Selected Work
      </h3>

      <div className='mt-16 justify-center flex flex-row gap-12'>
        <div className='h-96 w-[400px] p-4 border border-neutral-800 rounded-2xl'>
          Project
        </div>
        <div className='h-96 w-[400px] p-4 border border-neutral-800 rounded-2xl'>
          Project
        </div>
        <div className='h-96 w-[400px] p-4 border border-neutral-800 rounded-2xl'>
          Project
        </div>
      </div>

      <LinkButton href='/projects'>See all Projects</LinkButton>

      <h3 className='mt-48 font-semibold text-3xl text-center'>
        Client Testimonials
      </h3>

      {/* TODO: Carousal */}
      <div className='mt-16 flex flex-row justify-center gap-12 overflow-auto'>
        {TESTIMONIALS.map(testimonial => (
          <div
            key={testimonial.author}
            className='border border-neutral-900 text-neutral-300 rounded-lg p-4 w-[36rem]'
          >
            <p className='text-sm'>{testimonial.text}</p>
            <div className='mt-1 text-base'>
              <div className='font-medium'>{testimonial.author}</div>
              <div className='text-sm'>{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-48 mb-36'>
        <h3 className='font-semibold text-3xl text-center'>
          Selected Articles
        </h3>
        <div className='mt-16 flex flex-row justify-center gap-12'>
          <div className='h-72 w-96 rounded-xl p-4 border border-neutral-800'>
            Article
          </div>
          <div className='h-72 w-96 rounded-xl p-4 border border-neutral-800'>
            Article
          </div>
          <div className='h-72 w-96 rounded-xl p-4 border border-neutral-800'>
            Article
          </div>
        </div>

        <LinkButton href='/blog'>See all Blogs Posts</LinkButton>
      </div>

      {/* <div className='absolute bottom-10 right-10 border border-neutral-800 bg-neutral-900'>
        Reach Out
      </div> */}
      {/* <div className='mt-64 '>
        <h3 className='font-semibold text-3xl text-center'>Reach Out</h3>
        <form className='mt-16 text-center w-[20%] mx-auto'>
          <input
            name=''
            type='text'
            className='mb-8 border border-neutral-800 w-full rounded-md py-2 px-4 bg-neutral-900'
          />
          <textarea
            name=''
            className='mb-8 border border-neutral-800 w-full rounded-md py-2 px-4 bg-neutral-900'
          />
          <button
            type='submit'
            className='mt-8 px-4 py-2 bg-white mx-auto text-black rounded-md font-medium text-sm'
          >
            Send Inquiry
          </button>
        </form>
      </div> */}
    </div>
  )
}
