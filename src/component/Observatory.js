import React from 'react';
import "../CSS/All.css";

function Observatory() {
    const imageUrl1 = process.env.PUBLIC_URL + '/images/전망대/서울스카이.png';
    const imageUrl2 = process.env.PUBLIC_URL + '/images/전망대/63스카이.png';
    const imageUrl3 = process.env.PUBLIC_URL + '/images/전망대/종로타워.png';

    return (
        <div className="travel">
            <h1>전망대</h1>
            <h2>서울스카이</h2>
            <h3>영업 시간 - 오전 9:30 ~ 오후 10:00</h3>
            <div className="observatory">
                <div className="observatory-box1">
                    <h3>소개</h3>
                    <span>서울스카이는 서울 송파구 롯데월드타워의 전망대로, 500미터 이상의 높이에서 서울 전경을 360도로 감상할 수 있습니다. <br />
                        유리 바닥 스카이데크와 아름다운 야경으로 관광객들에게 인기가 많습니다.</span>
                    <h4>⟳ 소요시간 : 3 시간 이상</h4>
                    <h4>주소 :  서울특별시 송파구 올림픽로 300</h4>
                    <a className='website' href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d12309166-Reviews-Seoul_Sky-Seoul.html#MAPVIEW" target="_blank" rel="noopener noreferrer">지도 </a>
                    <a className='website' href="https://seoulsky.lotteworld.com/en/main/index.do?lang=en" target="_blank" rel="noopener noreferrer">웹사이트 접속</a>
                </div>
                <div className="image-container">
                    <img src={imageUrl1} alt="서울스카이" className="observatory-image" />
                </div>
            </div>
            <br /><hr />
            <h2>63 스카이 아트</h2>
            <h3>영업 시간 - 오전 8:30 ~ 오후 10:00</h3>
            <div className="observatory">
                <div class="observatory-box2">
                    <h3>소개</h3>
                    <span>63 스카이 아트는 서울 여의도 63빌딩의 전망대이자 미술관으로, 한강과 서울의 전경을 감상할 수 있습니다. <br />
                        다양한 예술 작품 전시와 함께 아름다운 야경을 즐길 수 있어 관광객들에게 인기가 많습니다</span>
                    <h4>⟳ 소요시간 : 2~3 시간 이상</h4>
                    <h4>주소 : 서울특별시 영등포구 63로 50 (여의도동) </h4>
                    <a className='website' href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d7060791-Reviews-63_Sky_Art_63_SQUARE-Seoul.html#MAPVIEW" target="_blank" rel="noopener noreferrer">지도 </a>
                    <a className='website' href="https://www.63art.co.kr/home/63ART/main.dohttps://www.63art.co.kr/home/63ART/main.do" target="_blank" rel="noopener noreferrer">웹사이트 접속</a>
                </div>
                <div className="image-container">
                    <img src={imageUrl2} alt="63 스카이 아트" className="observatory-image" />
                </div>
            </div>
            <br /><hr />
            <h2>종로타워</h2>
            <h3>영업 시간 - 오전 10:30 ~ 오후 11:00</h3>
            <div className="observatory">
                <div class="observatory-box3">
                    <h3>소개</h3>
                    <span>종로 타워는 서울 종로구에 위치한 고층 빌딩으로, 독특한 디자인과 서울 도심의 전경을 감상할 수 있는 전망대가 특징입니다. <br />
                        다양한 사무실과 상업 시설이 입주해 있으며, 인근 지역에서 랜드마크로 자리 잡고 있습니다.</span>
                    <h4>주소 : 서울특별시 종로구 종로 51 (종로타워) [종로2가 6]</h4>
                    <a className='website' href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d18995353-Reviews-Saemaul_Traditional_Market-Seoul.html#MAPVIEW" target="_blank" rel="noopener noreferrer">지도 </a>
                    <a className='website' href="https://namu.wiki/w/%EC%A2%85%EB%A1%9C%ED%83%80%EC%9B%8C" target="_blank" rel="noopener noreferrer">웹사이트 접속</a>

                </div>
                <div className="image-container">
                    <img src={imageUrl3} alt="종로타워" className="observatory-image" />
                </div>

            </div>

        </div>
    );
}
export default Observatory;
