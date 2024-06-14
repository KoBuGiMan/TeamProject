import React from "react";
import "../CSS/All.css";

function Shopping() {
  const imageUrl1 = process.env.PUBLIC_URL + "/images/shopping/StarField.png";
  const imageUrl2 = process.env.PUBLIC_URL + "/images/shopping/TimesSquare.png";
  const imageUrl3 =
    process.env.PUBLIC_URL + "/images/shopping/Dongdaemunshopping.png";

  return (
    <div className="travel">
      <h1>쇼핑물</h1>
      <h2>N스타필드 코엑스몰</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="shop">
        <div className="shop-box1">
          <h3>소개</h3>
          <span>
            스타필드 코엑스몰은 서울 강남구에 위치한 대형 복합 쇼핑몰로, 패션
            브랜드, 레스토랑, 카페, 영화관, 서점, 아쿠아리움 등이 모여 있습니다.{" "}
            <br />
            별마당 도서관은 독특한 인테리어와 다양한 도서로 인기가 많으며,
            비즈니스 중심지에 위치해 국내외 관광객과 직장인들에게 사랑받는
            명소입니다.
          </span>
          <h4>주소 : 서울특별시 강남구 영동대로 513 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d554303-Reviews-Starfield_COEX_Mall-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://www.starfield.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img
            src={imageUrl1}
            alt="N스타필드 코엑스몰"
            className="shop-image"
          />
        </div>
      </div>
      <br />
      <hr />
      <h2>타임스퀘어</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 10:00</h3>
      <div className="shop">
        <div class="shop-box2">
          <h3>소개</h3>
          <span>
            타임스퀘어는 서울 영등포구에 위치한 대형 복합 쇼핑몰로, 다양한 패션
            브랜드 매장, 레스토랑, 카페, 영화관, 서점, 호텔 등이 모여 있습니다.{" "}
            <br />
            실내 정원과 대규모 이벤트 광장은 휴식과 문화 활동을 위한 공간으로
            인기가 많으며, 교통이 편리해 다양한 방문객들에게 사랑받는
            명소입니다.
          </span>
          <h4>주소 : 서울특별시 영등포구 영중로 15 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d1990451-Reviews-Times_Square_Mall-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://m.timessquare.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img src={imageUrl2} alt="타임스퀘어" className="shop-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>동대문 쇼핑물</h2>
      <h4>영업 중 - 오전 8:30 ~ 오후 7:00</h4>
      <div className="shop">
        <div class="shop-box3">
          <h3>소개</h3>
          동대문 쇼핑몰은 서울 동대문에 위치한 대형 쇼핑 단지로, 의류, 액세서리,
          신발 등 다양한 패션 아이템을 저렴하게 구입할 수 있는 곳입니다. <br />
          도매와 소매가 가능하며, 24시간 운영하는 매장도 많아 관광객과 패션 업계
          종사자들에게 인기가 많습니다.
          <h4>주소 : 서울특별시 중구 을지로 281 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d1478599-Reviews-Dongdaemun_Shopping_Complex-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속xx
          </a>
        </div>

        <div className="image-container">
          <img src={imageUrl3} alt="동대문" className="shop-image" />
        </div>
      </div>
    </div>
  );
}
export default Shopping;
