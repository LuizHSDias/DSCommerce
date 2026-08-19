import { useState, useEffect } from 'react';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import './styles.css'
import type { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';


function Catalog(){

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [productName, setProductName] = useState("");

    /*
    const objTest : CategoryDTO = {
      id: 8,
      name: "Jardinagem"
    }

    */

    useEffect(() => {

     // localStorage.setItem("minhaCategoria", JSON.stringify(objTest));

     // const obj = JSON.parse(localStorage.getItem("minhaCategoria") || "{}");
     // console.log(obj.name);

      productService.findPageRequest(0, "").then(response => {
        setProducts(response.data.content);
      });
    }, [productName]);

    function handleSearch(searchText: string){
      setProductName(searchText)
    }
    
    return (

      <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

          {
            products.map(
              product =>  <CatalogCard key={product.id} product={product} />)
          }
          
        </div>

     <ButtonNextPage />
      </section>
    </main>
        
    );
}

export default Catalog