import React from 'react';

const TicketSummary = ({ tickets }) => {
  return (
    <div>
      <h2>Ticket Purchase Summary</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            {ticket.userName} purchased {ticket.ticketQuantity} {ticket.seatCategory} tickets for {ticket.eventName} on {ticket.eventDate} - Total: ${ticket.totalPrice.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketSummary;
