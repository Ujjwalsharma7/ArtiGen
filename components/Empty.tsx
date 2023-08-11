import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-15 flex flex-col items-center justify-center">
      <div className="relative h-64 w-64">
        <Image src="/empty1.png" fill alt="Empty" />
      </div>
      <p className="text-muted-foreground text-sm text-center m-4">{label}</p>
    </div>
  );
};
