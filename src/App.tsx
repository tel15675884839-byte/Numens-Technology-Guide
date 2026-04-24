/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldAlert,
  Wind,
  Flame,
  Compass,
  ChevronRight,
  MousePointerClick,
  Lightbulb,
  BookOpen,
  HelpCircle,
  X,
  MapPin,
  Phone,
  Printer,
  Mail,
  AlertCircle
} from "lucide-react";
import { FireBackground } from "./components/FireBackground";
import { MANUALS, Manual } from "./constants";
import { languages, getLocale, LanguageCode } from "./locales";
import { Globe } from "lucide-react";

export default function App() {
  const [selectedManual, setSelectedManual] = useState<Manual | null>(null);
  const [currentLang, setCurrentLang] = useState<LanguageCode>("en");
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = getLocale(currentLang);
  const isRTL = currentLang === "ar";

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className="w-8 h-8 text-red-600" />;
      case "Wind": return <Wind className="w-8 h-8 text-blue-400" />;
      case "Flame": return <Flame className="w-8 h-8 text-orange-500" />;
      case "Compass": return <Compass className="w-8 h-8 text-emerald-500" />;
      default: return <BookOpen className="w-8 h-8 text-zinc-400" />;
    }
  };

  return (
    <div className={`min-h-screen text-white font-sans selection:bg-orange-500/30 ${isRTL ? "font-arabic" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      <FireBackground />

      {/* Navigation / Logo Area */}
      <nav className="p-4 md:p-8 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/branding/logo-long.png" alt="Numens Logo" className="h-[42px] md:h-[52px] object-contain" />
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
            >
              <Globe className="w-4 h-4 text-orange-500" />
              <span>{languages.find(l => l.code === currentLang)?.flag}</span>
              <span className="hidden md:inline">{languages.find(l => l.code === currentLang)?.name}</span>
            </button>

            <AnimatePresence>
              {showLangMenu && (
                <>
                  <div className="fixed inset-0" onClick={() => setShowLangMenu(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={`absolute mt-2 w-48 rounded-xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden py-1 z-50 ${isRTL ? "left-0" : "right-0"}`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code as LanguageCode);
                          setShowLangMenu(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-orange-500/10 transition-colors ${currentLang === lang.code ? "text-orange-500 bg-orange-500/5" : "text-zinc-400"}`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className={`px-6 md:px-8 py-10 md:py-16 max-w-7xl mx-auto ${isRTL ? "text-center md:text-right" : "text-center md:text-left"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            {t.header.title}
          </h2>
        </motion.div>
      </header>

      {/* Manual Selection Grid */}
      <section className="px-4 md:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {MANUALS.map((manual, index) => {
            const manualText = t.manuals[manual.id] || { name: manual.name, description: manual.description };
            return (
              <motion.div
                key={manual.id}
                id={`manual-${manual.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedManual(manual)}
                className="manual-link cursor-pointer"
              >
                <div className="glass-card p-10 md:p-14 rounded-2xl flex flex-col justify-between h-full min-h-[320px] glass-card-hover group transition-all duration-500 border border-white/5 hover:border-orange-500/30">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-xs font-mono tracking-[0.3em] text-orange-500 uppercase">{t.grid.systemLabel} N-{String(index + 1).padStart(2, '0')}</span>
                    <div className={`w-3 h-3 rounded-full shadow-[0_0_12px] ${index === 0 ? 'bg-orange-500 shadow-orange-500' : 'bg-zinc-700 shadow-transparent'}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors leading-tight">{manualText.name}</h3>
                    <div className={`w-12 h-1 bg-zinc-800 group-hover:w-24 group-hover:bg-orange-500 transition-all duration-500 ${isRTL ? "mr-0" : ""}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Access Tip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 p-4 md:px-8 md:py-4 rounded-xl bg-orange-950/10 border border-orange-500/10 w-full"
        >
          <div className="flex items-center gap-4">
            <AlertCircle className="w-5 h-5 text-orange-500/80 shrink-0" />
            <p className="text-xs md:text-sm text-zinc-400 font-medium truncate md:whitespace-normal lg:whitespace-nowrap">
              {t.tip.message}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Guide Modal / Instructions Overlay */}
      <AnimatePresence>
        {selectedManual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-black/40"
              onClick={() => setSelectedManual(null)}
            />

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              className="relative w-full max-w-6xl glass-card md:rounded-2xl rounded-t-[2rem] overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 h-[92vh] md:h-fit md:max-h-[85vh]"
            >
              <button
                onClick={() => setSelectedManual(null)}
                className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors z-30 bg-zinc-900/50 md:bg-transparent rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Column: Product Info */}
              <div className={`md:col-span-5 p-6 md:p-10 flex flex-col justify-between md:min-h-[400px] bg-charcoal/50 md:bg-transparent border-b md:border-b-0 ${isRTL ? "md:border-l" : "md:border-r"} border-white/5`}>
                <div>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 md:mb-8 border border-orange-500/30">
                    {getIcon(selectedManual.icon)}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-4 leading-tight">
                    {(t.manuals[selectedManual.id] || selectedManual).name}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-10">
                    {(t.manuals[selectedManual.id] || selectedManual).description}
                  </p>
                </div>

                <a
                  href={selectedManual.url}
                  target="_blank"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold text-center transition-all shadow-lg shadow-orange-900/40 active:scale-[0.98] text-sm md:text-base sticky bottom-0 md:static"
                >
                  {t.modal.button}
                </a>
              </div>

              {/* Right Column: Sidebar Instructions */}
              <div className="md:col-span-7 p-6 md:p-10 bg-white/[0.01] flex flex-col gap-8 md:gap-10 overflow-y-auto">
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold text-orange-500 uppercase tracking-widest mb-6 md:mb-8">{t.modal.instructionTitle}</h4>
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex gap-4 md:gap-6">
                      <div className="text-xl md:text-2xl font-light text-zinc-700 shrink-0">01</div>
                      <p className="text-xs md:text-sm leading-relaxed">
                        <span className="text-white font-semibold">{t.modal.step1Title}:</span> {t.modal.step1Desc}
                      </p>
                    </div>
                    <div className="flex gap-4 md:gap-6">
                      <div className="text-xl md:text-2xl font-light text-zinc-700 shrink-0">02</div>
                      <p className="text-xs md:text-sm leading-relaxed">
                        <span className="text-white font-semibold">{t.modal.step2Title}:</span> {t.modal.step2Desc.replace("{prompt0}", (t.manuals[selectedManual.id] || selectedManual).prompts[0]).replace("{prompt1}", (t.manuals[selectedManual.id] || selectedManual).prompts[1])}
                      </p>
                    </div>
                    <div className="flex gap-4 md:gap-6">
                      <div className="text-xl md:text-2xl font-light text-zinc-700 shrink-0">03</div>
                      <p className="text-xs md:text-sm leading-relaxed">
                        <span className="text-white font-semibold">{t.modal.step3Title}:</span> {t.modal.step3Desc}
                      </p>
                    </div>
                  </div>
                </div>

                <section className="bg-orange-950/20 p-5 md:p-6 rounded-xl border border-orange-500/20 md:mt-auto">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                    <span className="text-xs md:text-sm font-bold text-orange-400">{t.modal.noteTitle}</span>
                  </div>
                  <p className="text-[10px] md:text-[11px] text-zinc-400 leading-normal">
                    {t.modal.noteDesc}
                  </p>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="px-6 md:px-8 pt-32 pb-16 border-t border-white/5 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Contact Info (Down-shifted and Single-line) */}
          <div className="mb-20">
            <h4 className="text-2xl font-bold text-white mb-10 tracking-tight">{t.footer.contactTitle}</h4>
            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <MapPin className="w-5 h-5 text-zinc-400 shrink-0" />
                <p className="text-sm md:text-base text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis">
                  {t.footer.addressVal}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Phone className="w-5 h-5 text-zinc-400 shrink-0" />
                <p className="text-sm md:text-base text-zinc-400">{t.footer.tel}: +86 574 8281 7218</p>
              </div>
              <div className="flex items-center gap-5">
                <Printer className="w-5 h-5 text-zinc-400 shrink-0" />
                <p className="text-sm md:text-base text-zinc-400">{t.footer.fax}: +86 574 8300 1379</p>
              </div>
              <div className="flex items-center gap-5">
                <Mail className="w-5 h-5 text-zinc-400 shrink-0" />
                <p className="text-sm md:text-base text-zinc-400">{t.footer.email}: sales@numens.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright only */}
          <div className="pt-8 border-t border-white/5">
            <div className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 text-[10px] md:text-xs text-zinc-500 font-medium ${isRTL ? "text-center md:text-right" : "text-center md:text-left"}`}>
              <span>{t.footer.copyright}</span>
              <span className="hidden md:inline text-zinc-700">|</span>
              <span>{t.footer.chinaAddress}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

