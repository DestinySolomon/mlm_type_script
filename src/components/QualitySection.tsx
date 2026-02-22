import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Quality Assurance",
  "Trademark Security",
  "Cost-Effective",
  "Consistency",
  "Innovation",
  "Speed and Flexibility",
];

const QualitySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="glass-card p-1 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-tr from-secondary to-card rounded-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-4 rounded-xl bg-primary/15 flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-3xl">🔬</span>
                  </motion.div>
                  <p className="text-xl font-heading font-semibold text-foreground">GMP & ISO Compliant</p>
                  <p className="text-muted-foreground text-sm mt-2">In-house Research Lab</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Mastering Product Quality
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              In-house Control: Quality, Consistency, and Affordability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Leverage the advantages of our in-house research lab and GMP and ISO compliant health supplement factory. Experience unparalleled control over quality, formulation, and cost.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={b}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;