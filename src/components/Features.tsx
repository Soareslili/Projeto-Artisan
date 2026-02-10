import { Shield, Award, Leaf, Ruler } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proteção máxima",
    description: "Costura de nível militar e cantos reforçados garantem que seus pertences permaneçam seguros.",
  },
  {
    icon: Award,
    title: "Materiais Premium",
    description: "Apenas o couro de primeira qualidade, obtido das melhores tanatorias do mundo.",
  },
  {
    icon: Leaf,
    title: "Sustentável",
    description: "Produção ecológica com couro curtido com vegetais e embalagens recicladas.",
  },
  {
    icon: Ruler,
    title: "Design Funcional",
    description: "Cada bolsom, zíper e alça é pensado para uso diário.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-muted-foreground/45 py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-3xl text-background font-Cormorant font-bold mb-4">Proteção máxima</h2>
          <p className="text-body text-accent-foreground max-w-2xl mx-auto">
            Nossas bolsas de couro são projetadas para oferecer a melhor proteção para seus pertences, combinando materiais premium e design inteligente para garantir que seus itens estejam sempre seguros.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className=" w-85 bg-white rounded-2xl p-4 text-center shadow-soft hover:shadow-warm transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon size={28} className="text-primary" />
              </div>
              <h3 className="heading-card text-accent-foreground font-Inter mb-3">{feature.title}</h3>
              <p className="text-body text-accent-foreground font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;