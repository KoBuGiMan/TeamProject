import React from "react";
import "../CSS/All.css";

function Park() {
  const imageUrl1 = process.env.PUBLIC_URL + "/images/공원/롯데월드.png";
  const imageUrl2 = process.env.PUBLIC_URL + "/images/공원/스머프.png";
  const imageUrl3 = process.env.PUBLIC_URL + "/images/공원/VR스퀘워.png";

  return (
    <div className="travel">
      <h1>테마파크</h1>
      <h2>롯데월드</h2>
      <h3>영업 시간 - 오전 9:30 ~ 오후 10:00</h3>
      <div className="park">
        <div className="park-box1">
          <h3>소개</h3>
          <span>
            롯데월드는 서울 송파구에 위치한 대형 테마파크로, 실내와 실외
            놀이공원, 다양한 놀이기구, 퍼레이드, 공연 등을 즐길 수 있습니다.{" "}
            <br />
            또한, 인근에 롯데월드 아쿠아리움과 롯데월드타워도 있어 가족 단위
            관광객들에게 인기가 많습니다.
          </span>
          <h4>⟳ 소요시간 : 3 시간 이상</h4>
          <h4>주소 : 서울특별시 송파구 올림픽로 240 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d324891-Reviews-Lotte_World-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://www.lotteworld.com/gate.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img src={imageUrl1} alt="롯데월드" className="park-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>스머프 매직 포레스트</h2>
      <h3>영업 시간 - 오전 8:3 0~ 오후 10:00</h3>
      <div className="park">
        <div class="park-box2">
          <h3>소개</h3>
          <span>
            롯데월드는 서울 송파구에 위치한 대형 테마파크로, 실내와 실외
            놀이공원, 다양한 놀이기구, 퍼레이드, 공연 등을 즐길 수 있습니다.{" "}
            <br />
            또한, 인근에 롯데월드 아쿠아리움과 롯데월드타워도 있어 가족 단위
            관광객들에게 인기가 많습니다.
          </span>
          <h4>⟳ 소요시간 : 2~3 시간 이상</h4>
          <h4>주소 : 서울특별시 강남구 강남대로106길 29,지하1층 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d25234653-Reviews-Smurf_Magic_Forest-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://smurfmagic.com/layout_en/res/home.php?go=main&howcom=trip_g1"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img
            src={imageUrl2}
            alt="스머프 매직 포레스트"
            className="park-image"
          />
        </div>
      </div>
      <br />
      <hr />
      <h2>VR스케워 - 홍대점</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="park">
        <div class="park-box3">
          <h3>소개</h3>
          <span>
            홍대점은 서울 홍대에 위치한 가상 현실(VR) 체험 공간으로, 다양한 VR
            게임과 체험 프로그램을 제공합니다. <br />
            최신 VR 기술을 활용한 몰입감 있는 경험을 제공하며, 친구, 연인, 가족
            등 다양한 방문객들에게 인기가 많습니다.
          </span>
          <h4>주소 : 서울특별시 마포구 어울마당로 68 3~7층</h4>
          <a
            className="website"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            지도 x
          </a>
          <a
            className="website"
            href="https://smurfmagic.com/layout_en/res/home.php?go=main&howcom=trip_g1"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img src={imageUrl3} alt="VR스퀘어 - 홍대점" className="park-image" />
        </div>
      </div>
    </div>
  );
}
export default Park;
