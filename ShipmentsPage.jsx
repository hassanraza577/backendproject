import React, { useState } from 'react';
import './ShipmentsPage.css';
import ShipmentForm from './ShipmentForm'; // Import the ShipmentForm component

const ShipmentsPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [shipmentData, setShipmentData] = useState([]); // Initial shipment data as an empty array

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const addShipment = (newShipment) => {
    setShipmentData([...shipmentData, newShipment]);
    setIsFormVisible(false);
  };

  return (
    <div>
      <h1 className='mainpageheading'>Shipments</h1>
      <div className="shipment-buttons">
        <button className="export-button">Export</button>
        <button className="shipment-button" onClick={toggleFormVisibility}>
          New Shipment
        </button>
      </div>
      {isFormVisible && <ShipmentForm addShipment={addShipment} />}
  
      <table className="shipment-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Order id</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Brand</th>
            <th>Location</th>
            <th>Tracking Number</th>
            <th>City</th>
            <th>Status</th>
            <th>Contact No</th>
            <th>Customer City</th>
          </tr>
        </thead>
        <tbody>
          {shipmentData.map((shipment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{shipment.orderId}</td>
              <td>{shipment.date}</td>
              <td>{shipment.amount}</td>
              <td>{shipment.brand}</td>
              <td>{shipment.location}</td>
              <td>{shipment.trackingNumber}</td>
              <td>{shipment.city}</td>
              <td>{shipment.status}</td>
              <td>{shipment.contactNo}</td>
              <td>{shipment.customerCity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentsPage;
