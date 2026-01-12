type GreetingPros = {
    name: string;
};

function Step02({name} : GreetingPros) {
    return <h2>안녕하세요. {name} 님!</h2>
}

export default Step02;