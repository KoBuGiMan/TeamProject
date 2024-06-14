import React from "react";
import "../CSS/All.css";

function Museum() {
  const imageUrl1 = process.env.PUBLIC_URL + "/images/박물관/경복궁.png";
  const imageUrl2 = process.env.PUBLIC_URL + "/images/박물관/덕수궁.png";
  const imageUrl3 = process.env.PUBLIC_URL + "/images/박물관/서대문.png";

  return (
    <div className="travel">
      <h1>역사박물관</h1>
      <h2>경복궁</h2>
      <h3>영업 시간 - 오전 9:30 ~ 오후 10:00</h3>
      <div className="museum">
        <div className="museum-box1">
          <h3>소개</h3>
          <span>
            경복궁은 서울 종로구에 위치한 조선 시대의 궁궐로, 1395년에
            건립되었습니다. <br />
            조선 왕조의 법궁으로서 역사적, 문화적 가치가 높으며, 근정전, 경회루
            등 주요 건축물과 아름다운 정원을 자랑합니다. 현재는 많은 관광객이
            찾는 문화유산입니다.
          </span>
          <h4>⟳ 소요시간 : 3 시간 이상</h4>
          <h4>주소 : 서울특별시 종로구 사직로 161(세종로) </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d324888-Reviews-Gyeongbokgung_Palace-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            주소
          </a>
          <a
            className="website"
            href="https://royal.khs.go.kr/ROYAL/contents/menuInfo-gbg.do?grpCode=gbg"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img src={imageUrl1} alt="경복궁" className="museum-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>덕수궁</h2>
      <h3>영업 시간 - 오전 8:30 ~ 오후 10:00</h3>
      <div className="museum">
        <div class="museum-box2">
          <h3>소개</h3>
          <span>
            덕수궁은 서울 중구에 위치한 조선 시대의 궁궐로, 고종 황제가 거처한
            곳입니다. <br />
            서양식 건축물과 전통 한옥이 조화를 이루며, 정관헌, 석조전 등 주요
            건축물이 있습니다. 도심 속에서 역사와 문화를 체험할 수 있는 관광
            명소입니다.
          </span>
          <h4>⟳ 소요시간 : 2~3 시간 이상</h4>
          <h4>주소 : 서울특별시 중구 세종대로 99 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d324887-Reviews-Deoksugung-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://royal.khs.go.kr/ROYAL/contents/menuInfo-gbg.do?grpCode=dsg"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img src={imageUrl2} alt="덕수궁" className="museum-image" />
        </div>
      </div>
      <br />
      <hr />
      <h2>서대문 형무소 역사관</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="museum">
        <div class="museum-box3">
          <h3>소개</h3>
          <span>
            서대문 형무소 역사관은 서울 서대문구에 위치한 일제강점기 시절의
            감옥을 보존한 역사 박물관입니다. <br />
            독립운동가들이 수감되었던 공간으로, 당시의 고통과 저항을 기억하고자
            다양한 전시물과 자료를 제공합니다. <br />
            역사 교육과 애국심 고취를 위한 중요한 장소로 많은 방문객이 찾고
            있습니다.
          </span>
          <h4>주소 : 서울특별시 서대문구 통일로 251</h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d1440196-Reviews-Seodaemun_Prison_History_Hall-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://namu.sdm.go.kr/site/main/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img
            src={imageUrl3}
            alt="서대문 형무소 역사관"
            className="museum-image"
          />
        </div>
      </div>
    </div>
  );
}
export default Museum;
