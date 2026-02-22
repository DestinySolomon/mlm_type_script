import { motion } from "framer-motion";

const WhySection = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Empowering Unity, Progress, and Action.
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why "Yes We Can!"
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Adopting the powerful and inspiring motto, "Yes We Can," we pay homage to the spirit of unity and determination. This slogan encapsulates our belief in the potential of every individual and community to overcome obstacles and attain a healthier, happier life.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-md hover:bg-primary/90 transition-all"
            >
              About Us
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="glass-card p-1 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-4xl font-heading font-bold text-primary">Y</span>
                  </motion.div>
                  <p className="text-2xl font-heading font-bold text-foreground">Yes Global</p>
                  <p className="text-muted-foreground mt-2">Health • Wellness • Success</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;