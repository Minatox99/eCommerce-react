import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  console.log("PRODUCT TO SHOW: ", context.productToShow);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      }product-detail flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={() => context.closeProductDetail()}>
          <XCircleIcon className="h-6 w-6 text-black" />
        </button>
      </div>
      <figure>
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <p>
        <span>${context.productToShow.price}</span>
        <span>${context.productToShow.title}</span>
        <span>${context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
