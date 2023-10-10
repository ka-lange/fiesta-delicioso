import '../App.css';
import ChefPic from "../assets/pexels-los-muertos-crew-7772197.jpg"
import Header from '../components/Header';
import Footer from '../components/Footer'

function About() {
  return (
    <div className="Home bg-pink">
        <Header />
        <section className="p-10 bg-pink flex flex-col">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4">
                <div>
                    <h2 className="font-slab text-5xl text-red">About Us</h2>
                    <p className="pt-10 text-lg">
                    At Fiesta Delicioso, we believe that a great meal is not just about the food but also the memories created around the table. We invite you to join us on a culinary journey through Mexico, where every dish tells a story, and every bite is a celebration of the flavors that make Mexican cuisine so beloved worldwide.
                    </p>
                    <p className="pt-10 text-lg">
                    We take pride in offering an extensive selection of tequilas and margaritas, handcrafted by our skilled bartenders, to complement your dining experience. And for our friends looking for lighter options, our menu includes a range of vegetarian and gluten-free choices, ensuring there's something for everyone.
                    </p>
                    <p className="pt-10 text-lg">
                    We look forward to sharing the joy of Mexican food and culture with you. ¡Buen provecho!
                    </p>
                </div>
                <div><img src={ChefPic}/></div>
            </div>
        </section>
        <hr className='w-11/12 mx-auto text-teal'></hr>
        <section className='my-20 mx-4 flex flex-col justify-center items-center'>
            <h2 className='text-2xl text-center'>It's always a party in our kitchen! See our food menu here:</h2>
            <a href="/menu"><button className="bg-teal text-sky w-40 h-10 mt-10 hover:bg-sky hover:text-teal hover:border-4" type="button">SEE OUR MENU</button></a>
        </section>
       <Footer />
    </div>
  );
}

export default About;
