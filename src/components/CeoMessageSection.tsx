import { Heart, Shield, Target } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Love",
    description: "Our fervor for our work, our products, and our family of associates shapes our operative paradigm. We promote love as an actionable credo.",
  },
  {
    icon: Shield,
    title: "Loyalty",
    description: "We place considerable emphasis on loyalty, anchoring ourselves to our mission. Our fidelity manifests in our adherence to product excellence.",
  },
  {
    icon: Target,
    title: "Commitment",
    description: "The notion of commitment propels our success trajectory. We remain committed to our mission of health and wellness on a global scale.",
  },
];

const CeoMessageSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto">
        {/* CEO Message */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            CEO's Message
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Committed to Quality, Innovation, and Wellness
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to our company, where quality and innovation intertwine. We pride ourselves on our premium product range, driven by cutting-edge research and stringent manufacturing standards. Our experienced leadership and committed team strive to exceed expectations, providing the foundation for your healthier future.
          </p>
        </motion.div>

        {/* LLC Values */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            LLC
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Love, Loyalty, Commitment
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeoMessageSection;