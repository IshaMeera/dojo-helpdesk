import Link from 'next/link'
import React from 'react'

async function getTickets(){
    //imitate delay 3seconds delay message
    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch(' http://localhost:4000/tickets',{
      next:{
        revalidate: 0
      }
    }   )

    return response.json()
}

export default async function TicketList() {
    const tickets = await getTickets()
  return (
    <>
     <div className="flex justify-center my-8">
      <Link href="/tickets/create">
        <button className="btn-primary">Create Your Ticket Now!</button>
      </Link>
    </div>
    {tickets.map((ticket)=>(
        <div key={ticket.id} className='card my-5'>
            <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority 
            </div>
            </Link>
        </div>
    ))}
    {
        tickets.length === 0 && (
            <p className='text-center'>There are no open tickets, yay!</p>
        )
    }
    </>
  )
}
