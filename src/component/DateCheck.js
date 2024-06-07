import { addMonths, format, getDate } from "date-fns";
import { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale";
import People from "./People.js";
import axios from "axios";

function DateCheck({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  sum,
  setSum,
}) {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [count, setCount] = useState([]);
  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);
  const [room, setRoom] = useState(1);

  const handleChangeStart = (e) => {
    setStartDateOpen(!startDateOpen);
    setStartDate(e);
    setEndDate(e);
  };
  const handleChangeEnd = (e) => {
    setEndDateOpen(!endDateOpen);
    setEndDate(e);
  };

  const startClick = (e) => {
    e.preventDefault();
    setStartDateOpen(!startDateOpen);
    setPeopleOpen(false);
  };

  const endClick = (e) => {
    e.preventDefault();
    setEndDateOpen(!endDateOpen);
    setPeopleOpen(false);
  };

  const dateSum = () => {
    let sumEx = Math.abs(endDate.getTime() - startDate.getTime());
    sumEx = Math.ceil(sumEx / (1000 * 60 * 60 * 24));
    setSum(sumEx - 1);
    console.log(sum);
  };

  const peopleHandler = (e) => {
    e.preventDefault();
    setPeopleOpen(!peopleOpen);
    setStartDateOpen(false);
    setEndDateOpen(false);
  };

  useEffect(() => {
    setEndDate(new Date(new Date().setDate(startDate.getDate() + 1)));
  }, [startDate]);

  useEffect(() => {
    dateSum();
  }, [endDate]);

  const dateCheck = async () => {
    try {
      const response = await axios.post("/roomList/dateCheck", {
        startDate: startDate,
        endDate: endDate,
      });

      const counts = response.data;
      setCount(counts);
      setSearch(!search); // search 상태를 업데이트하여 렌더링 갱신
      console.log(counts); // 응답으로 받은 방 개수를 출력
    } catch (error) {
      console.error("Error fetching room counts:", error);
    }
  };

  // useEffect(() => {
  //   fetch("/roomList/dateCheck")
  //     .then((res) => {
  //       return res;
  //     })
  //     .then((data) => {
  //       setCount(data);
  //       console.log(count);
  //     });
  // }, [search]);

  registerLocale("ko", ko);
  return (
    <>
      <div className="selectBar">
        <div onClick={startClick} className="startDate">
          <div className="startDate-text1">
            <span>체크인</span>
          </div>
          <span className="startDate-text2">
            {format(startDate, "yyyy년 MM월 dd일")}
          </span>
        </div>
        <div className="showDate">
          <div>
            <span className="showDate-text1">📅</span>
          </div>
          <span className="showDate-text2">{sum}박</span>
        </div>
        <div onClick={endClick} className="endDate">
          <div>
            <span className="endDate-text1">체크아웃</span>
          </div>
          <span className="endDate-text2">
            {format(endDate, "yyyy년 MM월 dd일")}
          </span>
        </div>
        <div className="people">
          <span className="people-text1">객실</span>
          <div>
            <span onClick={peopleHandler} className="people-text2">
              {room}
            </span>
          </div>
        </div>
        <div className="people">
          <span className="people-text1">어른</span>
          <div>
            <span onClick={peopleHandler} className="people-text2">
              {adult}
            </span>
          </div>
        </div>
        <div className="people">
          <span className="people-text1">어린이</span>
          <div>
            <span onClick={peopleHandler} className="people-text2">
              {child}
            </span>
          </div>
        </div>
        <div className="people">
          <span className="people-text1">유아</span>
          <div>
            <span onClick={peopleHandler} className="people-text2">
              {baby}
            </span>
          </div>
        </div>
        <div onClick={dateCheck} className="search">
          <span className="search-text">검색</span>
        </div>
      </div>
      <div className="startCalendar ">
        {startDateOpen && (
          <DatePicker
            className="datePick"
            onChange={handleChangeStart}
            dateFormat="yyyy-MM.dd"
            shouldCloseOnSelect
            minDate={new Date()}
            maxDate={addMonths(new Date(), 1)}
            selected={startDate}
            locale="ko"
            inline
          />
        )}
      </div>
      <div className="endCalendar ">
        {endDateOpen && (
          <DatePicker
            onChange={handleChangeEnd}
            dateFormat="yyyy-MM.dd"
            shouldCloseOnSelect
            minDate={startDate}
            maxDate={addMonths(new Date(), 1)}
            selected={endDate}
            locale="ko"
            inline
          />
        )}
      </div>
      {peopleOpen && (
        <People
          adult={adult}
          setAdult={setAdult}
          child={child}
          setChild={setChild}
          baby={baby}
          setBaby={setBaby}
          room={room}
          setRoom={setRoom}
        />
      )}
    </>
  );
}
export default DateCheck;
