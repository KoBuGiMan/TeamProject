import React from "react";
import "../CSS/All.css";

function Landmark() {
  const imageUrl1 = "./images/landmarks/NSeoulTower.png";
  const imageUrl2 = "/images/landmarks/LotteTower.png";
  const imageUrl3 =
    process.env.PUBLIC_URL + "./images/landmarks/DongdaemunTower.png";

  return (
    <div className="travel">
      <h1>랜드마크</h1>
      <h2>N 서울 타워</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="land">
        <div className="land-box1">
          <h3>소개</h3>
          <span>
            N서울타워는 서울 남산에 위치한 대표적인 랜드마크로, 360도 전망대,
            레스토랑, 카페, 기념품 가게 등이 있어 관광객들에게 인기 있는
            명소입니다. <br />
            특히 아름다운 야경과 '사랑의 자물쇠'로 유명합니다.
          </span>
          <h4>⟳ 소요시간 : 1~2 시간</h4>
          <h4>주소 : 서울특별시 용산구 남산공원길 105</h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d1169465-Reviews-N_Seoul_Tower-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://www.nseoultower.co.kr/visit/use.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img src={imageUrl1} alt="N 서울 타워" className="land-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>롯데월드타워&몰</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="land">
        <div class="land-box2">
          <h3>소개</h3>
          <span>
            롯데월드타워&몰은 서울 송파구에 위치한 123층, 555미터 높이의
            대한민국 최고층 빌딩입니다. <br />
            전망대 서울스카이, 쇼핑몰, 호텔, 오피스, 아쿠아리움, 영화관 등이
            있어 다양한 쇼핑과 엔터테인먼트를 즐길 수 있는 인기 명소입니다.
          </span>
          <p>⟳ 소요시간 :3 시간 이상</p>
          <h4>주소 : 서울특별시 송파구 올림픽로 300 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d8842556-Reviews-Lotte_World_Tower_Mall-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://www.lwt.co.kr/ko/main/main.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img src={imageUrl2} alt="롯데 월드 타워" className="land-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>동대문 디자인 플라자</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="land">
        <div class="land-box3">
          <h3>소개</h3>
          <span>
            동대문 디자인 플라자(DDP)는 서울 동대문에 위치한 자하 하디드가
            설계한 미래지향적 복합 문화 공간입니다. <br />
            다양한 전시회, 패션쇼, 콘서트가 열리며, 디자인 상점, 카페, 공원이
            있어 시민들과 관광객들에게 인기 있는 명소입니다.
          </span>
          <h4>주소 : 서울특별시 중구 을지로 281 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d6671988-Reviews-Dongdaemun_Design_Plaza_DDP-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://ddp.or.kr/?menuno=228"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img src={imageUrl3} alt="동대문" className="land-image" />
        </div>
      </div>
    </div>
  );
}
export default Landmark;
