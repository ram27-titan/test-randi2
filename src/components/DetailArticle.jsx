import React from 'react';
import Logo from '../assets/Button.png';
import Panah from '../assets/Panah.png';
import Share from '../assets/Share.png';
import Image1 from '../assets/Img1.png';
import Image2 from '../assets/Img2.png';
import Similar1 from '../assets/Similar1.png';
import Similar2 from '../assets/Similar2.png';
import Footer from '../components/Footer/Footer';

const DetailArticle = () => {
  return (
    <div>
      <div className="flex items-center pt-[20px] pb-[120px] w-full h-[96px] justify-center gap-[24px] ">
        <div className="logo">
          <img className=" absolute top-[12.5px] left-[120px] " src={Logo} alt="logo" />
        </div>
        <div className="w-[68px] absolute top-[6px] left-[190px] ">
          <h1 className="font-semibold text-[20px] leading-8 text-[#f67704]">Serba Serbi</h1>
        </div>
        <div className="pt-[12px] pb-[20px]">
          <h3 className=" font-semibold text-[17px] leading-7 tracking-[0.75px] text-[#f67704]">Home</h3>
        </div>
        <div className="pt-[12px] pb-[20px]">
          <h3 className=" font-semibold text-[17px] leading-7 tracking-[0.75px] text-[#868686]">Article</h3>
        </div>
      </div>
      <div className="flex items-center mt-[45.5px] ">
        <h5 className="font-medium text-[13px] leading-[22px] tracking-[0.25px] text-[#f67704] mr-[13px] ml-[121px] ">Article</h5>
        <img src={Panah} alt="icon" />
        <p className="font-medium text-[13px] leading-[22px] tracking-[0.75px] text-[#868686] ml-[11.34px] ">Safe and reliable shipment of your products is our top priority</p>
      </div>
      <div className="detail__title">
        <h1 className="w-[1200px] h-[112px] ml-[120px] mt-[24px] font-normal text-[48px] leading-[56px] tracking-[1px] text-[#4a4a4a] ">Safe and reliable shipment of your products is our top priority</h1>
      </div>
      <div className="flex items-center gap-4 mt-[16px] ">
        <h5 className="ml-[120px] font-normal text-[18px] leading-8 tracking-[0.75px] text-[#868686] ">Dipost Oleh Ferdi - 12 Desember 2021 12:54 WIB</h5>
        <img src={Share} alt="icon" />
      </div>
      <div className="detail__img1">
        <img className="w-[1199px] h-[511px] rounded-lg object-cover ml-[121px] mt-[26px] " src={Image1} alt="image1" />
      </div>
      <div className="detail__content">
        <p className="w-[1200px] h-[192px] font-normal text-[18px] leading-8 tracking-[0.75px] text-[#4a4a4a] ml-[120px] mt-[48px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis
          vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
        <p className="w-[1200px] h-[192px] font-normal text-[18px] leading-8 tracking-[0.75px] text-[#4a4a4a] ml-[120px] mt-[48px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis
          vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
      </div>
      <div className="detail__img2">
        <img className="w-[1199px] h-[511px] rounded-lg object-cover ml-[121px] mt-[48px] " src={Image2} alt="image2" />
      </div>
      <div className="detail__content2">
        <p className="w-[1200px] h-[192px] font-normal text-[18px] leading-8 tracking-[0.75px] text-[#4a4a4a] ml-[120px] mt-[48px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis
          vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
        <p className="w-[1200px] h-[192px] font-normal text-[18px] leading-8 tracking-[0.75px] text-[#4a4a4a] ml-[120px] mt-[48px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis
          vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
      </div>
      <div className="ml-[120px] ">
        <h4 className="font-normal text-[15px] leading-6 tracking-[0.75px] text-[#868686] ">Tag</h4>
        <div className="flex items-center gap-4 mt-[16px] font-normal text-[15px] leading-6 tracking-[0.75px] text-[#404040]">
          <h5>#ship</h5>
          <h5>#shipping</h5>
          <h5>#world</h5>
          <h5>#business</h5>
        </div>
      </div>
      <div className="ml-[120px] mt-[56px] ">
        <h4 className="font-normal text-[15px] leading-6 tracking-[0.75px] text-[#868686] ">Keyword</h4>
        <div className="flex items-center gap-4 mt-[16px] font-normal text-[15px] leading-6 tracking-[0.75px] text-[#404040]">
          <h5>ship</h5>
          <h5>safe</h5>
          <h5>priority</h5>
          <h5>shipping</h5>
          <h5>world</h5>
          <h5>business</h5>
        </div>
      </div>
      <div className="detail__similar">
        <h1 className="font-normal text-[48px] leading-[56px] tracking-[1px] text-[#4a4a4a] mt-[128px] ml-[120px] ">Similar</h1>
        <div className="flex items-center gap-[98px] mt-[48px] ml-[120px] ">
          <div className="w-[540px] h-[509px] ">
            <img src={Similar1} alt="similaricon" />
            <h2 className="font-sans not-italic font-semibold text-[24px] leading-[29px] text-[#4a4a4a] mt-[24px] ">Safe and reliable shipment of your products is our top priority</h2>
            <h4 className="font-normal text-[18px] leading-8 tracking-[0.75px] text-[#868686] mt-[8px] ">12 Desember 2021</h4>
            <div className="w-[338px] h-[40px] flex items-center gap-4 font-normal text-[15px] leading-6 tracking-[0.75px] text-[#404040] ">
              <h5>#ship</h5>
              <h5>#shipping</h5>
              <h5>#world</h5>
              <h5>#business</h5>
            </div>
            <p className="font-normal text-[18px] leading-8 tracking-[0.75px] text-[#868686] mt-[8px] ">a book or other written or printed work, regarded in terms of its content rather. a book or other writt ...</p>
            <a className="font-normal text-[18px] leading-8 tracking-[0.75px] text-[#f67704] mt-[20px] " href="#">
              Read More
            </a>
          </div>
          <div className="w-[540px] h-[509px]">
            <img src={Similar2} alt="similaricon" />
            <h2 className="font-sans not-italic font-semibold text-[24px] leading-[29px] text-[#4a4a4a] mt-[24px] ">Safe and reliable shipment of your products is our top priority</h2>
            <h4 className="font-normal text-[18px] leading-8 tracking-[0.75px] text-[#868686] mt-[8px] ">12 Desember 2021</h4>
            <div className="w-[338px] h-[40px] flex items-center gap-4 font-normal text-[15px] leading-6 tracking-[0.75px] text-[#404040]">
              <h5>#ship</h5>
              <h5>#shipping</h5>
              <h5>#world</h5>
              <h5>#business</h5>
            </div>
            <p className="font-normal text-[18px] leading-8 tracking-[0.75px] text-[#868686] mt-[8px] ">a book or other written or printed work, regarded in terms of its content rather. a book or other writt ...</p>
            <a className="font-normal text-[18px] leading-8 tracking-[0.75px] text-[#f67704] mt-[20px] " href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailArticle;
