import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderHelp from "./HeaderAdds/HeaderHelp";
import PrincipalHeader from "./HeaderAdds/PrincipalHeader";
import CategoryHeader from "./HeaderAdds/CategoryHeader";
import ModalRecentlyAdded from "./ModalRecentlyAdded";

function Header() {
  const [isChanged, setIsChanged] = useState(false);
  const [oneTime, setOneTime] = useState(true);
  const [lastLastProduct, setlastLastProduct] = useState(0);
  const product = useSelector((state) => state.product);
  const lastProduct = useSelector((state) => state.lastProduct);

  useEffect(() => {
    if (lastLastProduct?.amount === undefined || lastProduct?.name !== lastLastProduct?.name) {
      if (lastProduct?.amount > 0) {
        setIsChanged(true);
        setlastLastProduct(lastProduct);
    }
    } else {
      if (lastProduct?.amount > lastLastProduct?.amount) {
        setIsChanged(true);
      }
    }

    if(oneTime && lastProduct.name !== ""){
      setOneTime(false);
      setlastLastProduct(lastProduct);
    }

    if (lastProduct.name === lastLastProduct?.name) {
      setlastLastProduct(lastProduct);
    }
  }, [product, lastProduct]);

  useEffect(() => {
    setIsChanged(false);
  }, []);

  return (
    <>
      <HeaderHelp />

      <PrincipalHeader />

      <CategoryHeader />

      {isChanged ? (
        <ModalRecentlyAdded
          timeOut={() => {
            setIsChanged(false);
          }}
          cls="translate3rem"
        />
      ) : (
        <ModalRecentlyAdded />
      )}
    </>
  );
}

export default Header;
