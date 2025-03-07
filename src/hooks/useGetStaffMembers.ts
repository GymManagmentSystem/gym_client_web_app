import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface StaffMemberDetails {
  firstName: string;
  lastName: string;
  position: string;
  gender:string;
  contactNumber:string;
}

interface SuccessResponse {
  dataList: StaffMemberDetails[];
}

interface ErrorResponse {
  errorMessage: string;
}

const useGetStaffMembers = () => {
  const getStaffMembers = async () => {
    try {
      const { data: staffMembers } = await axios.get<SuccessResponse>(
        "http://localhost:8080/api/v1/staff/members/"
      );
      console.log("staff members")
      return staffMembers.dataList;
    } catch (e) {
      if (e instanceof AxiosError) {
        const error =
          (e.response?.data as ErrorResponse).errorMessage || "Request Failed";
        throw new Error(error);
      }
      throw new Error("Unexpected Error");
    }
  };
  return useQuery<StaffMemberDetails[], Error>({
    queryKey: ["StaffMemberList"],
    queryFn: getStaffMembers,
  });
};

export default useGetStaffMembers;
