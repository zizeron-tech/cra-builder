const TRANSLATIONS = {
  es: { // one object for every available language
    home_h1: 'Título principal', // Simple text translation
    home_desc: 'ES Lorem ipsum, dolor sit...',
    home_legal: () => (
      <>
        Acepto los
        <a href="terminos-legal"> términos y condiciones</a>
      </>
    ), // Translation as react component (function) combining text and HTML elements
    contact_form_name_placeholder: 'Introduce tu nombre',
    results_count_text: ({ number, total }) => (
      `Hay ${number} resultados de ${total}`
    ), // Using dynamic parameters
  },
  en: { // same translations on different language
    home_h1: 'Main Title',
    home_desc: 'EN Lorem ipsum, dolor sit...',
    home_legal: () => (
      <>
        I Accept the
        <a href="terminos-legal"> terms and conditions</a>
      </>
    ),
    contact_form_name_placeholder: 'Enter your name',
    results_count_text: ({ number, total }) => `Found ${number} results of ${total}`,
  },
};

export default TRANSLATIONS;
