import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footerBody">
      <img className="footer-logo-img" src="./images/logo.png" alt="image" />
      <div className="footer-title">
        <span>ROYAL HOTEL</span>
      </div>
      <div className="footer-phone">
        <span className="footer-front">Tel | </span>
        <span> 042-000-0000</span>
        <span className="footer-front">&nbsp;&nbsp;&nbsp; Add | </span>
        <span className="footer-korean">서울시 중구 소공로 106</span>
      </div>
      <div className="footer-second">
        <span className="footer-people">대표이사 | </span>
        <span className="footer-korean"> XXX</span>
        <span className="footer-people">
          &nbsp;&nbsp;&nbsp;사업자 등록 번호 |{" "}
        </span>
        <span className="footer-korean">000-00-00000</span>
      </div>
      <div className="footer-under-text">
        <span>© 2020 ROYAL HOTEL & RESORTS Co. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
