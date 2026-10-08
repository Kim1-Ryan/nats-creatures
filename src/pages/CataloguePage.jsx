import './catalogue.css';
const logoUrl = import.meta.env.BASE_URL + 'logo.png';
export default function CataloguePage() {
 return <div className="site-page page-catalogue">

    
    
    <div className="container"> 
        <header id="header" className="d-flex flex-wrap py-4"> 
            
            
            <div className="headerBranding">
                <a href="#/" className="d-flex align-items-center text-decoration-none"> 
                    
                    <img src={logoUrl} alt="Nat's Creatures Logo" height="60" className="me-1" /> 
                    <span id="headerName" className="name fs-2">NAT'S CREATURES</span> 
                
                </a>
            </div>
           
            
            <ul id="headerMenu" className="nav nav-pills">
                <li className="nav-item">
                    <a href="#/pricing" className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                    <a href="#/contact" className="nav-link">Contact</a>
                </li>
            </ul>
        
        </header>
    </div>

    
    <div id="hero"> 

        
        <h1 id="mainName" className="name">Made with love!</h1> 
        
        <p className="lead">There's something for everyone! Reach into a pocket:</p>
       

        
        <div id="priceCards" className="row row-cols-1 row-cols-lg-3 text-center"> 
            
            <div className="col">
                <a href="#/plushies" className="text-decoration-none"> 
                    <div className="card mb-4"> 
                        <div className="card-header py-3"> 
                            <h2 className="my-0">Plushies</h2> 
                        </div> 
                        <div className="card-body"> 
                            <ul className="list-unstyled mt-2 mb-4"> 
                                <li>Animals</li> 
                                <li>Bugs & Critters</li> 
                                <li>Fantasy Creatures</li> 
                                <li>Popular Characters</li> 
                            </ul> 
                        </div> 
                    </div> 
                </a>
            </div> 
            
            <div className="col"> 
                <a href="#/fashion" className="text-decoration-none">
                    <div className="card mb-4"> 
                        <div className="card-header py-3"> 
                            <h2 className="my-0">Fashion</h2> 
                        </div> 
                        <div className="card-body"> 
                            <ul className="list-unstyled mt-2 mb-4"> 
                                <li>Scarves & Hats</li> 
                                <li>Tops & Bottoms</li> 
                                <li>Bags</li> 
                                <li>Accessories</li> 
                            </ul> 
                        </div> 
                    </div> 
                </a>
            </div> 
           
            <div className="col"> 
                <a href="#/commissions" className="text-decoration-none">
                    <div className="card mb-4"> 
                        <div className="card-header py-3"> 
                            <h2 className="my-0">Commissions</h2> 
                        </div> 
                        <div className="card-body"> 
                            <ul className="list-unstyled mt-2 mb-4"> 
                                <li>Pet Clones</li> 
                                <li>Imaginative Creations</li> 
                                <li>Custom Requests</li> 
                                <li>You ask, I crochet!</li> 
                            </ul> 
                        </div> 
                    </div> 
                </a>
            </div> 
        
        </div>

        <a href="#/all-products" className="text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" fill="bisque" className="bi bi-box2-heart-fill" viewBox="0 0 16 16"><path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/></svg>
            <p className="name pt-2">View All</p>
        </a>
    
    </div>


    
    <div id="mobileHero"> 
        
        <h1 id="mainName2" className="name">Made with love!</h1> 
        
        <div className="col-lg-6">             
            
            <div className="d-grid p-3 d-sm-flex justify-content-sm-center text-decoration-none">
                
                <a id="category" className="text-body-secondary align-content-center" href="#/plushies">
                    <h3>Plushies</h3>
                </a>

                <a id="category" className="text-body-secondary align-content-center" href="#/fashion">
                    <h3>Fashion</h3>
                </a>

                <a id="category" className="text-body-secondary align-content-center" href="#/commissions">
                    <h3>Commissions</h3>
                </a>
            
            </div> 
        
        </div> 

        <a href="#/all-products" className="text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" fill="bisque" className="bi bi-box2-heart-fill" viewBox="0 0 16 16"><path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/></svg>
            <p className="name pt-2">View All</p>
        </a>
    
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
