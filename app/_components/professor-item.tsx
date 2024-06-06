import { Professor } from "@prisma/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ProfessorItemProps {
  professor: Professor;
}

const ProfessorItem = ({ professor }: ProfessorItemProps) => {
  return (
    <span>
        {professor.name}
    </span>
  );
};

export default ProfessorItem;
