// import React, {useState} from 'react';
// function MyComponent(){
    // const[name, setName] = useState("Guest");
    // const[age, setAge] = useState(0);
    // const updateName = () => {
        // setName = ("Kainat");
    // }
    // const incrementAge =() =>{
        // setAge(age+1);
    // }
    // return(<div>
        // <p>Name: {name}</p>
        // <button onClick={updateName}>Set Name</button>
        // <p>Age: {age}</p>
        // <button onClick={incrementAge}>Increment Age</button>
    // </div>

    // );
// }
// export default MyComponent
// import React, {useState} from 'react';
// function MyComponent(){
//     const [name, setName] = useState("");
//     const [payment, setPayment] = useState("")
//     function handleNameChange(event){
//         setName(event.target.value);
//     }
//     function handlePaymentChange(event){
//         setPayment(event.target.value);
//     }
//     return(<div>
//         <input value={name} onChange={handleNameChange}/>
//         <p>Name: {name}</p>
//         <select value={payment} onChange={handlePaymentChange}>
//             <option value="">Select an option</option>
//             <option value="Visa">visa</option>
//             <option value="MasterCard">mastercard</option>
//             <option value="GiftCard">GiftCard</option>
//         </select>
//     </div>);
// }
// export default MyComponent
// import React, {useState} from 'react';
// function MyComponent(){
//  const [car, setCar] = useState({
//     year:2022,
//     make:"ford",
//     modek:"mutang",
//  });
//  return(<div>
//     <p>your fvrt car is:{car.year} {car.make} {car.model}</p>
//  </div>)
// }
// export default MyComponent
import React, {useState} from 'react';
function MyComponent(){
    cont [foods,setFoods] = useState(["apple","orange","banana"]);
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods([...foods,newFood]);
    }
    function handleremoverfood(){

    }
    return(<div>
        <h2>list of foods</h2>
        <ul>
            {food.map((food, index) => <li key={index}{food}></li>)}
        </ul>
        <input type='index' id="foodInput" placeholder='enter food name'/>
    </div>)
}