// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// function App() {

  // return(
    // <>
      // <Header></Header>
      // <Food></Food>
      // <Footer></Footer>

    // </>
  // );
// }

// export default App
// import Card from './Card.jsx'


// function App(){
  // return(
    // <>
    // <Card></Card>
    
    // </>
  // );
// }
// export default App
// ------------------------------------------------------------------------
// HOW TO STYLE REACT COMPONENTS WITH CSS
// 1.EXTERNAL
// 2.MODULES
// 3.INLINE
// import Button from '../public/Button.jsx'
// function App(){

  // return(<Button/>);
// }
// export default App
// --------------------------------------------------------------------------
// props = read only properties that are shared between components
// A parent component can send data to child component

//  import Student from './Student.jsx'

// function App() {
  // return(
    // <>
      //  <Student name="kainat" age={30}/>
      //  <Student name="Emaan" age={20}/> 
    // </>
  // );
// }
// export default App
// ---------------------------------------------------------------------------
// CONDITIONAL RENDERING=ALLOW YOU TO CONTROL WHAT GETS RENDER IN YOUR APPLICATION BASED ON CERTIAN 
// CONDITIONS(SHOW,HIDE OR CHANGE COMPONENT)
// import UserGreeting from './UserGreeting.jsx'

// function App(){
  // return(
    // <>
    // <UserGreeting isLoggedIn={false} username="Kainat"/>
    // </>
  // );
// }
// export default App
// -------------------------------------------------------------------------
// import List from './List.jsx'

// function App(){
  // const fruits = [{id:1, name:"Apple", calories: 40},
                  // {id:2, name:"Banana", calories: 90},
                  // {id:3, name:"Orange", calories: 120}];

  // const vegetables = [{id:4, name:"Potato", calories: 80},
                      // {id:5, name:"Tomato", calories: 130},
                      // {id:6, name:"Garlic", calories: 170}];                  
  // return(<>
            // <List items={fruits} category = "Fruits"/>
            // <List items={vegetables} category = "Vegetables"/>
          // </>);
// }
// export default App
// ------------------------------------------------------------------------
// CLICK EVENTAN INTERACTION WHEN A USER CLICK ON A SPECIFIC ELEMENT
// WE CAN RESPOND TO CLICK BY PASSING A CALLBACK TO THE ONCLICK EVENT HANDLER.
// import Button from './Button.jsx'
// import ProfilePicture from './ProfilePicture.jsx';
// function App(){
  // return(<ProfilePicture/>);
// }
// export default App
// --------------------------------------------------------------------------
// REACT HOOK 
// USESTATE
// import MyComponent from "./MyComponent";
//  function App(){
  //  return(<MyComponent/>);
// }
// export default App
// import Counter from './Counter.jsx';
// function App(){
  // return(<Counter/>);
// }
// export default App
// ------------------------------------------------------------------------
// onChange = event handler use primarly with from elements
// ex. <input> <textarea> <select> <radio>
// triggers a function  everytime the value of input change
// ------------------------------------------------------------------------
// COLOR PICKER APP
// import ColorPicker from './ColorPicker.jsx'
// function App(){
  // return(<ColorPicker/>)

// }
// export default App
// -------------------------------------------------------------------------
// UPDATER FUNCTION
// -----------------------------------------------------------------------
// update objects in state
// -------------------------------------------------------------------------
// TO DO LIST APP
//  import ToDoList from "./ToDoList.jsx";
//  function App(){
//    return(<ToDoList/>);
//   }
// export default App
// DIGITALCLOCK-------------------------------------------------------------
import DigitalClock from './DigitalClock.jsx';
function App(){
  return(<></>)
}

export default App
