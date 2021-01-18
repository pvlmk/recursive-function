interface ContentOfElement {
  selector: string;
  text: string | string[];
}

interface DataElement {
  content?: ContentOfElement[];
  isArticle: boolean;
  isSpotlight: boolean;
  id: string;
  image?: string;
  preview: string;
  title: string;
}

type ReactChildren = React.ReactNode;

export { ContentOfElement, DataElement, ReactChildren };
