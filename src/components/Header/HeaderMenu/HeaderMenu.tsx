import * as React from "react";
import * as HeaderActions from "../../../store/header/actions";
import WithConnect from "../../../hoc/WithConnect";

import HeaderMenuUI from "./HeaderMenuUI";

interface Props {
  isAsideOpen: boolean;
  setIsAsideOpen: (state: boolean) => void;
}

type StateProps = Pick<Props, "isAsideOpen">;
type DispatchProps = Pick<Props, "setIsAsideOpen">;

const HeaderMenu: React.FC<Props> = ({
  isAsideOpen,
  setIsAsideOpen,
}: Props) => {
  function toggleAside() {
    isAsideOpen ? setIsAsideOpen(false) : setIsAsideOpen(true);
  }

  return <HeaderMenuUI isAsideOpen={isAsideOpen} toggleAside={toggleAside} />;
};

export default WithConnect<{}, StateProps, DispatchProps>(
  HeaderMenu,
  [{ selector: "isAsideOpen", section: "header" }],
  { ...HeaderActions }
);
