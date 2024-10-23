import React from 'react';

const Report = ({ tickets }) => {
  const totalTicketsSold = tickets.reduce((acc, ticket) => acc + ticket.ticketQuantity, 0);
  const totalRevenue = tickets.reduce((acc, ticket) => acc + ticket.totalPrice, 0).toFixed(2);

  return (
    <div>
      <h2>End of Day Report</h2>
      <p>Total Tickets Sold: {totalTicketsSold}</p>
      <p>Total Revenue Generated: ${totalRevenue}</p>
    </div>
  );
};

export default Report;
