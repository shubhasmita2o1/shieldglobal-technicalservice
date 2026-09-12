import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/assets/data/services";
import logoFull from "@/assets/logo/logo-full.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/hse-quality", label: "HSE & Quality" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

interface FooterProps {
  onQuoteOpen: () => void;
}

export function Footer({ onQuoteOpen }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07090C] text-white">
      {/* top red line accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

      <div className="technical-container relative pt-14 pb-8 lg:pt-16 lg:pb-10">
        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={logoFull}
                alt="Shield Global Technical Services LLC"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              Engineering, construction, facility management and technical support
              across the UAE and regional industrial markets.
            </p>
            <Button
              onClick={() => onQuoteOpen()}
              className="bg-red-600 hover:bg-red-500 text-white text-[11px] uppercase tracking-widest font-bold rounded-lg px-5 h-10 border-0"
            >
              Request a Quotation
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-500">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesList.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/services"
                    hash={srv.id}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-500">
              Company
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-500">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/55">
              <p className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Industrial & offshore technical operations — UAE & region</span>
              </p>
              <a
                href="mailto:info@shieldglobal.com"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-red-500 shrink-0" />
                info@shieldglobal.com
              </a>
              <a
                href="tel:+97140000000"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-red-500 shrink-0" />
                +971 4 000 0000
              </a>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0D1117] p-4 mt-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/40">
                <ShieldCheck className="h-3.5 w-3.5 text-red-500" />
                Standards & Compliance
              </div>
              <div className="mt-2 text-[11px] font-semibold text-white/80 leading-relaxed">
                ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} Shield Global Technical Services LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.14em]">
            <Link to="/hse-quality" className="hover:text-white transition-colors">
              HSE Policy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Quality Assurance
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Tenders & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
