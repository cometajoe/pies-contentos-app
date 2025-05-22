
// src/hooks/useTranslations.js
import { useLanguage } from '../context/LanguageContext';

/**
 * Custom hook para obtener la función de traducción (t).
 * Este es un envoltorio alrededor de useLanguage() para enfocarse
 * específicamente en la obtención de textos traducidos.
 */
export const useTranslations = () => {
  const { t } = useLanguage(); // Obtenemos el contexto completo de LanguageContext
  return t;                   // Pero este hook solo devuelve la función t
};