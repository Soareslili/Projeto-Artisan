
import { useCart } from "../contexts/CartContext";
import { useToast } from "../hooks/use-toast";
import productWallet from "../assets/product-wallet.png";
import productPassport from "../assets/product-passport.png";
import productLaptopSleeve from "../assets/product-laptop-sleeve.png";
import productKeyholder from "../assets/product-keyholder.png";

const accessories = [
    {
        id: 1,
        name: "Classic Wallet",
        price: 125,
        image: productWallet,
    },
    {
        id: 2,
        name: "Passport Holder",
        price: 85,
        image: productPassport,
    },
    {
        id: 3,
        name: "Laptop Sleeve",
        price: 195,
        image: productLaptopSleeve,
    },
    {
        id: 4,
        name: "Key Holder",
        price: 45,
        image: productKeyholder,
    },
];

const Accessories = () => {
    const { addItem } = useCart();
    const { toast } = useToast();

    const handleAddToCart = (accessory: typeof accessories[0]) => {
        addItem({
            id: accessory.id + 100, // Offset to avoid ID conflicts with products
            name: accessory.name,
            price: accessory.price,
            image: accessory.image,
        });
        toast({
            title: "Added to cart",
            description: `${accessory.name} has been added to your cart.`,
        });
    };

    return (
        <section id="accessories" className="section-padding bg-[#FBFAF9] py-20">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 ml-20">
                    <div>
                        <h2 className="heading-section text-4xl text-accent-foreground font-Cormorant font-bold mb-4">Acessórios</h2>
                        <p className="text-body text-accent-foreground max-w-lg">
                            Os companheiros perfeitos para o seu transporte diário.
                        </p>
                    </div>

                </div>

                {/* Accessories Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mr-10">
                    {accessories.map((accessory, index) => (
                        <div
                            key={accessory.id}
                            className="cursor-pointer ml-20 bg-foreground rounded-2xl"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative w-full aspect-square overflow-hidden bg-secondary mb-4 shadow-soft group-hover:shadow-warm transition-all duration-300">
                                <img
                                    src={accessory.image}
                                    alt={accessory.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                 {accessory && (
                  <span className="absolute top-4 left-4 bg-primary text-foreground text-xs font-medium px-3 py-1 rounded-full">
                   Novo
                  </span>
                )}
                            </div>
                            <div className="flex flex-col mb-6">
                                <div className="ml-2">
                                    <h3 className="text-body font-medium text-accent-foreground mb-1">
                                        {accessory.name}
                                    </h3>
                                    <span className="text-small text-primary-foregrounds">
                                        ${accessory.price}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleAddToCart(accessory)}
                                   className="w-[200px] px-4 py-2 mt-4 ml-20 bg-accent  hover:text-primary-foreground cursor-pointer rounded-2xl text-small font-medium transition-all duration-300"
                                    aria-label={`Add ${accessory.name} to cart`}
                                >
                            
                                     Adicionar ao Carrinho
                                    

                                </button>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accessories;
