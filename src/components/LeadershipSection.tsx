import { motion } from "framer-motion";

const leaders = [
  {
    name: "YB Leo",
    role: "Founder | CEO",
    description: "Leo is a seasoned entrepreneur with expertise in healthcare, skincare, and fitness industries.",
    initials: "YL",
  },
  {
    name: "Jonathan Abbey",
    role: "Founder | CBO | Director of Africa",
    description: "Jonathan Abbey is a dynamic entrepreneur with a wealth of experience and expertise in the industry.",
    initials: "JA",
  },
  {
    name: "Dr. Chan",
    role: "Co-Founder | CMO | Medical & Aesthetic Advisor",
    description: "Dr. Chan, an accomplished Manipal graduate and practicing physician with a passion for elegance and wellness.",
    initials: "DC",
  },
];

const LeadershipSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Leadership Excellence
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Guided by Experienced and Visionary <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Meet our seasoned management team, combining professional expertise with strategic vision to drive continuous growth and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                <motion.div
                  className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-3xl font-heading font-bold text-primary">{leader.initials}</span>
                </motion.div>
              </div>
              <div className="p-6">
                <p className="text-primary text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                  {leader.role}
                </p>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {leader.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;