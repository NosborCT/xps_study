import prisma from "../_lib/prisma";

const ProfessorList = async () => {
  const professores = await prisma.professor.findMany();

  return (
    <>
      {professores.map((professor) => (
        <option key={professor.id} value={professor.id}>
          {professor.name}
        </option>
      ))}
    </>
  );
};

export default ProfessorList;
