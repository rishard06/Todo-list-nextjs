"use server"

import { auth } from '@/lib/auth'
import React from 'react'
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export default async function noteColor(noteColor, id) {

  try {
    await prisma.note.update({
      where:{
        id: id,
      },
      data: {
        color: noteColor
      }
    })

    revalidatePath('/')
  } catch (error) {
    console.warn("Faild to change notes Color", error)
  }
}
