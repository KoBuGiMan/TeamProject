import React from "react";
import "../CSS/All.css";

function Market() {
  const imageUrl1 =
    process.env.PUBLIC_URL + "/images/Market/GwangjangMarket.png";
  const imageUrl2 =
    process.env.PUBLIC_URL + "/images/Market/NamdaemunMarket.png";
  const imageUrl3 =
    process.env.PUBLIC_URL + "/images/Market/SaemaeulMarket.png";

  return (
    <div className="travel">
      <h1>시장</h1>
      <h2>광장시장</h2>
      <h3>영업 시간 - 매일 09:00 ~ 18:00 </h3>
      <div className="market">
        <div className="market-box1">
          <h3>소개</h3>
          <span>
            광장시장은 서울 종로구에 위치한 전통 시장으로, 다양한 먹거리와 의류,
            한복, 생활용품 등을 판매합니다.
            <br />
            특히 빈대떡, 마약김밥 등 전통 음식을 맛볼 수 있어 관광객과 지역
            주민들에게 인기가 많습니다.
          </span>
          <h4>⟳ 소요시간 : 1~2 시간 이상</h4>
          <h4>주소 : 서울특별시 종로구 창경궁로 88 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d1552278-Reviews-Kwangjang_Market-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="http://www.kwangjangmarket.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img src={imageUrl1} alt="광장시장" className="market-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>남대문시장</h2>
      <h3>영업 시간 - 오전 8:30 ~ 오후 10:00</h3>
      <div className="market">
        <div class="market-box2">
          <h3>소개</h3>
          <span>
            남대문시장은 서울 중구에 위치한 대한민국 최대의 전통 시장으로, 의류,
            액세서리, 가방, 식품 등 다양한 상품을 판매합니다. <br />
            저렴한 가격과 다양한 물품으로 관광객과 지역 주민들에게 인기가
            많습니다.
          </span>
          <h4>⟳ 소요시간 : 2~3 시간 이상</h4>
          <h4>주소 : 서울특별시 중구 남대문시장4길 21 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d324907-Reviews-Namdaemun_Market-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="http://www.namdaemunmarket.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img src={imageUrl2} alt="남대문시장" className="market-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>새마을 전통시장</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오전 11:00</h3>
      <div className="market">
        <div class="market-box3">
          <h3>소개</h3>
          <span>
            새마을 전통시장은 서울 관악구에 위치한 전통 시장으로, 신선한 농산물,
            해산물, 육류 등 다양한 식료품과 생활용품을 판매합니다. <br />
            지역 주민들에게 친숙한 장보기 장소로, 저렴한 가격과 따뜻한 분위기로
            인기를 끌고 있습니다.
          </span>
          <h4>주소 : 서울특별시 송파구 석촌호수로12길 24 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d18995353-Reviews-Saemaul_Traditional_Market-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="http://bbsj.kr/sijang/market.php?sij_idx=521"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img src={imageUrl3} alt="새마을 전통시장" className="market-image" />
        </div>
      </div>
    </div>
  );
}
export default Market;
