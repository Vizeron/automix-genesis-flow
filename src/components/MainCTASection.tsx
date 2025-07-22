import { useEffect } from 'react';

const MainCTASection = () => {
  useEffect(() => {
    // Cal.com element-click embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", {origin:"https://app.cal.com"});
      Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#1a9c00"},"dark":{"cal-brand":"#55ffaa"}},"hideEventTypeDetails":false,"layout":"month_view"});
      
      // Auto-open the calendar after a short delay
      setTimeout(() => {
        Cal.ns["30min"]("open");
      }, 1000);
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.head.querySelector('script[type="text/javascript"]');
      if (existingScript && existingScript.innerHTML.includes('Cal("init"')) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
              Let's Automate
              <span className="text-primary"> Your Business</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Pick a time — we'll audit your system for free and show you exactly 
              how automation can transform your operations
            </p>
          </div>

          {/* Cal.com Embed */}
          <div className="glass-card rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <button 
              data-cal-link="osman-abliazizov/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","theme":"auto"}'
              className="w-full neuro-button-primary py-8 px-12 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center glow-border">
                  <span className="text-3xl">📅</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Schedule Your Free Audit</h3>
                  <p className="text-lg opacity-90">
                    Click to open calendar and pick your preferred time
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-foreground-muted animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Free 30-minute audit</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Expert analysis included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCTASection;