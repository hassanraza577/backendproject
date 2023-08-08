import React, { useState, useEffect } from 'react';
import './DashboardPage.css';

const DashboardPage = ({ shipmentData }) => {
  const [totalShipments, setTotalShipments] = useState(0);
  const [totalCODAmount, setTotalCODAmount] = useState(0);

  useEffect(() => {
    // Calculate total shipments and total COD amount added in the last 24 hours
    const now = new Date();
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setDate(now.getDate() - 1);

    const shipmentsAddedIn24Hours = shipmentData.filter((shipment) => {
      const shipmentDate = new Date(shipment.date);
      return shipmentDate >= twentyFourHoursAgo && shipmentDate <= now;
    });

    const totalShipmentsAdded = shipmentsAddedIn24Hours.length;
    const totalCODAmountAdded = shipmentsAddedIn24Hours.reduce(
      (totalAmount, shipment) => totalAmount + shipment.amount,
      0
    );

    setTotalShipments(totalShipmentsAdded);
    setTotalCODAmount(totalCODAmountAdded);
  }, [shipmentData]);

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Shipments</h2>
        <p>{totalShipments}</p>
      </div>
      <div className="dashboard-box">
        <h2>Total COD RS</h2>
        <p>{totalCODAmount}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
