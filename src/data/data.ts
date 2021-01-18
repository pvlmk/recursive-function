import { article01, article02, article03 } from "./articles";
import { image01, image02, image03 } from "./images";

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

const data: DataElement[] = [
  {
    content: article01,
    isArticle: true,
    isSpotlight: true,
    id: "01",
    image: image01,
    preview:
      "Currying is the process of taking a function with multiple arguments and returning a series of functions that take one argument and eventually resolve to a value.",
    title: "Currying",
  },
  {
    content: [{ selector: "", text: "" }],
    isArticle: true,
    isSpotlight: true,
    id: "02",
    image: image02,
    preview:
      "Pure Function is a function that has the following properties: Its return value is the same for the same arguments. Its evaluation has no side effects. Thus a pure function is a computational analogue of a mathematical function.",
    title: "Pure",
  },
  {
    content: [{ selector: "", text: "" }],
    isArticle: true,
    isSpotlight: true,
    id: "03",
    image: image03,
    preview:
      "Function composition is a mechanism of combining multiple simple functions to build a more complicated one. The result of each function is passed to the next one. In mathematics, we often write something like: f(g(x)).",
    title: "Compose",
  },
  {
    isArticle: false,
    isSpotlight: true,
    id: "04",
    preview: "List of all available articles.",
    title: "Other",
  },
];

export default data;
