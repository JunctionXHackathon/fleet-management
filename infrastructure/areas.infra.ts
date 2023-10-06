import supabase from "@/supabase";
import {
  IAreaAddParams, IAreaRemoveParams,
  IAreasFetchResult, IAreaUpdateParams,
  IUpdateReturn
} from "@/types";


export const fetchAreas = async (): Promise<IAreasFetchResult> => {
  const {data, error} = await supabase
    .from("area")
    .select("*");


  if (data)
    return {areas: data};

  return {error}
}


export const addArea = async ({maxAlt, minAlt, name, vertices, isForbidden}: IAreaAddParams): Promise<IUpdateReturn> => {
  const {error} = await supabase
    .from("area")
    .insert({name, vertices, is_forbidden: isForbidden, max_altitude: maxAlt, min_altitude: minAlt});

  return {
    error,
    success: !error
  }
}

export const removeArea = async ({id}: IAreaRemoveParams): Promise<IUpdateReturn> => {
  const {error} = await supabase
    .from("area")
    .delete()
    .eq("id", id);

  return {
    error,
    success: !error
  }

}

export const editArea = async ({id, minAlt, maxAlt, name, vertices, isForbidden}: IAreaUpdateParams): Promise<IUpdateReturn> => {
  const {error} = await supabase
    .from('area')
    .update({name, vertices, is_forbidden: isForbidden, max_altitude: maxAlt, min_altitude: minAlt})
    .eq("id", id)


  return {
    error,
    success: !error
  }

}
