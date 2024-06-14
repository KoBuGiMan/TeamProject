import React, { useState } from "react";
import "../CSS/Enjoy.css";
// 카테고리별 컴포넌트 임포트
import Landmark from "../component/Landmark.js";
import Shopping from "../component/Shopping.js";
import Market from "../component/Market.js";
import Park from "../component/Park.js";
import Observatory from "../component/Observatory.js";
import Museum from "../component/Museum.js";
import Walk from "../component/Walk.js";
import Aquarium from "../component/Aquarium.js";
// 다른 카테고리 컴포넌트도 마찬가지로 임포트

function Enjoy() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const commonProps = {
    prop1: "value1",
    prop2: "value2",
    // 필요한 다른 속성들
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "landmark":
        return <Landmark {...commonProps} />;
      case "shopping":
        return <Shopping {...commonProps} />;
      case "market":
        return <Market {...commonProps} />;
      case "park":
        return <Park {...commonProps} />;
      case "observatory":
        return <Observatory {...commonProps} />;
      case "museum":
        return <Museum {...commonProps} />;
      case "walk":
        return <Walk {...commonProps} />;
      case "aquarium":
        return <Aquarium {...commonProps} />;
      // 다른 카테고리에 대한 처리도 마찬가지로
      default:
        return <div>카테고리를 선택하세요.</div>;
    }
  };

  return (
    <main>
      <div className="body">
        <h2>서울의 관광명소</h2>
        <div className="body-enjoy">
          <span>인기 체험 둘러보기</span>
          <p>
            평점과 예약 수를 바탕으로 다른 여행자들은 어떤 체험을 좋아하는지
            살펴보세요.
          </p>
          <div className="data">
            <div className="data-box">
              <div className="Link">
                <button onClick={() => handleCategoryClick("landmark")}>
                  랜드마크
                </button>
              </div>
              <div className="Link">
                <button onClick={() => handleCategoryClick("shopping")}>
                  쇼핑몰
                </button>
              </div>
              <div className="Link">
                <button onClick={() => handleCategoryClick("market")}>
                  시장
                </button>
              </div>
              <div className="Link">
                <button onClick={() => handleCategoryClick("park")}>
                  테마파크
                </button>
              </div>
              <div className="Link">
                <button onClick={() => handleCategoryClick("observatory")}>
                  전망대
                </button>
              </div>
              <div className="Link">
                <button onClick={() => handleCategoryClick("museum")}>
                  역사박물관
                </button>
              </div>
              <div className="Link">
                <button onClick={() => handleCategoryClick("walk")}>
                  산책로
                </button>
              </div>
              <div className="Link">
                <button onClick={() => handleCategoryClick("aquarium")}>
                  수족관
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content">{renderContent()}</div>
      </div>
    </main>
  );
}

export default Enjoy;

// const [currentImageIndex, setCurrentImageIndex] = useState(0);

// const images = [
//   '/images/공원1.png',
//   '/images/공원2.png',
// ];

// const handlePrevImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === 0 ? images.length - 1 : prevIndex - 1
//   );
// };

// const handleNextImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === images.length - 1 ? 0 : prevIndex + 1
//   );
// };
