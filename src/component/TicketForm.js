import React, { useState } from 'react';

const TicketForm = ({ onPurchase }) => {
  const [userName, setUserName] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [seatCategory, setSeatCategory] = useState('Standard');
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const seatPrices = {
    Standard: 50,
    Premium: 100,
    VIP: 200,
  };

  const calculateTotalPrice = () => {
    const seatPrice = seatPrices[seatCategory];
    const totalPrice = seatPrice * ticketQuantity;

    // Apply discount for bulk purchases
    let discount = 0;
    if (ticketQuantity >= 5 && ticketQuantity < 10) discount = 0.1; // 10% discount
    if (ticketQuantity >= 10) discount = 0.2; // 20% discount

    return totalPrice - totalPrice * discount;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalPrice = calculateTotalPrice();
    const newTicket = {
      userName,
      eventName,
      eventDate,
      seatCategory,
      ticketQuantity,
      totalPrice,
    };

    onPurchase(newTicket);

    // Reset form
    setUserName('');
    setEventName('');
    setEventDate('');
    setSeatCategory('Standard');
    setTicketQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User Name:</label>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />

      <label>Event Name:</label>
      <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />

      <label>Event Date:</label>
      <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />

      <label>Seat Category:</label>
      <select value={seatCategory} onChange={(e) => setSeatCategory(e.target.value)}>
        <option value="Standard">Standard - $50</option>
        <option value="Premium">Premium - $100</option>
        <option value="VIP">VIP - $200</option>
      </select>

      <label>Ticket Quantity:</label>
      <input type="number" value={ticketQuantity} min="1" onChange={(e) => setTicketQuantity(e.target.value)} required />

      <button type="submit">Purchase Tickets</button>
    </form>
  );
};

export default TicketForm;
