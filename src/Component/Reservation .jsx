import React, { useState } from 'react';

import InputArea from '../Component/InputArea';
import SelectInput from '../Component/SelectInput';
import TextArea from '../Component/TextArea';
import Booking from '../Component/Booking';

import {
  partySizeOptions,
  tableRefOptions,
  timeOptions
} from '../assets/assets';

const Reservation = () => {

  const [isModalOpen, setIsmodalOpen] = useState(false);

  const [formdata, setformData] = useState({
    fullName: "",
    Phone: "",
    email: "",
    specialRequest: "",
    time: "",
    partySize: "",
    tableRef: "",
  });

  // HANDLE CHANGE

  const handleChange = (e) => {

    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  // HANDLE SUBMIT

  const handleSumit = async (e) => {

    e.preventDefault();

    const cartItems =
      JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {

      alert("Please Add Food Items");

      return;
    }

    const response = await fetch(
      "https://foodie-backend-4enr.onrender.com/api/orders",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          customerName: formdata.fullName,
          items: cartItems,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    alert("Reservation Confirmed");

    localStorage.removeItem("cart");

    setIsmodalOpen(true);

    setformData({
      fullName: "",
      Phone: "",
      email: "",
      specialRequest: "",
      time: "",
      partySize: "",
      tableRef: "",
    });

  };

  // CLOSE MODAL

  const closeModal = () => {

    setIsmodalOpen(false);

  };

  return (

    <div
      id='reservation'
      className='w-full bg-orange-100 py-10'
    >

      <div className='container mx-auto px-6'>

        {/* HEADING */}

        <div className='text-center mb-12'>

          <h1 className='text-3xl sm:text-4xl mb-4 font-bold text-black'>
            Make a Reservation
          </h1>

          <div className='w-20 h-1 bg-red-700 mx-auto'></div>

          <p className='text-gray-700 mb-6'>
            Book your table in advance
          </p>

        </div>

        {/* FORM */}

        <div className='max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow'>

          <form onSubmit={handleSumit}>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

              {/* DATE */}

              <InputArea
                label="Date"
                name="date"
                type="date"
                value={formdata.date}
                onChange={handleChange}
              />

              {/* TIME */}

              <SelectInput
                label="Time"
                name="time"
                value={formdata.time}
                onChange={handleChange}
                options={timeOptions}
              />

              {/* PARTY SIZE */}

              <SelectInput
                label="Party Size"
                name="partySize"
                value={formdata.partySize}
                onChange={handleChange}
                options={partySizeOptions}
              />

              {/* TABLE */}

              <SelectInput
                label="Table Reference"
                name="tableRef"
                value={formdata.tableRef}
                onChange={handleChange}
                options={tableRefOptions}
              />

              {/* NAME */}

              <InputArea
                label="Full Name"
                name="fullName"
                value={formdata.fullName}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />

              {/* PHONE */}

              <InputArea
                label="Phone No"
                name="Phone"
                type="tel"
                value={formdata.Phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
              />

              {/* EMAIL */}

              <InputArea
                label="Email Address"
                name="email"
                type="email"
                value={formdata.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />

              {/* TEXT AREA */}

              <TextArea
                label="Special Request"
                name="specialRequest"
                value={formdata.specialRequest}
                onChange={handleChange}
                placeholder="Any Special Request"
              />

            </div>

            {/* BUTTON */}

            <button
              type='submit'
              className='mt-4 w-full bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer'
            >
              Confirm Reservation
            </button>

          </form>

          {/* MODAL */}

          <Booking
            isOpen={isModalOpen}
            isClose={closeModal}
          />

        </div>

      </div>

    </div>
  );
};

export default Reservation;