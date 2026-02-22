import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="bg-nav border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-lg">Y</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                yes<span className="text-primary">global</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Join us on this exciting journey towards unparalleled wellness. Yes We Can!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Our Products", "News", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              {["SunRise", "SunSet", "ColonGuard", "AlphaMax M+", "AlphaMax V+", "Probio C+"].map((p) => (
                <li key={p}>
                  <a href="#products" className="text-muted-foreground text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@yes.global</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (800) YES-GLOB</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Global Headquarters</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Yes Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;