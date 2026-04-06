import axios from "axios";
import type { LanguagesResponse } from "../types/language";

const getLanguage = async (): Promise<LanguagesResponse> => {
  try {
    const response = await axios.get(`http://localhost:4050/api/v1/languages`);
    console.log(response.data);

    if (!response.data) {
      return [];
    }

    return response.data as LanguagesResponse;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getLanguage };
