import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({
  selectedDate,
  setSelectedDate,
  deliveryDate,
  setDeliveryDate,
  returnDate,
  setReturnDate,
}) => {
  // Sample upcoming dates array
  const upcomingDates = [
    new Date("2024-06-02"),
    new Date("2024-06-03"),
    new Date("2024-06-04"),
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);

    // Calculate delivery and return dates
    const delivery = new Date(date);
    delivery.setDate(date.getDate() - 1);

    const returnD = new Date(date);
    returnD.setDate(date.getDate() + 1);

    setDeliveryDate(delivery);
    setReturnDate(returnD);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  // Calculate tomorrow's date
  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  };

  const tomorrow = getTomorrowDate();

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        excludeDates={upcomingDates}
        minDate={tomorrow}
      />
      {selectedDate && (
        <div>
          <p>Delivery Date: {formatDate(deliveryDate)}</p>
          <p>Event Date: {formatDate(selectedDate)}</p>
          <p>Return Date: {formatDate(returnDate)}</p>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
