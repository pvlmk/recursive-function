import * as React from "react";
import WithConnect from "../../../hoc/WithConnect";
import useBodyOverflow from "../../../hooks/useBodyOverflow";

import HeaderAsideUI from "./HeaderAsideUI";

interface Props {
  isAsideOpen: boolean;
}

type StateProps = Pick<Props, "isAsideOpen">;

const HeaderAside: React.FC<Props> = ({ isAsideOpen }: Props) => {
  useBodyOverflow(null, isAsideOpen);

  return <HeaderAsideUI isAsideOpen={isAsideOpen} />;
};

export default WithConnect<{}, StateProps, {}>(
  HeaderAside,
  [{ selector: "isAsideOpen", section: "header" }],
  null
);
