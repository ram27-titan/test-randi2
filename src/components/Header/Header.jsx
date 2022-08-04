import React from 'react';
import Logo from '../../assets/Button.png';

const Header = () => {
  return (
    <div>
      <div className="flex items-center pt-[20px] pb-[120px] w-full h[96px] justify-center gap-6">
        <div className="absolute top-[12.5px] left-[120px]">
          <img src={Logo} alt="logo" />
        </div>
        <div className="w-[68px] absolute top-[6px] left-[190px]">
          <h1 className="font-semibold text-[20px] leading-8 text-[#f67704]">Serba Serbi</h1>
        </div>
        <div className="pt-[12px] pb-[20px]">
          <h3 className="font-semibold text-[17px] leading-7 tracking-[0.75px] text-[#f67704]">Home</h3>
        </div>
        <div className="pt-[12px] pb-[20px]">
          <h3 className="font-semibold text-[17px] leading-7 tracking-[0.75px] text-[#868686]">Article</h3>
        </div>
      </div>
      <div className="flex items-center">
        <div className="font-semibold h-14 mt-[80px] ml-[120px]">
          <h1 className="font-medium text-[48px] leading-[56px] tracking-[1px] text-[#f67704]">Article</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
