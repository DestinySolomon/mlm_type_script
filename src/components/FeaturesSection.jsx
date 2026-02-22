import { Diamond, Users, GraduationCap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Diamond,
    title: "Quality Products",
    description: "Delivering trusted, superior-quality health products rooted in scientific excellence.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Building a unified distributor community, enhancing loyalty and sales.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    description: "Offering robust training, empowering distributors for effective product marketing.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description: "Upholding regulatory compliance, ensuring customer trust through safe practices.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background relative -mt-1">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;