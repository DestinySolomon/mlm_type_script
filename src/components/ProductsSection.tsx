import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    name: "SunRise",
    description: "Boost your skin's vitality and defy aging with our product that rejuvenates the skin and promotes a youthful complexion.",
    emoji: "🌅",
  },
  {
    name: "SunSet",
    description: "Enhance your sleep quality and defy aging with our natural aid that promotes relaxation and reduces stress.",
    emoji: "🌇",
  },
  {
    name: "ColonGuard",
    description: "Recharge and detoxify your life with our unique blend that promotes digestive health and boosts energy.",
    emoji: "🛡️",
  },
  {
    name: "AlphaMax M+",
    description: "Support men's health and reignite vitality with our product that aids prostate health and boosts libido.",
    emoji: "💪",
  },
  {
    name: "AlphaMax V+",
    description: "Empower women's health and reproductive journey with our solution that promotes hormonal balance and vitality.",
    emoji: "✨",
  },
  {
    name: "Probio C+",
    description: "Support your immune system with a powerful synergy of premium, all-natural ingredients for resilience and balance.",
    emoji: "🧬",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Premium Product Range
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            <span className="text-gradient">Quality</span> Defines Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience our diverse portfolio of premium-quality products designed with meticulous precision and commitment to enhancing your health and lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {product.emoji}
              </motion.div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;