interface Props {
  children: React.ReactNode;
  previewIsComplete: boolean;
}

interface PropsUI {
  children: React.ReactNode;
  style: Style;
}

interface Style {
  root: {
    display: string;
    top: number;
  };
}

type OwnProps = Pick<Props, "children">;

type StateProps = Pick<Props, "previewIsComplete">;

type DispatchProps = {};

export { OwnProps, StateProps, DispatchProps, Props, PropsUI, Style };
