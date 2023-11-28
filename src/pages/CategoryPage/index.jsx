import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../assets/category/vertiv-banner-2.jpg";
import MarkCarousel from "../../components/MarkCarousel";
import FlechaAbajo from "../../assets/cart/flechaAbajo.png";
import AllProducts from "../../components/AllProducts";
import "./index.css";

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [nProducts, setNProducts] = useState(1);
  const [menuFilter, setMenuFilter] = useState(true);
  const [categorys, setCategorys] = useState([]);
  const [mark, setMark] = useState([]);

  const [isCheckedSubcategory, setIsCheckedSubcategory] = useState(false);
  const [filterSubCategory, setFiterSubCategory] = useState("");
  const [filterMark, setFilterMark] = useState("");
  const [ejecutarEfecto, setEjecutarEfecto] = useState(true);

  const toggleFilterSubCategory = (filter) => {
    if (isCheckedSubcategory === true) {
      setIsCheckedSubcategory(false);
      setFiterSubCategory("");
      setFiterSubCategory(filter);
      console.log(filter);
    } else if (isCheckedSubcategory === false) {
      setIsCheckedSubcategory(true);
      setFiterSubCategory(filter);
      console.log(filter);
    }
  };
  const toggleFilterMark = (filter) => {
    setFilterMark(filter);
    console.log(filter);
  };
  const reset = () => {
    setFiterSubCategory("");
    setFilterMark("");
    console.log(filterSubCategory);
    console.log(filterMark);
    setEjecutarEfecto(true);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "Application/json");
      var raw = JSON.stringify({
        Authorization: "Bearer " + localStorage.getItem("TokenProducts"),
        "Content-Type": "Application/json",
        "X-CATEGORIA": category,
        "X-SUBCATEGORIA": filterSubCategory,
        "X-MARKS": filterMark,
        "X-DISPONIBILIDAD": "1",
        "X-PARTNUM": "",
        "X-DESCUENTO": "0",
        "X-NUMBERPAGE": "",
        "X-PRECIOINICIAL": "",
        "X-PRECIOFINAL": "",
        "X-MODULO": "",
        "X-PALABRACLAVE": "",
        "X-PRODUCTONUEVO": "",
        "X-COLOR": "",
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "https://open-backend-beryl.vercel.app/catalog",
          requestOptions
        );
        const result = await response.json();
        setProducts(result.listaproductos);
        setNewAllProduct(result.listaproductos.slice(0, itemsAmount));
        setCategorys(result.paginado.CategoriasSub);
        setNProducts(result.paginado.CantidadProduct);
        setMark(result.paginado.Marcas);
        console.log(result.paginado.Marcas);
        console.log(result);
      } catch (error) {
        console.log("error", error);
      }
    };
    if (ejecutarEfecto) {
      fetchData();
      setEjecutarEfecto(false);
      setFiterSubCategory("");
      setFilterMark("");
    }
  }, [category, ejecutarEfecto]);

  const handleClick = () => {
    setEjecutarEfecto(true);
  };

  const itemsAmount = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [newAllProduct, setNewAllProduct] = useState(products);
  const toggleMenuFilter = () => {
    setMenuFilter(!menuFilter);
  };
  const [menuOrderBy, setMenuOrderBy] = useState(true);
  const toggleMenuOrderBy = () => {
    setMenuOrderBy(!menuOrderBy);
  };
  const [opacity, setOpacity] = useState(true);
  const toggleOpacity = () => {
    setOpacity(!opacity);
  };
  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = (nextPage - 1) * itemsAmount;
    if (firstIndex < products.length) {
      setNewAllProduct(products.slice(firstIndex, firstIndex + itemsAmount));
      setCurrentPage(nextPage);
    }
  };
  const lastHandler = () => {
    if (currentPage > 1) {
      const nextPage = currentPage - 1;
      const firstIndex = (nextPage - 1) * itemsAmount;
      setNewAllProduct(products.slice(firstIndex, firstIndex + itemsAmount));
      setCurrentPage(nextPage);
    }
  };
  const [typeGrid, setTypeGrid] = useState(true);
  const toggleTypeGrid = () => {
    setTypeGrid(!typeGrid);
  };
  const toggleSvg = () => {
    toggleTypeGrid();
    toggleOpacity();
  };
  return (
    <div className="container-master-category">
      <div className="conatiner-filter-category isTable">
        <div className="filter-section">
          
          <h4>Subcategorias</h4>
          <form>
            {categorys.map((subcategory) => (
              <div>
                <input
                  key={subcategory[1]}
                  type="checkbox"
                  checked={isCheckedSubcategory[1]}
                  onChange={() => toggleFilterSubCategory(subcategory[1])}
                />
                {subcategory[1]}
              </div>
            ))}
          </form>
        </div>
        <div className="filter-section">
          <h4>Precios</h4>
          <form>
            <input type="checkbox" />
            <label>$ 0 - $ 100.000</label>
          </form>
          <form>
            <input type="checkbox" />
            <label>$ 100.000 - $ 500.000</label>
          </form>
          <form>
            <input type="checkbox" />
            <label>$ 500.000 - $ 1.000.000</label>
          </form>
          <form>
            <input type="checkbox" />
            <label>$ 1.000.000 - $ 10.000.000</label>
          </form>
          <form>
            <input type="checkbox" />
            <label>$ 10.000.000 - Más</label>
          </form>
        </div>
        <div className="filter-section">
          <h4>Marca</h4>
          <form>
            {mark.map((marca) => (
              <div>
                <input
                  key={marca[1]}
                  type="checkbox"
                  onChange={() => toggleFilterMark(marca[1])}
                />
                {marca[1]}
              </div>
            ))}
          </form>
          <div className="div-reset-button">
            <button onClick={reset} className="reset-button">
              Reiniciar
            </button>
            <button onClick={handleClick} className="reset-button">
              Aplicar
            </button>
          </div>
        </div>
      </div>
      <div className="container-products-category">
        <div className="container-banner no-mobile">
          <img src={Banner} />
        </div>
        <div className="products-category-name">
          <h1>{category}</h1>
          <p>Mostrando 9 de {nProducts} resultados</p>
        </div>
        <div className="products-category-view">
          <div className="category-view-logos isTable">
            <svg
              className={`first-svg-category ${opacity ? "" : "noSecond"}`}
              onClick={toggleSvg}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
            </svg>
            <svg
              className={`second-svg-category ${opacity ? "noFirst" : ""}`}
              onClick={toggleSvg}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
              />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
              <path
                fill-rule="evenodd"
                d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
              />
            </svg>
          </div>
          <div
            className="tablet filter-category-tablet"
            onClick={toggleMenuFilter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
              />
            </svg>
            <p>Filtros</p>
          </div>
          <div className="category-view-order">
            <div className="category-order-by" onClick={toggleMenuOrderBy}>
              <p>Ordenar por</p>
              <img src={FlechaAbajo} />
            </div>
          </div>
          <div className={`nav-order-by ${menuOrderBy ? "isNone" : ""}`}>
            <p>A a la Z</p>
            <p>Z a la A</p>
            <p>Mayor Precio</p>
            <p>Menor Precio</p>
          </div>
        </div>

        <div className="tablet">
          <div className={`nav-filter ${menuFilter ? "isNone" : ""}`}>
            <div className="container-svg-filter">
              <svg
                onClick={toggleMenuFilter}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            <div className="filter-section">
              <h4>Subcategorias</h4>
              <form>
                {categorys.map((subcategory) => (
                  <div>
                    <input
                      key={subcategory[1]}
                      type="checkbox"
                      checked={isCheckedSubcategory[1]}
                      onChange={() => toggleFilterSubCategory(subcategory[1])}
                    />
                    {subcategory[1]}
                  </div>
                ))}
              </form>
            </div>
            <div className="filter-section">
              <h4>Precio</h4>
            </div>
            <div className="filter-section">
              <h4>Marca</h4>
            </div>
            <div className="filter-section">
              <h4>Colores</h4>
            </div>
            <div className="filter-section">
              <h4>Descuentos</h4>
            </div>
          </div>
        </div>

        <div className={`grid-container-category ${typeGrid ? "" : "isNone"} `}>
          <AllProducts products={newAllProduct} type={true} />
        </div>
        <div
          className={`grid-row-container-category ${typeGrid ? "isNone" : ""} `}
        >
          <AllProducts products={newAllProduct} type={false} />
        </div>
        <div className="div-button-page">
          <button className="button-page" onClick={() => lastHandler()}>
            Atras
          </button>
          <button className="button-page" onClick={() => nextHandler()}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
