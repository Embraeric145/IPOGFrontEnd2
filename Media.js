const calcularMediaNotas = (notas) => {
    if (notas.length !== 3) {
        throw new Error;
    }

    const somaNotas = notas.reduce((soma, nota) => {
        if (nota < 0 || nota > 10 || !Number.isInteger(nota)) {
            throw new Error;
        }
        return soma + nota;
    }, 0);

    return somaNotas / 3;
};

// Exemplo de uso:
const notasAluno = [7, 8, 9];
try {
    const media = calcularMediaNotas(notasAluno);
    console.log(`A média das notas é: ${media}`);
} catch (erro) {
    console.error(`Erro: ${erro.message}`);
}