import React, { useEffect } from "react";
import { fetchData } from "../../../Utils/fetchData";
import Skeleton from "./CategoryCard/Skeleton";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      const result = await fetchData("categories?supCategoryId=null&limit=20");
      setCategories(result.data);
    })();
  }, []);
  const skeletonItem = new Array(20)
    .fill(null)
    .map((_, i) => <Skeleton key={i} />);
  const items = categories?.map((cat) => (
    <CategoryCard key={cat._id} image={cat.image} title={cat.title} id={cat._id} slug={cat.slug} />
  ));
  return <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <h2 className="mb-6 text-2xl font-bold text-slate-900">Categories</h2>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
    {categories? items :skeletonItem}
    </div>
  </div>;
}
