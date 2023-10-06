export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      area: {
        Row: {
          created_at: string
          id: number
          is_forbidden: boolean | null
          max_altitude: number | null
          min_altitude: number | null
          name: string | null
          vertices: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_forbidden?: boolean | null
          max_altitude?: number | null
          min_altitude?: number | null
          name?: string | null
          vertices?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          is_forbidden?: boolean | null
          max_altitude?: number | null
          min_altitude?: number | null
          name?: string | null
          vertices?: Json | null
        }
        Relationships: []
      }
      params: {
        Row: {
          id: number
          mqtt_host: string | null
          mqtt_port: number | null
        }
        Insert: {
          id?: number
          mqtt_host?: string | null
          mqtt_port?: number | null
        }
        Update: {
          id?: number
          mqtt_host?: string | null
          mqtt_port?: number | null
        }
        Relationships: []
      }
      UAV: {
        Row: {
          created_at: string
          id: number
          stream_url: string | null
          topic: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          stream_url?: string | null
          topic?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          stream_url?: string | null
          topic?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}


export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]