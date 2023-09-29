import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './dojo-logo (1).png'

export default function NavBar() {
  return (
    <nav>
        <Image
            src={logo}
            alt='Dojo helpdesk logo'
            width={70}
            quality={100}
            placeholder='blur'
        />
          <h1>Dojo Helpdesk</h1>
          <Link href='/'>Dashboard</Link>
          <Link href='/tickets'>   Tickets</Link>
          <Link href='/tickets/create'>Create</Link>
        </nav>
  )
}
