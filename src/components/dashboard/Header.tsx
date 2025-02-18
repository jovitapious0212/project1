import React from "react";

function Header() {
  return (
    <div className="bg-black flex justify-between items-center p-4">
     
      <div className="flex items-center">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" 
          alt="Logo" 
          className="h-10 w-10 mr-4"
        />
        <div className="text-white text-lg font-semibold">Tailwind CSS</div>
      </div>

      <div className="flex space-x-8 text-white text-lg font-medium">
        <div>Docs</div>
        <div>Components</div>
        <div>Blog</div>
        <div>Showcase</div>
      </div>
    </div>
  );
}

export default Header;