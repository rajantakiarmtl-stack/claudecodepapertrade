export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      articles: {
        Row: {
          body_md: string
          description: string
          published_at: string
          slug: string
          status: string
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          body_md: string
          description: string
          published_at?: string
          slug: string
          status?: string
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          body_md?: string
          description?: string
          published_at?: string
          slug?: string
          status?: string
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      closed_trades: {
        Row: {
          closed_at: string | null
          direction: string | null
          entry_price: number | null
          exit_price: number | null
          exit_reason_label: string | null
          id: string
          legs: Json | null
          opened_at: string | null
          outcome_text: string | null
          pnl_net: number | null
          pnl_pct: number | null
          structure_label: string | null
          team_id: string | null
          ticker: string | null
          why_text: string | null
        }
        Insert: {
          closed_at?: string | null
          direction?: string | null
          entry_price?: number | null
          exit_price?: number | null
          exit_reason_label?: string | null
          id: string
          legs?: Json | null
          opened_at?: string | null
          outcome_text?: string | null
          pnl_net?: number | null
          pnl_pct?: number | null
          structure_label?: string | null
          team_id?: string | null
          ticker?: string | null
          why_text?: string | null
        }
        Update: {
          closed_at?: string | null
          direction?: string | null
          entry_price?: number | null
          exit_price?: number | null
          exit_reason_label?: string | null
          id?: string
          legs?: Json | null
          opened_at?: string | null
          outcome_text?: string | null
          pnl_net?: number | null
          pnl_pct?: number | null
          structure_label?: string | null
          team_id?: string | null
          ticker?: string | null
          why_text?: string | null
        }
        Relationships: []
      }
      daily_recaps: {
        Row: {
          body: string | null
          date: string
          headline: string | null
          mood: string | null
        }
        Insert: {
          body?: string | null
          date: string
          headline?: string | null
          mood?: string | null
        }
        Update: {
          body?: string | null
          date?: string
          headline?: string | null
          mood?: string | null
        }
        Relationships: []
      }
      daily_snapshots: {
        Row: {
          account_value: number | null
          date: string
          realized_pnl_net: number | null
          spy_close_rebased: number | null
        }
        Insert: {
          account_value?: number | null
          date: string
          realized_pnl_net?: number | null
          spy_close_rebased?: number | null
        }
        Update: {
          account_value?: number | null
          date?: string
          realized_pnl_net?: number | null
          spy_close_rebased?: number | null
        }
        Relationships: []
      }
      open_positions: {
        Row: {
          direction: string | null
          id: string
          opened_at: string | null
          structure_label: string | null
          team_id: string | null
          ticker: string | null
          unrealized_pct: number | null
        }
        Insert: {
          direction?: string | null
          id: string
          opened_at?: string | null
          structure_label?: string | null
          team_id?: string | null
          ticker?: string | null
          unrealized_pct?: number | null
        }
        Update: {
          direction?: string | null
          id?: string
          opened_at?: string | null
          structure_label?: string | null
          team_id?: string | null
          ticker?: string | null
          unrealized_pct?: number | null
        }
        Relationships: []
      }
      passed_on: {
        Row: {
          date: string | null
          id: string
          reason_label: string | null
          team_id: string | null
          ticker: string | null
        }
        Insert: {
          date?: string | null
          id: string
          reason_label?: string | null
          team_id?: string | null
          ticker?: string | null
        }
        Update: {
          date?: string | null
          id?: string
          reason_label?: string | null
          team_id?: string | null
          ticker?: string | null
        }
        Relationships: []
      }
      signups: {
        Row: {
          consent_text: string | null
          consented_at: string | null
          email: string
          id: string
          source: string | null
        }
        Insert: {
          consent_text?: string | null
          consented_at?: string | null
          email: string
          id?: string
          source?: string | null
        }
        Update: {
          consent_text?: string | null
          consented_at?: string | null
          email?: string
          id?: string
          source?: string | null
        }
        Relationships: []
      }
      site_meta: {
        Row: {
          account_value: number | null
          closed_trades: number | null
          experiment_start: string | null
          id: number
          last_updated: string | null
          max_drawdown_pct: number | null
          passed_on_count: number | null
          realized_pnl_net: number | null
          spy_return_pct: number | null
          start_equity: number | null
          total_return_pct: number | null
          win_rate: number | null
        }
        Insert: {
          account_value?: number | null
          closed_trades?: number | null
          experiment_start?: string | null
          id?: number
          last_updated?: string | null
          max_drawdown_pct?: number | null
          passed_on_count?: number | null
          realized_pnl_net?: number | null
          spy_return_pct?: number | null
          start_equity?: number | null
          total_return_pct?: number | null
          win_rate?: number | null
        }
        Update: {
          account_value?: number | null
          closed_trades?: number | null
          experiment_start?: string | null
          id?: number
          last_updated?: string | null
          max_drawdown_pct?: number | null
          passed_on_count?: number | null
          realized_pnl_net?: number | null
          spy_return_pct?: number | null
          start_equity?: number | null
          total_return_pct?: number | null
          win_rate?: number | null
        }
        Relationships: []
      }
      teams: {
        Row: {
          activity_line: string | null
          agent_count: number | null
          id: string
          mission: string | null
          name: string | null
          pnl_net: number | null
          roles: string[] | null
          sort: number | null
          trades: number | null
          win_rate: number | null
        }
        Insert: {
          activity_line?: string | null
          agent_count?: number | null
          id: string
          mission?: string | null
          name?: string | null
          pnl_net?: number | null
          roles?: string[] | null
          sort?: number | null
          trades?: number | null
          win_rate?: number | null
        }
        Update: {
          activity_line?: string | null
          agent_count?: number | null
          id?: string
          mission?: string | null
          name?: string | null
          pnl_net?: number | null
          roles?: string[] | null
          sort?: number | null
          trades?: number | null
          win_rate?: number | null
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
