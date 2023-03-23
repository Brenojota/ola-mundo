import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './componentes/Header'
import Inicio from './paginas/Inicio'
import NotFound from "./paginas/NotFound";
import SobreMim from './paginas/SobreMim'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='/sobremim' element={<SobreMim />} />
          
          
        </Route>
        <Route path="posts/:id" element={<Post /> }></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
