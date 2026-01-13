import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
}

function Step10() {
    const [ users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setUsers([
                {id: 1, name:"홍길동"},
                {id: 2, name:"이몽룡"},
                {id: 3, name:"성춘향"},
            ]);
        }, 1000);
    }, []);
}

// return (
//     <div>
//         <h3>회원 목록</h3>
//         {useFormState.length === 0? (
            
//         )}
//     </div>
// )