import React from 'react';
import Gambar from '../../assets/Button.png';
import FB from '../../assets/FB.png';
import YT from '../../assets/YT.png';
import IG from '../../assets/IG.png';

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[445px] relative">
        <div className="content__up">
          <img className="absolute top-[75.5px] left-[120px] w-[54px] h-[53px]" src={Gambar} alt="logoImage" />
          <h1 className="absolute top-[88px] left-[190px] font-semibold text-[20px] leading-8 tracking-[0.75px] text-[#f67704]">SerbaSerbi</h1>
          <div className="content__menu">
            <h2 className="absolute top-[75px] left-[429px] font-semibold text-[18px] leading-8 tracking-[0.75px] text-[#404040]">Menu</h2>
            <h4 className="absolute top-[121px] left-[429px] font-normal text-[15px] leading-6 tracking-[0.75px] text-[#404040]">Home</h4>
          </div>
          <div className="content__bantuan">
            <h2 className="absolute top-[75px] left-[563px] font-semibold text-[18px] leading-8 tracking-[0.75px] text-[#404040]">Bantuan</h2>
            <h4 className="absolute top-[121px] left-[563px] font-normal text-[15px] leading-6 tracking-[0.75px] text-[#404040]">Pusat Bantuan</h4>
            <h4 className="absolute top-[154px] left-[563px] font-normal text-[15px] leading-6 tracking-[0.75px] text-[#404040]">Privacy Policy</h4>
          </div>
        </div>
        <div className="absolute left-[120px] right-[120px] top-[317px] border-2 border-solid border-[#ededed]"></div>
        <p className="absolute top-[358px] left-[120px] font-medium text-[13px] leading-[22px] tracking-[0.25px] text-[#868686]">© 2022 Sislog. All Rights Reserved.</p>
        <div className="flex absolute gap-3 top-[357px] right-[120px] ">
          <img src={FB} alt="FBImage" />
          <img src={YT} alt="YTImage" />
          <img src={IG} alt="IGImage" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
