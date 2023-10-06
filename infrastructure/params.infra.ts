import {Database, Tables} from "@/lib/database.types";
import supabase from "@/supabase";
import {PostgrestError} from "@supabase/supabase-js";
import {Pos} from "@jridgewell/gen-mapping/dist/types/types";
import {IModifyParamsArgs, IUpdateReturn, IParamsFetchResult} from "@/types";



export const fetchParams = async (): Promise<IParamsFetchResult> => {
  const {data, error} = await supabase
    .from("params")
    .select("*")
    .single();

  if (data)
    return {params: data};

  return {error}


}


export const modifyParams = async ({port, host}: IModifyParamsArgs): Promise<IUpdateReturn> => {
  const {error} = await supabase
    .from("params")
    .update({mqtt_port: port, mqtt_host: host});

  return {
    error,
    success: !error
  }

}