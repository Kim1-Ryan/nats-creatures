import './pricing.css';
const logoUrl = import.meta.env.BASE_URL + 'logo.png';
export default function PricingPage() {
 return <div className="site-page page-pricing">

    
    
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
                    <a href="#/catalogue" className="nav-link">Store</a>
                </li>
                <li className="nav-item">
                    <a href="#/contact" className="nav-link">Contact</a>
                </li>
            </ul>
        
        </header>
    </div>

    
    <div id="hero"> 

        
        <h1 id="mainName" className="name">Pricing Guide</h1> 
        
        <p className="lead">The cost of your order will depend on the items selected and the shipping destination. This varies based on the following:</p>
       

        
        <div id="priceCards" className="mb-3 text-center"> 
            
            <div className="col"> 
                <div className="card mb-4"> 
                    <div className="card-header py-3"> 
                        <h2 className="my-0">Standard</h2> 
                    </div> 
                    <div className="card-body"> 
                        <ul className="list-unstyled mt-2 mb-4"> 
                            <li>Size of item</li> 
                            <li>Number of items</li> 
                            <li>Sale period</li> 
                            <li>Holiday specials</li> 
                        </ul> 
                    </div> 
                </div> 
            </div> 
            
            <div className="col"> 
                <div className="card mb-4"> 
                    <div className="card-header py-3"> 
                        <h2 className="my-0">Commissions</h2> 
                    </div> 
                    <div className="card-body"> 
                        <ul className="list-unstyled mt-2 mb-4"> 
                            <li>Custom design fees</li> 
                            <li>Material costs</li> 
                            <li>Labor charges</li> 
                            <li>Revision limits</li> 
                        </ul> 
                    </div> 
                </div> 
            </div> 
           
            <div className="col"> 
                <div className="card mb-4 "> 
                    <div className="card-header py-3"> 
                        <h2 className="my-0">Shipping</h2> 
                    </div> <div className="card-body"> 
                        <ul className="list-unstyled mt-2 mb-4"> 
                            <li>Standard/Express shipping</li>
                            <li>International shipping</li>
                            <li>Distance-based rates</li> 
                            <li>Package weight limits</li> 
                        </ul> 
                    </div> 
                </div> 
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
