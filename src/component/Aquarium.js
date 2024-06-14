import React from "react";
import "../CSS/All.css";

function Aquarium() {
  const imageUrl1 = process.env.PUBLIC_URL + "/images/수족관/코엑스.png";
  const imageUrl2 = process.env.PUBLIC_URL + "/images/수족관/롯데월드.png";
  const imageUrl3 = process.env.PUBLIC_URL + "/images/수족관/주렁주렁.png";

  return (
    <div className="travel">
      <h1>수족관</h1>
      <h2>코엑스 아쿠아리움</h2>
      <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
      <div className="aquarium">
        <div className="aquarium-box1">
          <h3>소개</h3>
          <span>
            코엑스 아쿠아리움은 서울 강남구 코엑스몰에 위치한 대형 수족관으로,
            다양한 해양 생물을 전시하고 있습니다. <br />약 650종, 40,000여
            마리의 생물을 볼 수 있으며, 다양한 테마 존과 체험 프로그램이
            마련되어 있어 가족 단위 방문객들에게 인기가 많습니다.
          </span>
          <h4>주소 : 서울특별시 강남구 영동대로 513 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d592495-Reviews-Coex_Aquarium-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://www.coexaqua.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>
        <div className="image-container">
          <img
            src={imageUrl1}
            alt="코엑스 아쿠아리움"
            className="aquarium-image"
          />
        </div>
      </div>
      <br />
      <hr />

      <h2>롯데월드 아쿠아리움</h2>
      <h3>영업 시간 - 오전 05:00 ~ 오후 22:00</h3>
      <div className="aquarium">
        <div class="aquarium-box2">
          <h3>소개</h3>
          <span>
            롯데월드 아쿠아리움은 서울 송파구 롯데월드몰에 위치한 대형
            수족관으로, 다양한 해양 생물과 테마 존을 갖추고 있습니다. <br />약
            650종, 55,000여 마리의 생물을 전시하며, 교육 프로그램과 체험 활동이
            풍부해 가족 단위 방문객들에게 인기가 많습니다.
          </span>
          <h4>주소 : 서울특별시 송파구 올림픽로 300 </h4>
          <a
            className="website"
            href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d8798065-Reviews-Lotte_World_Aquarium-Seoul.html#MAPVIEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://www.lotteworld.com/aquarium/en/index.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img
            src={imageUrl2}
            alt="롯데월드 아쿠아리움"
            className="aquarium-image"
          />
        </div>
      </div>
      <br />
      <hr />
      <h2>주렁주렁 - 타임스퀘어점</h2>
      <h3>영업 시간 - 오전 8:30 ~ 오후 7:00</h3>
      <div className="aquarium">
        <div class="aquarium-box3">
          <h3>소개</h3>
          <span>
            주렁주렁 - 타임스퀘어점은 서울 영등포구 타임스퀘어에 위치한 실내
            동물원입니다. <br />
            다양한 종류의 동물들과 직접 교감할 수 있는 체험형 공간으로, 아이들과
            가족 단위 방문객들에게 인기가 많습니다. 동물 먹이주기, 만져보기 등의
            다양한 체험 프로그램이 마련되어 있습니다.
          </span>
          <h4>주소 : 서울특별시 영등포구 영중로 15 5 층 </h4>
          <a
            className="website"
            href="https://www.google.com/maps/search/%EC%84%9C%EC%9A%B8+%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC+%EC%98%81%EC%A4%91%EB%A1%9C+15+%ED%83%80%EC%9E%84%EC%8A%A4%ED%80%98%EC%96%B4/data=!3m1!4b1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도
          </a>
          <a
            className="website"
            href="https://zoolungzoolung.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            웹사이트 접속
          </a>
        </div>

        <div className="image-container">
          <img
            src={imageUrl3}
            alt="주렁주렁 - 타임스퀘어점"
            className="aquarium-image"
          />
        </div>
      </div>
    </div>
  );
}
export default Aquarium;
