import { useEffect } from 'react';
const MainCTASection = () => {
  useEffect(() => {
    // Cal.com inline embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", {origin:"https://app.cal.com"});
      Cal.ns["30min"]("inline", {
        elementOrSelector: "#cal-inline",
        calLink: "osman-abliazizov/30min",
        layout: "month_view"
      });
      Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#1a9c00"},"dark":{"cal-brand":"#55ffaa"}},"hideEventTypeDetails":false,"layout":"month_view"});
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
  return <section id="contact" className="py-14 bg-background-secondary/30">
      <div className="container mx-auto px6">
        <div className="max-w-4xl mx-auto text-center ">
          <div className="mb-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
              Let's Automate
              <span className="text-primary"> Your Business</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Pick a time — we'll audit your system for free and show you exactly 
              how automation can transform your operations
            </p>
          </div>

          {/* Cal.com Inline Embed */}
          <div id="cal-inline" className="min-h-[600px] w-full animate-fade-in" style={{
          animationDelay: '0.2s'
        }}></div>

          {/* Trust Indicators */}
          <div className="mt-2 flex flex-wrap justify-center gap-8 text-sm text-foreground-muted animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
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
    </section>;
};
export default MainCTASection;