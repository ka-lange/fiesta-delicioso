import '../App.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';



function Menu() {
  return (
    <div className="bg-pink">
        <Header />
        <Banner />
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 m-2">
            <section className="mt-10 border">
                <div className="h-24 bg-red flex justify-center items-center">
                    <h2 className="font-bold font-slab text-3xl text-pink">Starters</h2>
                </div>
                <MenuItem 
                    name="Queso Fundido" 
                    description="Melted cheese with chorizo, served with warm tortillas for dipping."
                    price="$10" />
                <MenuItem 
                    name="Nachos Supreme"
                    description="Crispy tortilla chips topped with melted cheese, jalapeños, sour cream, guacamole, and your choice of seasoned ground beef or shredded chicken."
                    price="$12" />
                <MenuItem 
                    name="Tamales"
                    description="Traditional corn masa dumplings filled with your choice of pork, chicken, or vegetables, served with salsa"
                    price="$11" />
            </section>
            <section className="row-start-2 md:row-start-1 mt-10 border">
                <div className="h-24 bg-red flex justify-center items-center">
                    <h2 className="font-bold font-slab text-3xl text-pink">Soups & Salads</h2>
                </div>
                <MenuItem 
                    name="Tortilla Soup" 
                    description="A rich tomato-based soup with shredded chicken, crispy tortilla strips, avocado, cheese, and cilantro."
                    price="$14" />
                <MenuItem 
                    name="Taco Salad"
                    description="A crispy tortilla shell filled with lettuce, seasoned ground beef or shredded chicken, cheese, tomatoes, and sour cream."
                    price="$12" />
                <MenuItem 
                    name="Avocado Salad"
                    description="Slices of fresh avocado on a bed of mixed greens with a citrus dressing."
                    price="$13" />
            </section>
            <section className="md:row-start-2 row-start-3 mt-10 border">
                <div className="h-24 bg-red flex justify-center items-center">
                    <h2 className="font-bold font-slab text-3xl text-pink">Mains</h2>
                </div>
                <MenuItem 
                    name="Fajitas" 
                    description="Sizzling hot skillet with your choice of marinated chicken, beef, or shrimp, served with sautéed bell peppers and onions, guacamole, sour cream, and tortillas."
                    price="$18" />
                <MenuItem 
                    name="Enchiladas Suizas"
                    description="Corn tortillas filled with chicken, topped with a creamy tomatillo sauce and melted cheese."
                    price="$15" />
                <MenuItem 
                    name="Carne Asada"
                    description="Grilled marinated steak served with rice, beans, and guacamole."
                    price="$16" />
            </section>
            <section className="md:row-start-2 row-start-4 mt-10 border">
                <div className="h-24 bg-red flex justify-center items-center">
                        <h2 className="font-bold font-slab text-3xl text-pink">Desserts</h2>
                </div>
                <MenuItem 
                    name="Tres Leches Cake" 
                    description="A sponge cake soaked in three kinds of milk, topped with whipped cream and fresh fruit."
                    price="$12" />
                <MenuItem 
                    name="Flan "
                    description="Creamy caramel custard dessert, drizzled with caramel sauce."
                    price="$10" />
                <MenuItem 
                    name="Pastel de Chocolate y Chile"
                    description="Chocolate and chili pepper-infused cake served with vanilla ice cream."
                    price="$12" />
            </section>
        </div>
        
        <section className='my-20 mx-4 flex flex-col justify-center items-center'>
            <h2 className='text-2xl text-center'>Wonder how our colorful menu was curated? Visit our About page to learn more!</h2>
            <a href="/about"><button className="bg-red text-sky w-40 h-10 mt-10" type="button">LEARN MORE</button></a>
        </section>
        <Footer />
    </div>
  );
}

export default Menu;