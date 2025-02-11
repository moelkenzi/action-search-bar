import Image from "next/image"
import Link from "next/link"
import React from 'react'

function Footer() {
  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-zinc-400">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 dark:hover:text-white transition-colors"
          href="/"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="dark:invert"
          />
          Learn
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 dark:hover:text-white transition-colors"
          href="/"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="dark:invert"
          />
          Examples
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 dark:hover:text-white transition-colors"
          href="/"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="dark:invert"
          />
          Go to nextjs.org →
        </Link>
      </div>
  )
}

export default Footer