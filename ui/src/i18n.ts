import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
  en: {
    translation: {
      updateGameBtn: 'Update Game',
      launchGameBtn: 'Launch Game',
      'dispatcher.jobFrom': 'From',
      'dispatcher.jobCompanyFrom': 'Company',
      'dispatcher.jobTo': 'To',
      'dispatcher.jobCompanyTo': 'Company',
      'dispatcher.cargo': 'Cargo',
      'dispatcher.addJobBtn': 'Add Job',
      'dispatcher.addRandomJobBtn': 'Add random job',
      'dispatcher.deleteJobListBtn': 'Delete job list',
      'dispatcher.profileSelect': 'Profiles',
      'dispatcher.profileSelectPlaceholder': 'Select your profile',
      'dispatcher.saveFileSelect': 'Saved Game',
      'dispatcher.saveFileSelectPlaceholder': 'Select a saved game',
    },
  },
  es: {
    translation: {
      updateGameBtn: 'Guardar Juego',
      launchGameBtn: 'Jugar Juego',
      'dispatcher.jobFrom': 'Desde',
      'dispatcher.jobCompanyFrom': 'Compañía',
      'dispatcher.jobTo': 'Hacia',
      'dispatcher.jobCompanyTo': 'Compañía',
      'dispatcher.cargo': 'Carga',
      'dispatcher.addJobBtn': 'Añadir Trabajo',
      'dispatcher.addRandomJobBtn': 'Añadir trabajo aleatorio',
      'dispatcher.deleteJobListBtn': 'Borrar lista',
      'dispatcher.profileSelect': 'Perfiles',
      'dispatcher.profileSelectPlaceholder': 'Selecciona tu perfil',
      'dispatcher.saveFileSelect': 'Juego Guardado',
      'dispatcher.saveFileSelectPlaceholder': 'Selecciona un juego guardado',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
