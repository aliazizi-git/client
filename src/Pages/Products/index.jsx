import React, { useEffect, useReducer } from "react";
import { fetchData } from "../../Utils/fetchData";
import { useParams } from "react-router-dom";
import Skeleton from "./ProductCard/Skeleton";
import ProductCard from "./ProductCard";
const initialState = {
  loading: true,
  page: 1,
  sort: "-createdAt",
  search: "",
  count: null,
  data: null,
  limit: 10,
  minPrice: 0,
  maxPrice: 1000000,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload.data,
        count: action.payload.count,
        loading: false,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
        loading: true,
      };
    case "SET_SORT":
      return {
        ...state,
        sort: action.payload,
        loading: true,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
        loading: true,
      };
    case "SET_LIMIT":
      return {
        ...state,
        limit: action.payload,
        loading: true,
      };
    case "SET_MIN_PRICE":
      return {
        ...state,
        minPrice: action.payload,
        loading: true,
      };
    case "SET_MAX_PRICE":
      return {
        ...state,
        maxPrice: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
export default function Products() {
  const { categoryId } = useParams();
  const [
    { limit, page, sort, count, minPrice, maxPrice, search, loading, data },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      const result = await fetchData(
        `products?${
          categoryId && categoryId !== "all" ? `categoryIds=${categoryId}&` : ""
        }page=${page}&limit=${limit}&sort=${sort}&minPrice[gte]=${minPrice}&maxPrice[lte]=${maxPrice}&q=${encodeURIComponent(search)}`,
      );
console.log("RESULT DATA:", result.data);
console.table(
  result.data.map((product) => ({
    title: product.title,
    maxDiscountPercent: product.maxDiscountPercent,
  }))
);
      dispatch({ type: "SET_DATA", payload: result });
    })();
  }, [page, sort, search, categoryId, minPrice, maxPrice, limit]);
  const skeletonItem = new Array(10)
    .fill(null)
    .map((_, i) => <Skeleton key={i} />);
  const items = data?.map((item) => (
    <ProductCard
      image={item.images?.at(0)}
      title={item.title}
      price={item.defaultProductVariantId.price}
      finalPrice={item.defaultProductVariantId.finalPrice}
      discountPercent={item.defaultProductVariantId?.discountPercent}
      minPrice={item.minPrice}
      maxPrice={item.maxPrice}
      avgRating={item.avgRating}
      rating={item.rating}
      slug={item.slug}
      id={item._id}
      key={item._id}
    />
  ));
  const totalPage = Math.ceil(count / limit);
  return (
    <div className="mx-auto min-h-[70vh] max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-indigo-600">
            ShopX collection
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Find your next favorite
          </h1>
        </div>
        <p className="text-sm text-slate-500">{count ?? 0} products</p>
      </div>
      <div className="mb-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        <select
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          name="limit"
          onChange={(e) =>
            dispatch({ type: "SET_LIMIT", payload: e.target.value })
          }
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <select
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          name="sort"
          onChange={(e) =>
            dispatch({ type: "SET_SORT", payload: e.target.value })
          }
        >
          <option value="title">A-Z</option>
          <option value="-title">Z-A</option>
          <option value="-createdAt">Newest</option>
          <option value="createdAt">Oldest</option>
          <option value="-maxDiscountPercent">Biggest Discount</option>
        </select>
        <input
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          type="text"
          placeholder="enter see"
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH", payload: e.target.value })
          }
        />
        <div className="flex gap-3">
          <input
            className="min-w-0 w-1/2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            type="number"
            value={minPrice}
            placeholder="Min Price"
            onChange={(e) =>
              dispatch({ type: "SET_MIN_PRICE", payload: e.target.value })
            }
          />

          <input
            className="min-w-0 w-1/2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            type="number"
            value={maxPrice}
            placeholder="Max Price"
            onChange={(e) =>
              dispatch({ type: "SET_MAX_PRICE", payload: e.target.value })
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading ? (
          skeletonItem
        ) : count == 0 ? (
          <h2 className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-lg font-semibold text-slate-500">
            Items Not Found
          </h2>
        ) : (
          items
        )}
      </div>
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={page == 1}
          type="button"
          onClick={() => dispatch({ type: "SET_PAGE", payload: page - 1 })}
        >
          Prev
        </button>
        <span className="text-sm font-semibold text-slate-500">
          {page} of {totalPage}
        </span>
        <button
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={page == totalPage}
          type="button"
          onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1 })}
        >
          Next
        </button>
      </div>
    </div>
  );
}
