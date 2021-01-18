import * as React from "react";
import * as ContentsActions from "../../../store/contents/actions";
import WithConnect from "../../../hoc/WithConnect";

import ListItemUI from "./ListItemUI";

interface Props {
  currentPos: number;
  id: string;
  images: string[];
  index: number;
  setAllowTransition: (state: boolean) => void;
  setBackground: (background: string) => void;
  setPosition: (position: number) => void;
  setSelectedId: (selectedId: string) => void;
  text: string;
}

type OwnProps = Pick<Props, "id" | "index" | "text">;
type StateProps = Pick<Props, "currentPos" | "images">;
type DispatchProps = Pick<
  Props,
  "setAllowTransition" | "setBackground" | "setPosition" | "setSelectedId"
>;

const ListItem: React.FC<Props> = ({
  currentPos,
  id,
  images,
  index,
  setAllowTransition,
  setBackground,
  setPosition,
  setSelectedId,
  text,
}: Props) => {
  const hoverTrigger = index === currentPos;

  React.useEffect(() => {
    hoverTrigger && setSelectedId(id);
  }, [hoverTrigger]);

  function selectItem() {
    setAllowTransition(true);
    setBackground(images[index]);
    setPosition(index);
  }

  function resetBackground() {
    setAllowTransition(false);
    setBackground(null);
    setPosition(null);
  }

  return (
    <ListItemUI
      id={id}
      hoverTrigger={hoverTrigger}
      onMouseEnter={selectItem}
      onMouseLeave={resetBackground}
      text={text}
    />
  );
};

export default WithConnect<OwnProps, StateProps, DispatchProps>(
  ListItem,
  [
    { selector: "currentPos", section: "contents" },
    { selector: "images", section: "contents" },
  ],
  { ...ContentsActions }
);
