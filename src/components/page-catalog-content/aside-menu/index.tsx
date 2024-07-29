"use client";

import AsideMenuFilters from "@/components/aside-menu-filters";

interface AsideMenuProps {
  filters: {
    id: number;
    // type: FilterTypes;
    type: string;
    title: string;
    values: string[];
  }[];
}

const AsideMenu = ({ filters }: AsideMenuProps) => {
  const mockIdTestFilterDefaultVisible = 1;

  return (
    <aside className="hidden lg:block">
      <div className="flex min-h-[450px] flex-col p-5 w-64 shadow rounded-lg">
        <ul className="flex mb-0 px-0 flex-col gap-3.5 ">
          {filters.map(filter => {
            return (
              <AsideMenuFilters
                key={filter.id}
                title={filter.title}
                filterType={filter.type}
                values={filter.values}
                valueHiddenDefault={
                  filter.id !== mockIdTestFilterDefaultVisible
                }
              />
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default AsideMenu;
