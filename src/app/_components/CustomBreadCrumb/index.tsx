import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/_components/ui/breadcrumb";

interface BreadCrumbProps {
  routes: { id: number; href: string; title: string }[];
}

const CustomBreadCrumb = ({ routes }: BreadCrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {routes.map((route, index) => {
          const lastRoute = routes.length - 1 === index;

          return (
            <>
              <BreadcrumbItem key={route.id}>
                <BreadcrumbLink href={route.href}>{route.title}</BreadcrumbLink>
              </BreadcrumbItem>
              {!lastRoute && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadCrumb;
