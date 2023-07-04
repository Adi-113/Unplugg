//import logo from './logo.svg';
import './App.css';
import Timerc from './component/time/App.js';
import Musicc from './component/music/App.js';

//import {background1}  from './function.js';
//import b1 from'./public/bears.png';
//import  b2 from'./public/mimo.png';
function Arena() {
  const  background1=()=> {
    //document.querySelector('body').style.background = "url('./bears.jpg') center center / cover";
    document.body.style.backgroundImage =  "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljJTIwY2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80')";
    console.log("yes")
}
const background2=()=> {
  //document.querySelector('body').style.background = "url('./mimo.jpg') center center / cover";
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')";
  console.log("yup")
}
const background3=()=> {
  //document.querySelector('body').style.background = "url('./mimo.jpg') center center / cover";
  document.body.style.backgroundImage = "url('https://atthemanse.files.wordpress.com/2014/01/manse-study-a-saturday-night-in-january.jpg')";
  console.log("yup")
}
  return (

    <div className="App">
      
        <div className="hell"><Timerc/></div>
        <div><p>                                    </p></div>
        <div><p>                                    </p></div>
        <div classNmae="moosic"><Musicc/></div>
        <div className="back-frem">
          <div className="back-chang" onClick={background1}>
          <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljJTIwY2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80.jpeg"></img>
      </div>
      <div className="back-chang" onClick={background2}>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80.jpeg"></img>
      </div>
       <div className="back-chang" onClick={background3}>
          <img src="https://atthemanse.files.wordpress.com/2014/01/manse-study-a-saturday-night-in-january.jpg"></img>
      </div>
    </div>
    </div>
  );
}

export default Arena;
