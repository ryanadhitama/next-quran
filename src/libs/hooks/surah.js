import useSWR from "swr";
import { fetcher } from "@/libs/utils/api";

export const useSurahs = () => {
  const pathKey = `/surah`;
  const { data, error } = useSWR(pathKey, fetcher, {
    refreshInterval: 10000,
  });

  return { data: data?.data || [], loading: !error && !data };
};

export const useSurah = (id) => {
  const pathKey = `/surah/${id}/ar.alafasy`;
  const { data, error } = useSWR(pathKey, fetcher, {
    refreshInterval: 10000,
  });

  return { data: data?.data || {}, loading: !error && !data };
};
