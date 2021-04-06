import { AxiosError } from "axios";

import { TAxiosError } from "@common/types/common";

export type TRegion = {
  country: any;
};

export type TCity = {
  region: TRegion;
  map_shape: string;
};

export type TDistrict = {
  city?: TCity;
  parent?: string;
  districts?: TDistrict[];
  map_shape: string;
};

export enum EValueSet {
  ad_type = "ad_type",
  apartment_type = "apartment_type",
  other = "other",
  series = "series",
  build_type = "build_type",
  heating = "heating",
  details = "details",
}

export type TValueSet = {
  file: any;
  apartment_type?: string | string[];
};

export type TValueSetError = {
  error?: AxiosError;
} & TValueSet;

export type TGetRegionRequest = {
  country?: string;
  page?: number;
};

export type TGetRegionSuccess = {
  data: TRegion[];
};

export type TGetRegion = {
  fetching: boolean;
} & TAxiosError &
  TGetRegionSuccess;

export type TGetCitiesData = {
  count: number;
  next: number;
  previous: number;
  results: TCity[];
};

export type TGetCitiesSuccess = {
  data: TGetCitiesData;
  append?: true;
};

export type TGetCities = {
  fetching: boolean;
  isFetched: boolean;
} & TGetCitiesSuccess &
  TAxiosError;

export type TGetDistrictsRequest = {
  city?: string;
  page?: number;
  search?: string;
};

export type TGetDistrictsSuccess = {
  data: TDistrict[];
};

export type TGetDistricts = {
  fetching: boolean;
} & TGetDistrictsSuccess &
  TAxiosError;

export type TCommonState = {
  valueSets: any;
  location: {
    regions: TGetRegion;
    cities: TGetCities;
    districts: TGetDistricts;
  };
};
