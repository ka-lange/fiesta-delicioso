import '../App.css';
import FoodPic from '../assets/food.jpg'


function Banner(props) {
  return (
    <div className="food-banner h-96 flex flex-col justify-center items-center">
        <h2 className="font-slab text-6xl text-center text-sky">Our Flavorful Fiesta Menu:</h2>
    </div>
  );
}

export default Banner;
