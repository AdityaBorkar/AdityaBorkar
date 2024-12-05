import LinkButton_PositionAware from '@/components/LinkButton_PositionAware'
import { FiDownload } from 'react-icons/fi'

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-[50rem] py-20'>
      <div className='my-8 flex flex-row justify-between'>
        <h2 className='text-2xl text-white font-semibold'>
          <img
            src='/assets/waving-hand-emoji.png'
            alt=''
            className='inline-block h-10 mr-2 -mt-1'
          />
          Hi, I'm Aditya Borkar
        </h2>
        <LinkButton_PositionAware
          href='/resume'
          target='_blank'
          rel='noreferrer'
        >
          <FiDownload className='inline-block size-4 mr-1 -mt-1' />
          Download Resume
        </LinkButton_PositionAware>
      </div>

      <P>
        I engineer interfaces, products, and systems, from early concepts to
        full-fledged products, by partnering closely with designers, research,
        and engineering peers. I have done a bit of everything from branding,
        web design, copywriting, UX, design systems, and design engineering. My
        goal is to use technology to help people thrive in their work. Spending
        a lot of time digging into engineers&#x2019; heads and passionate about
        how software and methods can impact the outcomes of our work, I
        progressively shifted my focus from design systems to developer
        experience, which later led me to joining Linear in late 2023.
      </P>

      <div className='w-full h-[40rem] mx-auto mt-8 grid grid-cols-3 grid-rows-3 gap-4'>
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
        {/* images: Instead, showcase your team members, behind-the-scenes glimpses,
        and real customer stories. This humanizes your brand, making it
        relatable and trustworthy. When people see the human side of your
        business, they are more likely to engage and connect with you! */}
      </div>

      <H3>How did I discover Tech?</H3>
      <P>
        I discovered about CODE University, Berlin and got admitted but could
        not join it due to Covid-19 pandemic. Instead of defering education, I
        planned to continue to learn online and build my own career in tech.
        While exploring different languages - Java, Python, PHP, C++ and others;
        I struck upon JavaScript, it powered me to create beautiful user
        interfaces and ship to multiple devices cross-platforms easily within
        days. With the rising popularity of PWAs and new features coming in the
        web, I decided to pursue Web Software Engineering as a career.
      </P>

      <H3>How did I discover Web & Product Development?</H3>
      <P>
        I discovered about CODE University, Berlin and got admitted but could
        not join it due to Covid-19 pandemic. Instead of defering education, I
        planned to continue to learn online and build my own career in tech.
        While exploring different languages - Java, Python, PHP, C++ and others;
        I struck upon JavaScript, it powered me to create beautiful user
        interfaces and ship to multiple devices cross-platforms easily within
        days. With the rising popularity of PWAs and new features coming in the
        web, I decided to pursue Web Software Engineering as a career.
      </P>

      <P>
        I have worked with Raspberry Pi Foundation to work initially on NTTT and
        Translation Programme to make computing accessible to young and
        underpriviledged children.
      </P>

      <H3>Things I do in my free time!</H3>
      <P>
        I like to play chess in my free time. I love to cycle to get my daily
        dose of happiness. I believe in green techniques and strive to make my
        life more sustainable and impackful for the humankind.
        <br />
        My hobbies and my achievements in my hobbies. // Major projects I did?
        // Professional Background: Briefly describe your experience and
        expertise in web engineering. // Skills and Specializations: Highlight
        key skills and areas of specialization. // Notable Projects: Mention a
        few significant projects or clients. // Education and Certifications:
        List relevant qualifications and certifications. // Personal Touch:
        Share a bit about your interests or hobbies to make it more personable.
      </P>

      <div className='w-full h-[40rem] mx-auto mt-8 grid grid-cols-3 grid-rows-3 gap-4'>
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
        {/* images: Instead, showcase your team members, behind-the-scenes glimpses,
        and real customer stories. This humanizes your brand, making it
        relatable and trustworthy. When people see the human side of your
        business, they are more likely to engage and connect with you! */}
      </div>
    </div>
  )
}

function H3(props: {
  children: React.ReactNode
}) {
  return <h3 className='font-semibold text-lg mt-16'>{props.children}</h3>
}

function P(props: {
  children: React.ReactNode
}) {
  return (
    <p className='text-base text-pretty text-neutral-300 mt-4'>
      {props.children}
    </p>
  )
}
