import { mount as mountProductsShow } from "products/ProductsIndex";
import { mount as mountCartShow } from "cart/CartShow";

mountProductsShow(document.querySelector("#my-products"));
mountCartShow(document.querySelector("#my-cart"));
