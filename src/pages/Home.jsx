import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MargaritaPic from "../assets/margarita.jpg"
import QuesedillaPic from "../assets/quesedilla.jpg"
import BurritoPic from "../assets/burrito.jpg"
import EnchiladaPic from "../assets/enchilada.jpg"
import SaladPic from "../assets/salad.jpg"


function Home() {
  return (
    <div className="Home bg-pink">
        <Header />
        <section className="h-96 home-cover flex flex-col justify-center items-center">
            <h2 className="font-slab text-5xl md:text-6xl text-center text-sky">Explore the Flavors of Mexico at Fiesta Delicioso!</h2>
            <a href="/menu"><button className="bg-teal text-sky w-40 h-10 mt-20 hover:bg-sky hover:text-teal hover:border-4" type="button">SEE OUR MENU</button></a>
        </section>
        <section className="py-10 bg-teal flex flex-col justify-center items-center">
            <h3 className="font-slab text-4xl text-center text-red pb-4 border-b-8 border-dotted border-sky">Savor the Spice, Taste the Fiesta </h3>
            <p className="mt-10 mx-10 md:mx-20 md:text-center text-lg text-black-800">At Fiesta Delicioso, we are passionate about bringing the vibrant and rich flavors of Mexico to your table. Our restaurant is a celebration of the culinary traditions that have been passed down through generations. From sizzling fajitas to zesty enchiladas and our famous guacamole made tableside, every bite is a party of taste and culture. Fiesta Delicioso is the place where food, fun, and fiesta come together in perfect harmony. </p>
            <a href="/about"><button className="bg-red text-sky w-40 h-10 mt-10 hover:bg-pink hover:text-red hover:border-4" type="button">LEARN MORE</button></a>
        </section>
        <section className="my-10 bg-pink flex flex-col justify-center items-center">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 flex items-center">
                <div className="col-span-2 row-span-2">
                    <img className="object-cover w-96 h-96 border-4 border-red" src={ MargaritaPic }/>
                </div>
                <div className="col-start-3"><img className="object-cover w-44 h-44 border-4 border-red" src={ QuesedillaPic }/></div>
                <div className="col-start-4"><img className="object-cover w-44 h-44 border-4 border-red" src={ BurritoPic }/></div>
                <div className="col-start-3 row-start-2"><img className="object-cover w-44 h-44 border-4 border-red" src={ SaladPic }/></div>
                <div className="col-start-4 row-start-2"><img className="object-cover w-44 h-44 border-4 border-red" src={ EnchiladaPic }/></div>
            </div>
            <a href="/menu"><button className="bg-teal text-sky w-40 h-10 mt-10 hover:bg-sky hover:text-teal hover:border-4" type="button">SEE OUR MENU</button></a>
        </section>
        <Footer />
    </div>
  );
}

export default Home;