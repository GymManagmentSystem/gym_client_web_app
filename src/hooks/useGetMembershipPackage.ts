import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface PackageDetails {
  packageName: string;
  packageDescription: string;
  packageValidTime: string;
  packageAmount: string;
}

interface SuccessResponse {
  dataList: PackageDetails[];
}

interface ErrorResponse {
  errorMessage: string;
}

const useGetMembershipPackage = () => {

  const getPackageList = async () => {
    try {
      const { data: packages } = await axios.get<SuccessResponse>(
        "http://localhost:8080/api/v1/packages/"
      );
      console.log(packages);
      return packages.dataList;
    } catch (e) {
      if (e instanceof AxiosError) {
        const error =
          (e.response?.data as ErrorResponse).errorMessage || "Request Failed";
        throw new Error(error);
      }
      throw new Error("Unexpected error");
    }
  };

  return useQuery<PackageDetails[], Error>({
    queryKey: ["packageList"],
    queryFn: getPackageList,
  });
};

export default useGetMembershipPackage;
