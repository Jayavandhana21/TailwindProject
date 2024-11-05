import { useState } from "react";
import Appbar from "./components/Appbar";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Items from "./components/Items";
import SeasonSpecials from "./components/SeasonSpecials";
import Items2 from "./components/Items2";

function App() {
  const [page,setpage] = useState('Fruits')
  console.log(page)

  return (
    <>
      <Appbar setpage = {setpage} page = {page} />
      <Filters/>
      {page === 'Fruits' && <Items/>}
      {page === 'Vegetables' && <Items2/>}
      <SeasonSpecials/>
      <Footer/>
    </>
  );
}

export default App;