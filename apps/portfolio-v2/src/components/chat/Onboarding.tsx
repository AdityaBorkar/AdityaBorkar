import { useRef } from 'react'

export default function Onboarding({
  setFirstName,
}: { setFirstName: (firstName: string) => void }) {
  const firstNameRef = useRef<HTMLInputElement>(null)
  //   TODO: detect ip geolocation and use it for greeting only
  return (
    <main className='grow px-10'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='max-w-96 -mt-24'>
          <h4 className='text-2xl text-text-primary font-semibold'>
            [Emoji] Hola, Good Evening!
          </h4>
          <div className='mt-4'>
            This chatbot is designed and developed by Aditya Borkar as a side
            project. It is aimed to be conversational and help you with your
            queries. It has access to limited information about me. The project
            is still experimental.
          </div>
          <div className='mt-4 text-xs text-text-tertiary'>
            By continuing, you agree to our
            <a
              href='/policy'
              target='_blank'
              rel='noreferrer'
              className='font-medium hover:underline underline-offset-4'
            >
              Terms and Privacy Policy.
            </a>
          </div>
          <div className='mt-8 flex items-center justify-center gap-2 flex-row'>
            <input
              ref={firstNameRef}
              className='py-3 rounded-full grow px-5 bg-bg-primary'
              placeholder='Enter your First Name'
            />
            <button
              type='button'
              className='hover:bg-green-700 py-3 px-4 rounded-full bg-green-600 text-white font-semibold'
              onClick={() => {
                const firstName = firstNameRef.current?.value
                if (firstName) setFirstName(firstName)
              }}
            >
              Chat
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
