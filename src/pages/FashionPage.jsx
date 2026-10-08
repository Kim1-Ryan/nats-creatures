import './fashion.css';
const logoUrl = import.meta.env.BASE_URL + 'logo.png';
export default function FashionPage() {
 return <div className="site-page page-fashion">

    
    
    <div className="container"> 
        <header id="header" className="d-flex flex-wrap py-4"> 
            
            
            <div className="headerBranding">
                <a href="#/catalogue" className="d-flex align-items-center text-decoration-none"> 
                    
                    <img src={logoUrl} alt="Nat's Creatures Logo" height="230" />
                </a>
            </div>
        
        </header>
    </div>

    
    <div id="hero"> 
        <h1 id="mainName" className="name">Fashion</h1> 
        <div className="col-lg-6 mx-auto">             
            <div className="d-grid p-3 d-sm-flex justify-content-sm-center text-decoration-none">
                
                <a id="category" className="text-body-secondary align-content-center" href="#/scarves-hats">
                    <h3>Scarves & Hats</h3>
                    
                </a>

                <a id="category" className="text-body-secondary align-content-center" href="#/tops-bottoms">
                    <h3>Tops & Bottoms</h3>
                    
                </a>

                <a id="category" className="text-body-secondary align-content-center" href="#/bags">
                    <h3>Bags</h3>
                    
                </a>

                <a id="category" className="text-body-secondary align-content-center" href="#/accessories">
                    <h3>Accessories</h3>
                    
                </a>
            
            </div> 
        
        </div> 
    </div>

    
    <div className="container"> 
        
        <footer id="footer" className="d-flex justify-content-center py-2 my-4"> 
            
            
            <div className="d-flex align-items-center"> 
                <a href="https://www.facebook.com/share/182buaeSmq/" className="me-2 mb-md-0 text-decoration-none"> 
                    <img id="footerLogo" src={logoUrl} alt="logo" height="50" /> 
                </a> 
                <span className="name mb-md-0">© NAT'S CREATURES</span> 
            </div> 
        
        </footer> 
    
    </div>

    

</div>;
}
