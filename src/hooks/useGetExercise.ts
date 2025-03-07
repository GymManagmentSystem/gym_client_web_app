import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

 export interface Exercises {
  exerciseImageUrl: string;
  exerciseName: string;
  exerciseDescription: string;
  exerciseType: string;
  targetBodyArea: string;
  exerciseLevel: string;
  exerciseCategory: string;
  exerciseEquipment: string;
}

export interface SuccessResponse {
  dataList: Exercises[];
}

interface ErrorResponse {
  errorMessage: string;
}

const useGetExercise = () => {
  
  const getExerciseList = async () => {
    try {
      const { data: exercises } = await axios.get<SuccessResponse>(
        "http://localhost:8080/api/v1/exercises/"
      );
      console.log(exercises.dataList);
      return exercises.dataList;
    } catch (e) {
      if (e instanceof AxiosError) {
        const error =
          (e.response?.data as ErrorResponse).errorMessage || "Request Failed";
        console.log(e);
        throw new Error(error);
      }
      throw new Error("Unexpected error");
    }
  };

  return useQuery<Exercises[], Error>({
    queryKey: ["exerciseList"],
    queryFn: getExerciseList,
  });
};

export default useGetExercise;
