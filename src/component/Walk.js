import React from "react";
import "../CSS/All.css";

function Walk() {
  const imageUrl1 = process.env.PUBLIC_URL + "/images/산책로/청계천.png";
  const imageUrl2 = process.env.PUBLIC_URL + "/images/산책로/올림픽.png";
  const imageUrl3 = process.env.PUBLIC_URL + "/images/산책로/남산.png";

  return (
    <div className="travel">
      <h1>산책로</h1>
      <h2>청계천</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="walk">
        <div className="walk-box1">
          <h3>소개</h3>
          <span>
            청계천은 서울 도심을 흐르는 10.9km 길이의 복원된 하천으로,
            시민들에게 휴식과 여가 공간을 제공합니다. <br />
            산책로와 다리, 다양한 예술 작품이 있으며, 특히 야경이 아름다워
            관광객들에게 인기가 많습니다. 도심 속 자연을 즐길 수 있는 대표적인
            명소입니다.
          </span>
          <h4>주소 : 서울특별시 종로구 창신동 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d1046419-Reviews-Cheonggyecheon_Stream-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://namu.wiki/w/%EC%B2%AD%EA%B3%84%EC%B2%9C"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img src={imageUrl1} alt="청계천" className="walk-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>올림픽공원</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="walk">
        <div class="walk-box2">
          <h3>소개</h3>
          <span>
            올림픽공원은 서울 송파구에 위치한 대규모 공원으로, 1988년 서울
            올림픽을 기념하여 조성되었습니다. <br />
            다양한 스포츠 시설과 문화 공간, 넓은 녹지와 호수로 이루어져 있으며,
            산책과 운동, 문화 활동을 즐길 수 있는 시민들의 휴식처입니다.
          </span>
          <h4>주소 : 서울특별시 송파구 올림픽로 424 (방이동 88-2) </h4>
          <a
            className="website"
            href="https://www.google.com/maps/place/%EC%98%AC%EB%A6%BC%ED%94%BD%EA%B3%B5%EC%9B%90/@37.5206868,127.1214941,15z/data=!4m2!3m1!1s0x0:0x5e38157c0815a26f?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://www.ksponco.or.kr/olympicpark/menu.es?mid=a20101000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img src={imageUrl2} alt="올림픽공원" className="walk-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>남산 둘레길</h2>
      <h3>영업 시간 - 오전 8:30 ~ 오후 7:00</h3>
      <div className="walk">
        <div class="walk-box3">
          <h3>소개</h3>
          <span>
            사남산 둘레길은 서울 남산을 둘러싸고 있는 산책로로, 총 길이 약
            7.5km에 이릅니다. <br />
            자연 속에서 도심 풍경을 감상하며 걷기 좋으며, 여러 역사적 유적지와
            전망대를 지나게 됩니다. 시민들과 관광객들에게 인기 있는 휴식과 운동
            공간입니다.
          </span>
          <h4>주소 : 서울특별시 용산구 용산동2가 </h4>
          <a
            className="website"
            href="https://www.google.com/maps/place/%EB%82%A8%EC%82%B0+%EB%91%98%EB%A0%88%EA%B8%B8/@37.5532916,126.9845912,15z/data=!4m2!3m1!1s0x0:0xd755d5cb2f86c37?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
          >
            주소
          </a>
          <a
            className="website"
            href="https://parks.seoul.go.kr/maps/namsandulegil_map_KR&CN_201812.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img src={imageUrl3} alt="남산 둘레길" className="walk-image" />
        </div>
      </div>
    </div>
  );
}
export default Walk;
