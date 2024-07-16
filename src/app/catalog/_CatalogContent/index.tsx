import CustomBreadCrumb from "@/_components/CustomBreadCrumb";
import AsideMenu from "@/catalog/_CatalogContent/AsideMenu";
import CatalogResults from "@/catalog/_CatalogContent/CatalogResults";

const CatalogContent = () => {
  return (
    <div className="container">
      <div className="pt-4">
        <CustomBreadCrumb
          routes={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/catalog", title: "Лодки ПВХ Altair" },
          ]}
        />
      </div>
      <div className="flex gap-10 mb-8">
        <AsideMenu />
        <CatalogResults />
      </div>
    </div>
  );
};

export default CatalogContent;
