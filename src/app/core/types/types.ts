export interface Farmacia {
    id: number;
    codigo: string;
    nome: string;
    fabricante: string;
    data_fabricacao: Date;
    data_validade: Date;
    preco: number;
}