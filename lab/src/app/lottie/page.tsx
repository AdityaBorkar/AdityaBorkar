'use client'

import { useRef } from 'react'
import Image from 'next/image'
// import { HiLink, HiOutlineFolderOpen } from 'react-icons/hi2'
import { BiLink } from 'react-icons/bi'
// import Lottie from '@lottielab/lottie-player/react'
import { toast } from 'sonner'
import debounce from 'debounce'

import LottieFilesLogo from '@/lib/logo/lottiefiles_for_white.svg'
import WinkingFace from '@/lib/res/winking_face.gif'
import { handleJsonUrl } from './utils/handleJsonUrl'
import { handleHtmlUrl } from './utils/handleHtmlUrl'

export default function LottiePage() {
  // TODO - Support Multiple File Uploads and Processing

  //   const UrlInputRef = useRef<HTMLInputElement>(null)
  const ErrorRef = useRef<HTMLDivElement>(null)
  const DownloadButtonRef = useRef<HTMLAnchorElement>(null)

  async function handleUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!ErrorRef.current || !DownloadButtonRef.current) return

    const url = e.target.value
    if (
      !url.startsWith('https://cdn.lottielab.com/l/') &&
      !url.endsWith('.json') &&
      !url.endsWith('.html') &&
      url
    ) {
      ErrorRef.current.style.visibility = 'visible'
    } else {
      ErrorRef.current.style.visibility = 'hidden'
      const { name, json } = url.endsWith('.json')
        ? await handleJsonUrl(url)
        : await handleHtmlUrl(url)

      const blob = new Blob([JSON.stringify(json)], {
        type: 'application/json',
      })
      const downloadUrl = URL.createObjectURL(blob)
      DownloadButtonRef.current.href = downloadUrl
      DownloadButtonRef.current.download = `${name}.json`
      DownloadButtonRef.current.click()
      URL.revokeObjectURL(downloadUrl)

      toast.success('Compressed JSON file successfully!')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen cursor-default select-none'>
      <h1 className='font-semibold text-center text-4xl group'>
        Compress
        <Image
          src={LottieFilesLogo}
          alt='Lottie Files Logo'
          className='size-10 inline-block mx-2 align-bottom'
        />
        Lottie JSON files
        <span className='block text-2xl mt-2 text-neutral-700 opacity-20 group-hover:opacity-100 transition-all'>
          (with watermark removal
          <Image
            src={WinkingFace}
            alt=';)'
            className='size-8 inline-block ml-1 align-bottom'
          />
          )
        </span>
      </h1>

      <div className='my-8 text-center text-sm text-orange-700 font-medium py-2 px-4 rounded-lg border border-orange-700/20 bg-orange-100'>
        Note - This compression is less optimal than Lottie LiveLink.
      </div>

      <div className='mt-8 w-full max-w-[36rem] flex flex-col items-center'>
        <div className='w-full relative'>
          <BiLink className='size-6 text-gray-400 absolute top-3 left-4' />
          <input
            className='w-full text-gray-800 font-medium py-3 pl-12 pr-6 rounded-full border border-gray-300 bg-gray-100'
            placeholder='Paste "Lottie JSON URL" here'
            // placeholder='Paste "Lottie Embed Link" or "Lottie JSON URL" here'
            onChange={debounce(handleUrlChange, 500)}
          />
          <div className='absolute top-3 right-4 backdrop-blur-sm w-fit bg-gray-100/50'>
            Loading
          </div>
          {/* https://cdn.lottielab.com/l/7hGN5H8FNg3bU8.html */}
          {/* https://cdn.lottielab.com/l/7hGN5H8FNg3bU8.json */}

          {/* Checking File - loading state with shine effect */}
          <div
            ref={ErrorRef}
            className='text-red-500 font-medium text-center invisible text-sm mt-1'
          >
            The URL you paste is not a valid Lottie Embed Link or Lottie JSON
            URL
          </div>
        </div>

        {/* Paste the JSON Content /  */}

        {/* <div className='font-semibold text-lg text-gray-400 mb-6 mt-4'>OR</div> */}

        {/* <div className='w-full border-dashed border-2 border-gray-300/50 bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-500 min-h-[33vh]'>
          <HiOutlineFolderOpen className='size-24 text-gray-400' />
          <button
            type='button'
            className='text bg-teal-600 hover:bg-teal-700 active:scale-95 transition-all text-white font-medium py-2 px-6 rounded-lg my-4'
          >
            Upload File(s)
          </button>
          or drop Lottie JSON file here
        </div> */}
      </div>

      <a
        ref={DownloadButtonRef}
        download
        href='/lottie/test.json'
        className='hidden'
      >
        Download
      </a>
      {/* TODO - Perform the magic */}
      {/* Size Difference / Preview Animation */}
      {/* Download the compressed JSON */}

      {/* <Lottie
        src='/example.json'
        autoplay
      /> */}
    </div>
  )
}

// ! BROTLI is the way with JSON minifier
// TODO - Recommend less usage of decimal points
// TODO - Recommend removing data images
