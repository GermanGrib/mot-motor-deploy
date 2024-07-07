import { useDispatch, useSelector } from "react-redux";

import { toggleCatalogPopup } from "@/_store/slices/Catalogs";
import { RootState } from "@/_store/store";

const Overlay = () => {
  const dispatch = useDispatch();
  const isCatalogOpen = useSelector(
    (state: RootState) => state.catalogPopup.isCatalogPopupOpen,
  );
  const handleOverlayClick = () => {
    isCatalogOpen && dispatch(toggleCatalogPopup());
  };
  return (
    <>
      {isCatalogOpen && (
        <div
          className="flex absolute w-screen h-screen bg-[#333C494D] z-20"
          onClick={handleOverlayClick}
        />
      )}
    </>
  );
};

export default Overlay;
