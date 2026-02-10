import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../hooks/use-toast";
import productTote from "../assets/product-tote.png";
import productBackpack from "../assets/product-backpack.png";
import productDuffle from "../assets/product-duffle.png";
import productBriefcase from "../assets/product-briefcase.png";
import productMessenger from "../assets/product-messenger.png";
import productWallet from "../assets/product-wallet.png";

const products = [
  {
    id: 1,
    name: "Bolsa Clássica de Couro",
    price: 395,
    rating: 5,
    reviews: 128,
    image: productTote,
    isNew: true,
  },
  {
    id: 2,
    name: "Mochila Heritage",
    price: 485,
    rating: 5,
    reviews: 89,
    image: productBackpack,
    isNew: true,
  },
  {
    id: 3,
    name: "Duffle de Viagem",
    price: 595,
    rating: 4,
    reviews: 67,
    image: productDuffle,
    isNew: false,
  },
  {
    id: 4,
    name: "Briefcase Executivo",
    price: 545,
    rating: 5,
    reviews: 156,
    image: productBriefcase,
    isNew: false,
  },
  {
    id: 5,
    name: "Messenger Urbano",
    price: 425,
    rating: 4,
    reviews: 94,
    image: productMessenger,
    isNew: true,
  },
  {
    id: 6,
    name: "Carteira Compacta",
    price: 125,
    rating: 5,
    reviews: 203,
    image: productWallet,
    isNew: false,
  },
];

const Products = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section id="products" className="section-padding bg-foreground/5 py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-3xl text-background font-Cormorant font-bold mb-4">Confira nossa linha</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Nossas mais novas criações, recém-criadas e prontas para se tornarem sua companhia diária.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-8 mr-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-popover-foreground group rounded-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-70 overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-primary text-foreground text-xs font-medium px-3 py-1 rounded-full">
                   Novo
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="heading-card text-accent-foreground text-lg font-Inter mb-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < product.rating
                            ? "text-accent fill-accent"
                            : "text-accent-foreground"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-small text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary-foreground">
                    ${product.price}
                  </span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 px-4 py-2 bg-accent  hover:text-primary-foreground cursor-pointer rounded-full text-small font-medium transition-all duration-300"
                  >
                    <ShoppingCart size={16} />
                   Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default Products;
