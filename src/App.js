import React, { useState } from 'react';
import TicketForm from './component/TicketForm'; 
import Report from './component/TicketSummary';


const App = () => {
  const [tickets, setTickets] = useState([]);

  const handleTicketPurchase = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };

  return (
    <div>
      <h1>Event Ticketing System</h1>
      <TicketForm onPurchase={handleTicketPurchase} />
      {/* <TicketSummary tickets={tickets} /> */}
      <Report tickets={tickets} />
    </div>
  );
};

export default App;
