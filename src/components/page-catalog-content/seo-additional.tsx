interface SeoAdditionalProps {
  additionalInfo: { id: number; title: string; description: string }[];
}

const SeoAdditional = ({ additionalInfo }: SeoAdditionalProps) => {
  return (
    <section>
      <div className="container flex justify-start md:justify-center">
        <ul className="flex flex-col gap-2.5 lg:gap-3.5 max-w-[546px] md:max-w-[690px] lg:max-w-[895px] xl:max-w-full">
          {additionalInfo.map(data => {
            const { id, title, description } = data;
            return (
              <li key={id}>
                <h3 className="mb-3.5 md:mb-5 text-2xl md:text-4xl font-medium">
                  {title}
                </h3>
                <p className="text-xs md:text-sm m-0 leading-5">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SeoAdditional;
