"use client"

interface SkillTagProps {
  name: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <span 
      className="relative inline-block cursor-pointer"
    >
      <span className="text-[#ce9178] hover:text-[#64dd17] transition-colors">
        {name}
      </span>
    </span>
  );
};
