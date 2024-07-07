import { useEffect } from "react";

import useScrollControlProps from "@/_hooks/useScrollControl/useScrollControlProps.interface";

const useScrollControl = ({ isDisabled }: useScrollControlProps) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isDisabled) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isDisabled]);
};

export default useScrollControl;
