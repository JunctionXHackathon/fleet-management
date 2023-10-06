import supabase from "@/supabase";
import {IUAVAddParams, IUAVRemoveParams, IUAVsFetchResult, IUAVUpdateParams, IUpdateReturn} from "@/types";


export const fetchUAVs = async (): Promise<IUAVsFetchResult> => {
  const {data, error} = await supabase
    .from("UAV")
    .select("*");


  if (data)
    return {UAVs: data};

  return {error}
}


export const addUAV = async ({topic, streamUrl}: IUAVAddParams): Promise<IUpdateReturn> => {
  const {error} = await supabase
    .from("UAV")
    .insert({topic, stream_url: streamUrl});

  return {
    error,
    success: !error
  }

}

export const removeUAV = async ({id}: IUAVRemoveParams): Promise<IUpdateReturn> => {
  const {error} = await supabase
    .from("UAV")
    .delete()
    .eq("id", id);

  return {
    error,
    success: !error
  }

}

export const editUAV = async ({id, streamUrl, topic}: IUAVUpdateParams): Promise<IUpdateReturn> => {
  const {error} = await supabase
    .from('UAV')
    .update({stream_url: streamUrl, topic})
    .eq("id", id)


  return {
    error,
    success: !error
  }

}