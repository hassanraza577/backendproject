import React, { useState } from 'react';
import './ShipmentForm.css'; // Import the CSS file

const ShipmentForm = ({ addShipment }) => {
  const generateRandomOrderId = () => {
    return Math.floor(Math.random() * 1000000); // Generate a random order ID
  };

  const generateRandomTrackingNumber = () => {
    return Math.floor(Math.random() * 10000000000000).toString(); // Generate a random 13-digit tracking number
  };

  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    brand: '',
    location: '',
    city: '',
    status: '',
    contactNo: '',
    customerCity: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newShipment = {
      sNo: addShipment.length + 1, // Calculate the S.No based on the existing shipments
      orderId: generateRandomOrderId(),
      date: formData.date,
      amount: formData.amount,
      brand: formData.brand,
      location: formData.location,
      trackingNumber: generateRandomTrackingNumber(),
      city: formData.city,
      status: formData.status,
      contactNo: formData.contactNo,
      customerCity: formData.customerCity,
    };
    addShipment(newShipment); // Call the addShipment function with the new shipment data
    // Clear the form after submission
    setFormData({
      date: '',
      amount: '',
      brand: '',
      location: '',
      city: '',
      status: '',
      contactNo: '',
      customerCity: '',
    });
  };

  return (
    <div className="shipment-form-overlay">
      <div className="shipment-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Date"
            required
          />
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Amount"
            required
          />
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            placeholder="Brand"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            placeholder="Status"
            required
          />
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            placeholder="Contact No"
            required
          />
          <input
            type="text"
            name="customerCity"
            value={formData.customerCity}
            onChange={handleInputChange}
            placeholder="Customer City"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ShipmentForm;
