import { useQuery } from "@tanstack/react-query";

import { fetchMe } from "./user.service";
import { User } from "@/types/user.types";

export const useFetchMe = () => {
  return useQuery<User, Error>(["user"], () => fetchMe(), {
    enabled: true
  });
};
