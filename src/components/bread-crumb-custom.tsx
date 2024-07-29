import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadCrumbProps {
  routes: { id: number; href: string; title: string }[];
}

const BreadCrumbCustom = ({ routes }: BreadCrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {routes.map((route, index) => {
          const lastRoute = routes.length - 1 === index;

          return (
            <Fragment key={route.id}>
              <BreadcrumbItem>
                <BreadcrumbLink href={route.href}>{route.title}</BreadcrumbLink>
              </BreadcrumbItem>
              {!lastRoute && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbCustom;
