import ProductQuilt from '../components/ProductQuilt';
import './tops-bottoms.css';
const logoUrl = import.meta.env.BASE_URL + 'logo.png';
export default function TopsBottomsPage() {
 return <div className="site-page page-tops-bottoms">

    

    
    <header id="header"> 
            
        
        <a href="#/fashion" className="d-flex align-items-center text-decoration-none"> 
            <img id="headerLogo" src={logoUrl} alt="Nat's Creatures Logo" />
        </a>
        
    </header>


    <h1 id="mainName" className="name">Tops & Bottoms</h1> 


    <ProductQuilt category="tops-bottoms" />

    <footer id="footer"> 
        

        <a href="https://www.facebook.com/share/182buaeSmq/" className="text-decoration-none"> 
            <img id="footerLogo" src={logoUrl} alt="logo" height="50" />
        </a> 
           
        <p className="name text-decoration-none">© NAT'S CREATURES</p>
    
    </footer> 
    


</div>;
}
