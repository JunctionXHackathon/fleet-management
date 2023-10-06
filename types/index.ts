import {SVGProps} from "react";
import {PostgrestError} from "@supabase/supabase-js";
import {Tables} from "@/lib/database.types";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface IParamsFetchResult {
  params?: Tables<"params">;
  error?: PostgrestError;
}


export interface IModifyParamsArgs {
  host: string;
  port: number;
}


export interface IUpdateReturn {
  error: PostgrestError | null,
  success: boolean;
}


export interface IUAVsFetchResult {
  UAVs?: Tables<"UAV">[];
  error?: PostgrestError;
}

export interface IUAVAddParams {
  topic: string;
  streamUrl: string;
}


export interface IUAVRemoveParams {
  id: number;
}

export interface IUAVUpdateParams {
  id: number;
  topic: string;
  streamUrl: string;
}


export interface IAreasFetchResult {
  areas?: Tables<"area">[];
  error?: PostgrestError;
}

export interface IAreaAddParams {
  name: string;
  isForbidden: boolean;
  maxAlt: number;
  minAlt: number;
  vertices: number[];
}


export interface IAreaRemoveParams {
  id: number;
}

export interface IAreaUpdateParams extends IAreaAddParams, IAreaRemoveParams {

}


export interface IUAVPacketRx {
  deviceTopic: string;   // to identify UAV

  battery?: {
    id: number;
    vl: number;
    pt: number;
  },

  gps?: {
    fx: boolean;
    ns: number;
    lat: number;
    lon: number;
    abs: number;
    rel: number;
  },

  status?: {
    in_air: boolean;
    armed: boolean;
    state: number;
    mav_msg: string;
    health: number;
    fm: number;
  }
}

export interface IUAVPacket {
  deviceTopic: string;   // to identify UAV

  battery: {
    id: number | undefined;
    vl: number | undefined;
    pt: number | undefined;
  },

  gps: {
    fx: boolean | undefined;
    ns: number | undefined;
    lat: number | undefined;
    lon: number | undefined;
    abs: number | undefined;
    rel: number | undefined;
  },

  status: {
    in_air: boolean | undefined;
    armed: boolean | undefined;
    state: number | undefined;
    mav_msg: string | undefined;
    health: number | undefined;
    fm: number | undefined;
  }
}