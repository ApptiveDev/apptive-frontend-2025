type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="w-full rounded-xl bg-[#F2F6F9] p-5">
      <h3 className="text-xl font-bold text-text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-text-gray-dark leading-relaxed">
        {description}
      </p>
    </div>
  );
}
