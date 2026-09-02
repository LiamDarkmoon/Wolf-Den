import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { createClient } from "../db/supabase";

export const server = {
  createCharacter: defineAction({
    input: z.object({
      name: z.string().min(1),
      species: z.string().nullable().optional(),
      class: z.string().nullable().optional(),
      background: z.string().nullable().optional(),

      abilities: z.object({
        str: z.number().nullable(),
        dex: z.number().nullable(),
        con: z.number().nullable(),
        int: z.number().nullable(),
        wis: z.number().nullable(),
        cha: z.number().nullable(),
      }),
    }),

    handler: async (character, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies,
      });

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("Not authenticated");
      }

      const { data, error } = await supabase
        .from("characters")
        .insert({
          user_id: user.id,
          name: character.name,
          species: character.species ?? null,
          class: character.class ?? null,
          background: character.background ?? null,
          abilities: character.abilities,
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating character:", error);
        throw new Error("Could not create character");
      }

      return data;
    },
  }),
    
    deleteCharacter: defineAction({
        input: z.object({
            id: z.string().uuid(),
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

              adventure_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),

            })

            .select()

            .single();

            if (error) {

                console.error("Error adding adventure:", error);

                throw new Error("Could not add adventure");

            }

            return data;

        },

    }),

     deleteAdventure: defineAction({
        input: z.object({
            id: z.string().uuid(),
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