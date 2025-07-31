export function getRegime(value: string): string {
  switch (value) {
    case "remote":
      return "Remoto";
    case "hybrid":
      return "Híbrido";
    case "in-person":
      return "Presencial";
    default:
      // Retorna o próprio valor como fallback, caso não encontre uma tradução
      return value;
  }
}