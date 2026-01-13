import { useState } from "react";

function Step05(){
    const [fruits, setFruits] = useState<string[]>([]);

    const addFruit = () => {
        const newFruit = prompt("과일 이름?");
        if (newFruit) setFruits([...fruits, newFruit]);
    };

    return (
        <div>
            <button onClick={addFruit}>과일 추가</button>
            <ul>
                {
                    fruits.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Step05;