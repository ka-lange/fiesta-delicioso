import '../App.css';

import BottomBanner from "../assets/fdfooter.png";

function Footer() {
  return (
    <div className="Header">
        <div className="bg-red">
            <img src={ BottomBanner }/>
            <section className="h-40">
                <div className="grid grid-cols-3 grid-rows-1 gap-4">
                    <div className="text-center">
                        <h6 className="font-slab">HOURS</h6>
                        <p>Mon-Thurs: 11am - 10pm</p>
                        <p>Fri-Sun: 10am - 11pm</p>
                    </div>
                    <div className="text-center">
                        <h6 className="font-slab">LOCATION</h6>
                        <p>123 St Address</p>
                        <p>City, State 12345</p>
                    </div>
                    <div className="text-center">
                        <h6 className="font-slab">CONTACT</h6>
                        <p>example@email.com</p>
                        <p>(123) 867-5309</p>
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center">
                <p>Design by Karissa</p>
                <div>
                    <span>Port</span>
                    <span>LI</span>
                    <span>GH</span>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Footer;
