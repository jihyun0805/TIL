import { useState, useEffect } from "react";

function Step08() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <h3>현재 시작: {time}</h3>
}

export default Step08;

// setInterval -> 일정한 시간 간격마다 함수를 반복 실행시키는 함수
// clearInterval -> setInterval로 만든 반복 실행을 멈추는 함수
