import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { createClient } from "../db/supabase";
import { getNextAdventureDate } from "../lib/utils/getAdventureDate";

export const server = {
  createCharacter: defineAction({
    input: z.object({
      name: z.string().min(1),
      speciesId: z.string(),
      speciesVariantId: z.string().optional(),
      classId: z.string(),
      backgroundId: z.string(),

      abilities: z.object({
        STR: z.number().min(8).max(15),
        DEX: z.number().min(8).max(15),
        CON: z.number().min(8).max(15),
        INT: z.number().min(8).max(15),
        WIS: z.number().min(8).max(15),
        CHA: z.number().min(8).max(15),
      }),
    }),

    handler: async (character, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const { data, error } = await supabase.rpc("create_character", {
        p_name: character.name,
        p_class_id: character.classId,
        p_species_id: character.speciesId,
        p_species_variant_id: character.speciesVariantId ?? null,
        p_background_id: character.backgroundId,
        p_abilities: character.abilities,
      });

      if (error) {
        console.error("Error creating character:", error);
        throw new Error("Could not create character");
      }

      return data;
    },
  }),

  deleteCharacter: defineAction({
    input: z.object({
      id: z.uuid(),
    }),

    handler: async ({ id }, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("Not authenticated");
      }

      const { data, error } = await supabase
        .from("characters")
        .delete()
        .eq("id", id)
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error deleting character:", error);
        throw new Error("Character not found");
      }

      return data;
    },
  }),

  addAdventure: defineAction({
    input: z.object({
      title: z.string().min(1),
      max_players: z.number().min(1),
      description: z.string().nullable().optional(),
      min_lvl: z.number().min(1).max(20),
      max_lvl: z.number().min(1).max(20),
    }),

    handler: async (adventure, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("Not authenticated");
      }

      const { data, error } = await supabase
        .from("adventures")
        .insert({
          created_by: user.id,
          title: adventure.title,
          max_players: adventure.max_players,
          description: adventure.description ?? null,
          adventure_date: getNextAdventureDate(),
          min_lvl: adventure.min_lvl,
          max_lvl: adventure.max_lvl,
        })
        .select()
        .single();

      if (error || !data) {
        console.error("Error adding adventure:", error);
        throw new Error("Could not add adventure");
      }

      return data;
    },
  }),

  updateAdventurePoster: defineAction({
    input: z.object({
      id: z.uuid(),
      poster_url: z.url(),
    }),

    handler: async ({ id, poster_url }, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("Not authenticated");
      }

      const { data, error } = await supabase
        .from("adventures")
        .update({
          poster_url,
        })
        .eq("id", id)
        .select()
        .single();

      if (error || !data) {
        console.error("Error updating adventure poster:", error);
        throw new Error("Could not update adventure poster");
      }

      return data;
    },
  }),

  deleteAdventure: defineAction({
    input: z.object({
      id: z.uuid(),
    }),

    handler: async ({ id }, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("Not authenticated");
      }

      const { data, error } = await supabase
        .from("adventures")
        .delete()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error deleting adventure:", error);
        throw new Error("Adventure not found");
      }

      return data;
    },
  }),

  getNotifications: defineAction({
    
    handler: async (_, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const { data: notifications, error } = await supabase
        .from("notifications")
        .select("id, type, title, message, read_at, created_at")
        .order("created_at", { ascending: false })
        .limit(20);

      if (error) {
        console.error("Error loading notifications:", error);
        throw new Error("No se pudieron cargar las notificaciones");
      }

      const { count, error: countError } = await supabase
        .from("notifications")
        .select("*", { count: "exact", head: true })
        .is("read_at", null);

      if (countError) {
        console.error("Error counting notifications:", countError);
        throw new Error("No se pudo obtener el contador");
      }

      return {
        notifications,
        unreadCount: count ?? 0,
      };
    },
  }),
  markNotificationAsRead: defineAction({
    input: z.object({
      id: z.uuid(),
    }),

    handler: async ({ id }, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const { error } = await supabase
        .from("notifications")
        .update({
          read_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (error) {
        console.error("Error marking notification:", error);
        throw new Error("No se pudo marcar la notificación");
      }

      return { success: true };
    },
  }),

  markAllNotificationsAsRead: defineAction({
    input: z.object({}),

    handler: async (_, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const { error } = await supabase
        .from("notifications")
        .update({
          read_at: new Date().toISOString(),
        })
        .is("read_at", null);

      if (error) {
        console.error("Error marking notifications:", error);
        throw new Error("No se pudieron marcar las notificaciones");
      }

      return { success: true };
    },
  }),
};

/* const { data, error } = await supabase
  .from("characters")
  .insert({
    name: "Ravel Reed",
    species: "Halfling",
    class: "Warlock",
    background: "Acolyte",

    abilities: {
      str: 8,
      dex: 14,
      con: 13,
      int: 12,
      wis: 10,
      cha: 16,
    },
  })
  .select()
  .single(); */
