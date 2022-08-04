import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import axios from 'axios';
import Footer from './Footer/Footer';
import LogoSearch from '../assets/Search.png';
import { Circles } from 'react-loader-spinner';

const Main = () => {
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState('Apple&from=2022-07-17&sortBy=popularity');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews();
  }, [keyword]);

  const getNews = async () => {
    setLoading(true);
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=8397781c82554c838ec1d8111311a6be`);
    setNews(res.data.articles);
    setLoading(false);
    console.log(res.data.articles);
  };

  // fungsi untuk limit str in descriptsi
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div>
      <header>
        <Header />
        <div className="absolute top-[176px] left-[940] right-[120px]">
          <div className="flex items-center gap-5 border-2 border-solid border-[#ededed] rounded-xl w-[380px] h-[56px] py-4">
            <img src={LogoSearch} alt="logoSearch" />
            <input className="font-normal text-[15px] leading-6 tracking-[0.75px] text-[#cacaca]" onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Cari" />
          </div>
        </div>
      </header>
      <div>
        {loading ? (
          <div style={style}>
            <Circles color="#b5c1ed" />
          </div>
        ) : (
          <article className="mt-[104px] ml-[120px] grid grid-cols-2">
            {news.map((item) => {
              return (
                <div key={item.id} className="w[551px] h-[509px] mb-[48px]">
                  <img className="w[551px] h-[235px] rounded-lg object-cover" src={item.urlToImage} alt="imageContent" />
                  <h2 className="w-[500px] font-semibold text-[24px] leading-[29px]  text-[#4a4a4a] mt-[24px]">{truncate(item.title, 90)}</h2>
                  <h4 className="w-[235px] font-normal text-[18px] leading-8 tracking-[0.75px] text-[#868686] mt-[8px]">{item.publishedAt}</h4>
                  <div className="w-[338px] h-[40px] font-normal text-[15px] leading-6 tracking-[0.75px] text-[#404040] flex items-center">
                    <h5 className="w[47px] h-[24px]">#ship</h5>
                    <h5 className="w[84px] h-[24px]">#shipping</h5>
                    <h5 className="w[58px] h-[24px]">#world</h5>
                    <h5 className="w[85px] h-[24px]">#business</h5>
                  </div>
                  <p className="font-normal text-[18px] leading-8 tracking-[0.75px] text-[#868686] mb-[16px]">{truncate(item.description, 100)}</p>
                  <a className="w-[103px] font-normal text-[18px] leading-8 tracking-[0.75px] text-[#f67704] " target="_blank" href={item.url}>
                    Read More
                  </a>
                </div>
              );
            })}
          </article>
        )}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
