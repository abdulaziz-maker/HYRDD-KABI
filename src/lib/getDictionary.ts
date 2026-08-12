import ar from "@/dictionaries/ar.json";
import en from "@/dictionaries/en.json";

export function getDictionary(lang: string) {
  return lang === "ar" ? ar : en;
}