import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image src={Logo} 
        alt="Helpdesk Logo" 
        width={70} q
        uality={100}
        placeholder='blur'
        />
        <h1>Maynard Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
