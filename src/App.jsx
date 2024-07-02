import Banner from "./components/banner";
import Footer from "./components/footer";
import promoTarjetas from "./components/promoTarjetas";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import bannerProductos from "./components/bannerProductos"



function App() {
  return (
    <>
      <promoTarjetas />
      <NavBar />
      <Banner />
      <ItemListContainer texto={"No se encuentra el producto solicitado"} />
      <Footer />
    </>
  )
}

export default App