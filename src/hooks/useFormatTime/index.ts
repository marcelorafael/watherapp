import { useCallback } from "react";
import moment from "moment";

type UseFormatTimeResult = (time: string) => string;

export const useFormatTime = (): UseFormatTimeResult => {
  const formatTime = useCallback((inputTime: string): string => {
    try {
      // Substitui o delimitador `;` por `:` para ajustar a string
      const formattedInput = inputTime.replace(";", ":");
      
      // Converte a string para um objeto de data com Moment.js
      const localTime = moment(formattedInput, "hh:mm a");
      
      // Valida se a entrada é válida
      if (!localTime.isValid()) {
        throw new Error("Horário inválido");
      }
      
      // Ajusta para UTC-3 (horário padrão brasileiro)
      const brazilOffset = -3; // UTC-3
      const brazilTime = localTime.utcOffset(brazilOffset * 60);
      
      // Retorna o horário formatado no padrão brasileiro
      return brazilTime.format("HH:mm");
    } catch (error) {
      console.error("Erro ao formatar o horário:", error);
      return "Horário inválido";
    }
  }, []);

  return formatTime;
};
