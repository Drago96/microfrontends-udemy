import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

productMount(document.getElementById("container-products"));
cartMount(document.getElementById("container-cart"));
