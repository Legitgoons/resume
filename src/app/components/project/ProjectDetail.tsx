import ColorPeriod from '../shared/ColorPeriod';

interface ProjectDetailProps {
  title: string;
  children: React.ReactNode;
}

export default function ProjectDetail({ title, children }: ProjectDetailProps) {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-y-3 ">
      <h4 className="h3b">
        {title}
        <ColorPeriod />
      </h4>
      <ul className="p3r flex flex-col gap-y-2">{children}</ul>
    </section>
  );
}
