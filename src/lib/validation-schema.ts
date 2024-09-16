"use client"

import { z } from "zod"

export const linkSchema = z.object({
    url: z.string().regex(new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)),
  })

  // string().min(13, {
  //   message: "url must be at least 2 characters.",
  // })