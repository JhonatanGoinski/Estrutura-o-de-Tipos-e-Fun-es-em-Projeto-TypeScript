// Criando Array de uma interface,
// que seguem os padrões determinado por outra interface.

interface TecnologiasProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnologiasProps[];
}

let frontend: NomesProps = {
  tecnologia: [
    {
      id: "1",
      nome: "React",
      descricao: "Bibliotecas",
    },
    {
      id: "2",
      nome: "Html",
    },
  ],
};
console.log(frontend.tecnologia);
