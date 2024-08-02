interface IBtnText {
  color?: "white" | "dark";
  text: string;
}

interface IProduct {
  id: string;
  imgUrl: string;
  secondaryImgUrl: string;
  modelImgUrls: string[];
  otherImgUrls: string[];
  videoUrls: string[];
  slug: string;
  title: string;
  price: number;
  discountedPrice: number | null;
  description: string;
  colors: string[];
  sizes: string[];
  category: {
    slug: string;
  };
}

interface IProductCard {
  image: string;
  backImage?: string;
  title: string;
  color: string;
  label?: string;
}

interface IStyleFeedCard {
  image: string;
  username: string;
}
