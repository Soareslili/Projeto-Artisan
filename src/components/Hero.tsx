import heroBags from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBags}
          alt="Premium leather bags collection"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      </div>

      {/* Content */}
    
      <div className="font-Inter relative z-10 max-w-2xl mt-24 md:mt-20 space-y-6 ml-20">


        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-white font-CormorantGaramond italic" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            Melhor com a idade
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground font-Inter italic mt-6"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1700"
        >
          Projetado para durar a vida toda. Cada peça conta uma história de
          artesanato e qualidade.
        </p>

           <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 
                         rounded-full bg-accent text-background 
                         font-medium font-Inter text-sm transition hover:brightness-110 transform hover:scale-105"
            >
              Compre agora
            </a>

      </div>


    </section>
  );
};

export default Hero;
