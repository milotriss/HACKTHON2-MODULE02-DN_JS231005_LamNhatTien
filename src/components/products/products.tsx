import { useRef, useState } from "react";
import "./products.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Product,Carts } from '../../interfaces/interface';

interface Props {
  product:Product[]
  addCart:Function
  cart:Carts[]
}


const Products = (props:Props): JSX.Element  => {
  const [openArrow, setOpenArrow] = useState<boolean>(false);
  const btnClick: any = useRef();
  const handleClick = (e: any): void => {
    setOpenArrow(true);
    btnClick.current.style.display = "none";
  };
  return (
    <section className="productGroup">
      {props.product.map((item:Product) => {
        return (
      <figure key={item.id} className="products">
        <p className="slogan">{item.slogan}</p>
        <img src={item.imageUrl} alt="" />
        <figcaption className="productsInfo">
          <div className="productsTitle">
            <span className="productsName">{item.name}</span>
            <FaHeart className="iconProductsTitle"/>
          </div>
          <div className="productsDesc">
            <p>
              {item.desc}
            </p>
            <div className="productsAction">
              <span className="productsPrice">{item.price}</span>
              <button
                ref={btnClick}
                onClick={handleClick}
                className="productsOpenAdd"
              >
                Add+
              </button>
              {openArrow ? (
                <div className="productsAdd">
                  <IoIosArrowBack className="iconProductsAdd" />
                  <span></span>
                  <IoIosArrowForward 
                  onClick={
                    ():void => {
                    props.addCart(item.id)
                    }
                  }
                  className="iconProductsAdd" />
                </div>
              ) : null}
            </div>
          </div>
        </figcaption>
      </figure>
      )
      })}
    </section>
  );
};

export default Products;
