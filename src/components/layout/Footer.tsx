import { useState } from "react";
import { Link } from "react-router-dom";
import { AtSign, Globe, Send, Share2 } from "lucide-react";
import { BUSINESS } from "../../lib/utils";
import { services } from "../../data/services";

// Import your logo image
import logoImg from "../../assets/bj.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-line bg-char">
      <div className="container-px grid grid-cols-1 gap-14 py-20 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          {/* Added gap-2 for clean spacing between the image and text */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoImg} 
              alt="Britos Junk Logo" 
              // Removed the invalid inline style and used h-[50px] instead for consistent sizing
              className="h-[200px] w-auto object-contain drop-shadow-md" 
            />
            {/* Removed the negative margin (-ml-4) since gap-2 handles the spacing cleanly now */}
           
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate">
            Fast, licensed, and eco-conscious junk removal. We clear the space; you get the room back.
          </p>
          <div className="mt-7 flex gap-3">
            {[Globe, AtSign, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-slate transition hover:border-emerald hover:text-emerald"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">Quick Links</p>
          <ul className="space-y-3 text-sm text-slate">
            <li><Link to="/about" className="hover:text-emerald">About</Link></li>
            <li><Link to="/services" className="hover:text-emerald">Services</Link></li>
            <li><Link to="/contact" className="hover:text-emerald">Contact</Link></li>
            <li><Link to="/resources#faq" className="hover:text-emerald">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Services</p>
          <ul className="space-y-3 text-sm text-slate">
            {services.slice(0, 4).map((s) => (
              <li key={s.code}><Link to="/services" className="hover:text-emerald">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Hours & Contact</p>
          <ul className="space-y-2 text-sm text-slate">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-mist/80">{h.time}</span>
              </li>
            ))}
          </ul>
          <a href={`tel:${BUSINESS.phoneHref}`} className="mt-4 block font-mono text-sm text-emerald">
            {BUSINESS.phoneDisplay}
          </a>
          <a href={`mailto:${BUSINESS.email}`} className="block text-sm text-slate hover:text-emerald">
            {BUSINESS.email}
          </a>
        </div>
      </div>

      <div className="container-px border-t border-line py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow mb-2">Dispatch Updates</p>
            <p className="max-w-sm text-sm text-slate">Seasonal cleanout tips and local recycling drop-off dates a few times a year, nothing else.</p>
          </div>
          {subscribed ? (
            <p className="text-sm text-emerald">You're on the list — thanks.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
              className="flex w-full max-w-sm items-center gap-2 rounded-full border border-line bg-ink px-2 py-2"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-3 text-sm text-mist outline-none placeholder:text-slate"
              />
              <button aria-label="Subscribe" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald text-ink">
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="container-px flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-xs text-slate md:flex-row">
        <p>© {new Date().getFullYear()} Britos Junk. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/resources#privacy" className="hover:text-emerald">Privacy Policy</Link>
          <Link to="/resources#terms" className="hover:text-emerald">Terms & Conditions</Link>
          <Link to="/resources#faq" className="hover:text-emerald">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}