import { useEffect, useState } from 'react';
import AccessoriesPage from './pages/AccessoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import AnimalsPage from './pages/AnimalsPage';
import BagsPage from './pages/BagsPage';
import BugsPage from './pages/BugsPage';
import CataloguePage from './pages/CataloguePage';
import CommissionsPage from './pages/CommissionsPage';
import ContactPage from './pages/ContactPage';
import FantasyPage from './pages/FantasyPage';
import FashionPage from './pages/FashionPage';
import IndexPage from './pages/IndexPage';
import PlushiesPage from './pages/PlushiesPage';
import PopCharPage from './pages/PopCharPage';
import PricingPage from './pages/PricingPage';
import ScarvesHatsPage from './pages/ScarvesHatsPage';
import TopsBottomsPage from './pages/TopsBottomsPage';
const pages = {
 'accessories': { component: AccessoriesPage, title: "Accessories" },
 'all-products': { component: AllProductsPage, title: "All Products" },
 'animals': { component: AnimalsPage, title: "Animals" },
 'bags': { component: BagsPage, title: "Bags" },
 'bugs': { component: BugsPage, title: "Bugs & Critters" },
 'catalogue': { component: CataloguePage, title: "Store" },
 'commissions': { component: CommissionsPage, title: "Commissions" },
 'contact': { component: ContactPage, title: "Contact Me" },
 'fantasy': { component: FantasyPage, title: "Fantasy Creatures" },
 'fashion': { component: FashionPage, title: "Fashion" },
 'index': { component: IndexPage, title: "Nat's Creatures" },
 'plushies': { component: PlushiesPage, title: "Plushies" },
 'pop-char': { component: PopCharPage, title: "Popular Characters" },
 'pricing': { component: PricingPage, title: "Pricing" },
 'scarves-hats': { component: ScarvesHatsPage, title: "Scarves & Hats" },
 'tops-bottoms': { component: TopsBottomsPage, title: "Tops & Bottoms" },
};
function getRoute() { return location.hash.replace(/^#\/?/, '') || 'index'; }
export default function App() {
 const [route, setRoute] = useState(getRoute);
 useEffect(() => { const onChange = () => { setRoute(getRoute()); window.scrollTo(0, 0); }; window.addEventListener('hashchange', onChange); return () => window.removeEventListener('hashchange', onChange); }, []);
 const page = pages[route];
 useEffect(() => { document.title = page?.title || 'Page not found'; }, [page]);
 if (!page) return <main className="not-found"><h1>Page not found</h1><a href="#/">Return home</a></main>;
 const Page = page.component;
 return <Page />;
}
