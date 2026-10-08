import './plushies.css';
const logoUrl = import.meta.env.BASE_URL + 'logo.png';
export default function PlushiesPage() {
 return <div className="site-page page-plushies">

    
    
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
        <h1 id="mainName" className="name">Plushies</h1> 
        <div className="col-lg-6 mx-auto">             
            <div className="d-grid p-3 d-sm-flex justify-content-sm-center text-decoration-none">
                
                <a id="category" className="text-body-secondary align-content-center" href="#/animals">
                    <h3>Animals</h3>
                    
                </a>

                <a id="category" className="text-body-secondary align-content-center" href="#/bugs">
                    <h3>Bugs & Critters</h3>
                    
                </a>

                <a id="category" className="text-body-secondary align-content-center" href="#/fantasy">
                    <h3>Fantasy</h3>
                    
                </a>

                <a id="category" className="text-body-secondary align-content-center" href="#/pop-char">
                    <h3>Popular peeps</h3>
                    
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
