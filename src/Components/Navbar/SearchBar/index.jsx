import React, { useEffect, useReducer } from "react";
import { fetchData } from "../../../Utils/fetchData";
import { useDispatch } from "react-redux";
import { Grid } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { type } from "os";
const initialState = {
  loading: false,
  showResult: false,
  categories: null,
  products: null,
  searchInp: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_REQUEST":
      return {
        ...state,
        loading: true,
        products: null,
        categories: null,
        showResult: true,
        searchInp: action.payload,
      };
    case "SEARCH_RESULT":
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        categories: action.payload.categories,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        loading: false,
        products: null,
        categories: null,
        showResult: false,
        searchInp: "",
      };
    default:
      return state;
  }
};
export default function SearchBar() {
  const [{ loading, showResult, products, categories, searchInp }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(() => {
    if(!searchInp)return
    (async () => {
      const result = await fetchData(`search/?q=${searchInp}`);
        if(result.ok){
            dispatch({type:"SEARCH_RESULT",payload:{
            products:result.data.products.data,
            categories:result.data.categories.data,
        }})
        }else{
            dispatch({type:"SEARCH_RESULT",payload:{
            products:[],
            categories:[],
        }})
        }
    })();
  }, [searchInp]);
  const navigate = useNavigate()
  useEffect(()=>{
    window.addEventListener("click",(e)=>{
        if(!e.target.closest('.search-container')){
            dispatch({type:"CLEAR_SEARCH"})
        }
    })
  },[])
  const categoryItems=categories?.map((item)=><div key={item._id} onClick={()=>{navigate(`products/${id}/${slug}`), dispatch({type:"CLEAR_SEARCH"})}
  }>
    <img src={import.meta.env.VITE_BASE_FILE_URL + item.image} alt={item.title}/>
    <span>{item.title}</span>
  </div>)
  const productItems=products?.map((item)=><div key={item._id} onClick={()=>{navigate(`products/${id}/${slug}`),dispatch({type:"CLEAR_SEARCH"})}}>
    <img src={import.meta.env.VITE_BASE_FILE_URL + item.image[0]} alt={item.title}/>
    <span>{item.title}</span>
  </div>)
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="enter see"
        onChange={(e) =>
          dispatch({ type: "SEARCH_REQUEST", payload: e.target.value })
        }
      />
      <div className={showResult? h-100 : h-0}>
        {loading? <Grid/> :
         categories.length ==0 && products.length ==0 ?(<h2>Not Found</h2>)
         :(
            <>
                <div>
                    <h2>Categories</h2>
                    {categoryItems.length !=0 ?
                    categoryItems 
                    :(
                        <h3>category not found!</h3>
                    )}
                </div>
                <div>
                    <h2>products</h2>
                    {productItems.length !=0 ?
                    productItems 
                    :(
                        <h3>products not found!</h3>
                    )}
                </div>
            </>
         )}
      </div>
    </div>
  );
}
