import Link from 'next/link'
import Footer from './(root)/Footer'
import Header from './(root)/Header'

export default function Page404() {
  // TODO: Analytics
  // TODO: Add Latest Articles

  // TODO: https://developers.google.com/search/blog/2009/10/fetch-as-googlebot-and-malware-details
  // Fetch as Google Bot and make sure the site accurately returns 404 HTTPS only for googlebot
  return (
    <>
      <Header />
      <div className='h-screen max-w-[64rem] mx-auto py-48'>
        <h2 className='font-semibold leading-relaxed text-3xl'>
          The link you followed may be broken,
          <br /> or the page must not exist.
        </h2>

        <Link
          href='/'
          className='rounded-md text-lg text-neutral-300 bg-neutral-900 py-2 px-4 border border-neutral-800 mt-16 block w-fit'
        >
          Go to Home Page
        </Link>

        <div className='rounded-md text-lg text-neutral-400 font-medium mt-28 mb-12 block'>
          You can browse my Recent Blog Posts:
        </div>

        <div>ARTICLES LIST</div>
      </div>
      <Footer />
    </>
  )
}
