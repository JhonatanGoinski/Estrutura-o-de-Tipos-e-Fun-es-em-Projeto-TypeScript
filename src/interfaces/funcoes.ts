// Utilizando funções dentro das interfaces

interface CursoProps {
  id: string;
  nome: string;
  valor: number;
  // definir apenas a função e o que ela deve esperar e retornar
  promocao: (valor: number) => void;
}

function mostrarPromocao(valor: number) {
  console.log(`Promoção no curso por apenas: R$ ${valor}`);
}

const novoCurso: CursoProps = {
  id: "123",
  nome: "Java",
  valor: 230,
  promocao: mostrarPromocao,
};

console.log(novoCurso.promocao(350));

// Exemplo 2

console.log("=======exemplo=2======");
interface SomaProps {
  (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  return valor1 + valor2;
};

const result = somaNumeros(10, 15);

console.log(`Resultado da soma: ${result}`);
