import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">About DrChat</h1>

      <p className="text-lg text-gray-800 text-center max-w-2xl mb-8">
        DrChat ek online platform hai jo doctors aur patients ke darmiyan seedha rabta aur appointment booking ki sahulat faraham karta hai. Humara mission hai ke healthcare ko sab ke liye accessible aur convenient banaya jaaye, taki log apni sehat ka behtareen khayal rakh saken.
      </p>

      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl">
        
        {/* Mission Section */}
        <div className="flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 text-center">
            DrChat ka mission ye hai ke healthcare ko sab ke liye accessible aur asaan banaya jaye aur doctors aur patients ke beech ka faasla kam kiya jaye.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h2>
          <p className="text-gray-700 text-center">
            DrChat ka vision hai ke ek aisi duniya banayi jaye jahan log apne doctors ke sath easily connect ho saken aur apne health issues ko solve kar saken bina kisi mushkil ke.
          </p>
        </div>

        {/* Values Section */}
        <div className="flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Values</h2>
          <p className="text-gray-700 text-center">
            Hum patients aur doctors ki privacy ka khayal rakhte hain aur unki zarurat ko sab se pehle rakhte hain. Hum health aur wellness ko promote karte hain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;