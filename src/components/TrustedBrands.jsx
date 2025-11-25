import { motion } from "framer-motion";

const TrustedBrands = () => {
    const brands = [
      { name: "Adidas", src: "/logos/adidasLogo.png" },
      { name: "H&M", src: "/logos/h&mLogo.png" },
      { name: "Sugar", src: "/logos/sugarLogo.png" },
      { name: "Rangraze", src: "/logos/rangrazeLogo.png" },
      { name: "Burger King", src: "/logos/burgerKingLogo.png" },
      { name: "Cetaphil", src: "/logos/cetaphilLogo.png" },
      { name: "Puma", src: "/logos/pumaLogo.png" },
      { name: "Allen Solly", src: "/logos/allenSollyLogo.png" },
      { name: "Libas", src: "/logos/libasLogo.png" },
      { name: "Biba", src: "/logos/bibaLogo.png" },
      { name: "Denver", src: "/logos/denverLogo.png" },
      { name: "Mamaearth", src: "/logos/mamaEarthlogo.png" },
    ];
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.1
        }
      }
    };

    const itemVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };


    return (
        <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="py-16 overflow-hidden "
      >
        <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text"
          >
            Trusted by leading Brands
          </motion.h2>


          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="w-full overflow-hidden">
              <div className="flex animate-slide whitespace-nowrap">
                {[...brands, ...brands, ...brands].map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="inline-flex px-4 md:px-8 flex-shrink-0"
                  >
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="h-12 md:h-16 w-auto object-contain transition-all duration-300 "
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };
  
  export default TrustedBrands;  