
import './App.css';
import Slider from './components/slider';

function App() {
  const slides = [
    {
      url:  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg", 
      title: "1"
    },
    
    {
       url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
        title: "2" 
    },
    {
       url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg",
     title: "3" },
    { 
      url: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg", 
    title: "4" },
    { 
      url: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg", 
    title: "5" },
  ];
  const contStyle = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="container">
      {/* className="sliderStyle" */}
       <div style={contStyle}>
        <Slider slides={slides} />
      </div>
    </div>
  );
}

export default App;
