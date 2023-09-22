import React, { useEffect } from "react";

function Translate() {
  useEffect(() => {
    // Verificar si el widget de traducción ya se ha inicializado
    if (!window.googleTranslateElementInit) {
      // Si no se ha inicializado, crear el script y definir la función de inicialización
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "es",
            includedLanguages: "en, es",
            layout:
              window.google.translate.TranslateElement.InlineLayout
                .SIMPLE_INLINE,
            gaTrack: true,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return (
    <div className="mi-pagina">
      <div
        id="google_translate_element"
        className="google-translation-widget"
      ></div>
    </div>
  );
}

export default Translate;