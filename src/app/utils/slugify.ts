export function slugify(text: string): string {
return text
    .toLowerCase()
    .normalize("NFD") // Separa acentos das letras
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .replace(/[^a-z0-9\s]/g, "") // Remove caracteres especiais, mantendo apenas letras, números e espaços
    .trim() // Remove espaços extras no início e no fim
    .replace(/\s+/g, "-"); // Substitui espaços por "-"
}
