import { API } from "../../config";
export const getAllSliders = async () => {
  try {
    const response = await fetch(`${API}/getallSlider`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};
