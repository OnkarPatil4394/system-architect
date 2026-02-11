import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { langLabels, Lang } from "@/i18n/translations";

const navKeys = ["about", "skills", "projects", "experience", "contact"] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLangChange = (newLang: Lang) => {
    setLang(newLang);
    setLangOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : ""
        }`}
      >
        <div className="section-container flex items-center justify-between h-14">
          <a href="#" className="font-mono text-sm font-medium text-foreground">
            Onkar Patil
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navKeys.map((key) => (
              <a key={key} href={`#${key}`} className="nav-link">
                {t(key)}
              </a>
            ))}

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-sm border border-border hover:border-primary/50"
              >
                <Globe className="w-3.5 h-3.5" />
                {langLabels[lang]}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 bg-background border border-border rounded-sm shadow-lg overflow-hidden z-50"
                  >
                    {(Object.keys(langLabels) as Lang[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLangChange(l)}
                        className={`block w-full text-left px-4 py-2 font-mono text-xs transition-colors ${
                          l === lang
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {langLabels[l]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="text-muted-foreground hover:text-foreground p-1"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 bg-background border border-border rounded-sm shadow-lg overflow-hidden z-50"
                  >
                    {(Object.keys(langLabels) as Lang[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLangChange(l)}
                        className={`block w-full text-left px-4 py-2 font-mono text-xs transition-colors ${
                          l === lang
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {langLabels[l]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className="text-foreground p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg pt-14 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navKeys.map((key, i) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="font-mono text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(key)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
