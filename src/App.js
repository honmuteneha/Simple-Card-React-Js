
import AboutUs from './AboutUs';
import './App.css';
import Card from './Card';


  

function App() {
  return (
    <div className="App">
      <h1>React Component</h1>
      <div style={{display:"flex", gap:"40px"}}>
      <Card name="Labrador" price={5000} image="https://www.petsworld.in/blog/wp-content/uploads/2015/06/thinkstock_rf_photo_of_labrador_retriever.jpg"></Card>
      <Card name="German Shepherd" price={25000} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKLz41U00xdhMG3yw3sDEJM2fvIDahefjhg&s"></Card>
      <Card name="Husky" price={65000} image="https://www.dogzone.com/images/breeds/alaskan-malamute.jpg"></Card>
      </div>

      <AboutUs></AboutUs>

    </div>
  );
}

export default App;
