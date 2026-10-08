import ProductQuilt from '../components/ProductQuilt';
import './bags.css';
const logoUrl = import.meta.env.BASE_URL + 'logo.png';
export default function BagsPage() {
 return <div className="site-page page-bags">

    

    
    <header id="header"> 
            
        
        <a href="#/fashion" className="d-flex align-items-center text-decoration-none"> 
            <img id="headerLogo" src={logoUrl} alt="Nat's Creatures Logo" />
        </a>
        
    </header>


    <h1 id="mainName" className="name">Bags</h1> 


    <ProductQuilt category="bags" />

    <footer id="footer"> 
        

        <a href="https://www.facebook.com/share/182buaeSmq/" className="text-decoration-none"> 
            <img id="footerLogo" src={logoUrl} alt="logo" height="50" />
        </a> 
           
        <p className="name text-decoration-none">© NAT'S CREATURES</p>
    
    </footer> 
    


</div>;
}
