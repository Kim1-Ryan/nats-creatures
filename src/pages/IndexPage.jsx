import './index.css';
const logoUrl = import.meta.env.BASE_URL + 'logo.png';
export default function IndexPage() {
 return <div className="site-page page-index">

    
    
    <div className="container"> 
        <header id="header" className="d-flex flex-wrap py-4"> 
            
            
            <div className="headerBranding">
                <a href="https://www.facebook.com/share/182buaeSmq/" className="d-flex align-items-center text-decoration-none"> 
                    
                    <img src={logoUrl} alt="Nat's Creatures Logo" height="60" className="me-1" /> 
                    <span id="headerName" className="name">NAT'S CREATURES</span> 
                
                </a>
            </div>
           
            
            <ul id="headerMenu" className="nav nav-pills"> 
                <li className="nav-item">
                    <a href="#/catalogue" className="nav-link">Store</a>
                </li>
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
        <img id="mainLogo" className="d-block" src={logoUrl} alt="logo" /> 
        <h1 id="mainName" className="name">Welcome!</h1> 
        <div className="col-lg-6 mx-auto"> 
            <p className="lead">Whether you're looking for a cuddly companion or a whimsical decoration, you'll find something special here. Characters you love, something from your imagination, or a beloved furry friend. Heck, I'll even crochet something for you to wear! Statement pieces, winter warmth, or a gift for a loved-one. Go on - take a peek. You know you want to.</p> 
            <div className="d-grid d-sm-flex justify-content-sm-center"> 
                <a href="#/catalogue" className="btn btn-lg px-3 text-decoration-none" style={{"color":"#fffcd1"}}>Peek</a> 
                <a href="#/contact" className="btn btn-lg px-3 text-decoration-none" style={{"color":"#fffcd1"}}>Speak</a> 
            </div>
        </div> 
    </div>

    
    <div className="container mx-auto text-center"> 
    
    <footer id="footer"> 
        
        <div id="footerBranding" className="d-flex align-items-center justify-content-center"> 
            
            <a href="https://www.facebook.com/share/182buaeSmq/" className="me-2 text-decoration-none"> 
                <img id="footerLogo" src={logoUrl} alt="logo" height="50" /> 
            </a> 
            
            <span id="footerName" className="name">© NAT'S CREATURES</span> 
        
        </div> 
        
    </footer> 
    
</div>

    

</div>;
}
