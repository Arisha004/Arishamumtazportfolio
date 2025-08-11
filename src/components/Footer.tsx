import { Badge } from "@/components/ui/badge";
import { Sparkles, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Arisha004", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/arisha-mumtaz-788b16288/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:arishamumtaz340@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#" }
  ];

  const aiTools = [
    "Replit AI", "Cursor IDE", "Lovable", "Firebase", "MGX", "Claude AI"
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-secondary/20 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">AI Developer</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Building the future with AI-powered development. Expert in creating 
              cutting-edge digital experiences using the latest artificial intelligence tools.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">AI Tools I Use</h3>
            <div className="flex flex-wrap gap-2">
              {aiTools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-secondary to-secondary/70 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/20">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© 2025 Portfolio Website. Made by</span>
            <span>Arisha Mumtaz</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <Badge variant="outline" className="border-primary/30 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Developer & Designer
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;