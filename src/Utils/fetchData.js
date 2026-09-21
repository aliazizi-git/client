import store from "../Store";

export const fetchData = async (url, options = {}) => {
  try {
    const token = store.getState().auth.token;
    if (token) {
      options.headers = {
        ...options.headers,
        authorization: `Bearer ${token}`,
      };
    }
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    };
    const res = await fetch(import.meta.env.VITE_BASE_API_URL + url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
export const uploadFile = async (file,type = "single") => {
  try {
    const token = store.getState().auth.token;
    let options = { method: "POST" };
    if (token) {
      options.headers = {
        authorization: `Bearer ${token}`,
      };
    }
    let formData = new FormData();
    if (type == "single") {
      formData.append("file", file);
    } else {
      file.forEach((item, i) => {
        formData.append(`files`, item);
      });
    }
    options.body = formData;
    const res = await fetch(
      import.meta.env.VITE_BASE_API_URL +
        `uploads/${type == "single" ? "" : "multi"}`,
      options,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
