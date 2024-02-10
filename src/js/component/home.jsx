import React, {useState} from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// const Home = () => {
// 	const [inputValue, setInputValue] = useState("")
// 	const [todos, setTodos] = useState([])


// 	return (
// 		<div className="container">
// 			<h1>TODOS</h1>
// 			<ul>
// 				<li> 
// 					<input 
// 				type="text" 
// 				onChange = {(e) => setInputValue(e.target.value)}
// 				value = {inputValue}
// 				onKeyDown = {(e) => 
// 					{ if (e.key ==="Enter") {setTodos(todos.concat([inputValue]));
// 						setInputValue("");
// 					}
					
// 				}}
// 				placeholder="What i need to do?"></input>
// 				</li>
// 				{todos.map((item, index) => ( <li>{item}{""} <i class="fa-solid fa-trash" onClick = {() => setTodos(todos.filter((t, currentIndex) => index !=currentIndex))}></i></li>))}
// 			</ul>
// 			<div>{todos.length} tasks</div>
// 		</div>
// 	);
// };

// export default Home;


const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault();
            setTodos([...todos, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>TODOS</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={handleKeyDown}
                        placeholder="What I need to do?"
                    />
                </li>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item}{" "}
                        <i
                            onClick={() => handleDeleteTodo(index)}
                        >
                            🗑️
                        </i>
                    </li>
                ))}
            </ul>
            <div>{todos.length} tasks left</div>
        </div>
    );
};

export default Home;