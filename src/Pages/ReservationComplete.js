import { useLocation } from "react-router-dom";

const ReservationComplete = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <div>결제정보: {state.name}</div>
      <div>아이디: {state.buyer_userId}</div>
      <div>예약자: {state.buyer_name}</div>
      <div>전화번호: {state.buyer_tel}</div>
      <div>이메일: {state.buyer_email}</div>
      <div>우편번호: {state.buyer_postcode}</div>
      <div>주소: {state.buyer_addr}</div>
      <div>차량유무: {state.buyer_car ? "Yes" : "No"}</div>
      <div>
        <h3>Reservation Details</h3>

        <div>객실등급: {state.buyer_reservation.room_role}</div>
        <div>
          입실: {state.buyer_reservation.room_startDate.getFullYear()}년{" "}
          {state.buyer_reservation.room_startDate.getMonth() + 1}월{" "}
          {state.buyer_reservation.room_startDate.getDate()}일
        </div>
        <div>퇴실: {state.buyer_reservation.room_endDate.getFullYear()}년{" "}
          {state.buyer_reservation.room_endDate.getMonth() + 1}월{" "}
          {state.buyer_reservation.room_endDate.getDate()}일</div>
        <div>어른: {state.buyer_reservation.room_adult}명</div>
        <div>어린이: {state.buyer_reservation.room_child}명</div>
        <div>유아: {state.buyer_reservation.room_baby}명</div>
        <div>객실가격: {state.buyer_reservation.room_price}</div>
        <div>숙박일: {state.buyer_reservation.room_day}</div>
        <div>총액: {state.buyer_reservation.room_resert_price}</div>
      </div>
    </>
  );
};
export default ReservationComplete;
