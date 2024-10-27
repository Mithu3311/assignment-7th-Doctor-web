import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Our Services</h1>

      <p className="text-lg text-gray-800 text-center max-w-2xl mb-10">
        DrChat ke zariye, hum patients aur doctors ko asaan aur fast connection ki sahulat faraham karte hain. Niche hamare kuch key services ka zikr hai jo hum apne users ke liye offer karte hain.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        
        {/* Service 1: Online Consultation */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Online Consultation</h2>
          <p className="text-gray-700 text-center">
            Patients apni health ke mutabiq doctors se online consult kar sakte hain aur apne health issues discuss kar sakte hain.
          </p>
        </div>

        {/* Service 2: Appointment Booking */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Appointment Booking</h2>
          <p className="text-gray-700 text-center">
            Hamara platform appointment booking ko easy aur seamless banata hai taki patients bina kisi delay ke doctors ke sath appointment fix kar saken.
          </p>
        </div>

        {/* Service 3: Health Records Management */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Health Records Management</h2>
          <p className="text-gray-700 text-center">
            Patients apne health records aur history ko securely manage aur access kar sakte hain jab bhi zarurat ho.
          </p>
        </div>

        {/* Service 4: Prescription Support */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Prescription Support</h2>
          <p className="text-gray-700 text-center">
            Doctors patients ke liye digital prescriptions bhi provide karte hain jo safe aur accessible hain.
          </p>
        </div>

        {/* Service 5: 24/7 Support */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">24/7 Support</h2>
          <p className="text-gray-700 text-center">
            Hum 24/7 support provide karte hain taki users ko kabhi bhi help ki zarurat ho, woh easily contact kar saken.
          </p>
        </div>

        {/* Service 6: Specialist Directory */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Specialist Directory</h2>
          <p className="text-gray-700 text-center">
            Platform pe specialists ka directory bhi available hai jo patients ko unke specific health issues ke liye relevant doctors se milne mein madad karta hai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
