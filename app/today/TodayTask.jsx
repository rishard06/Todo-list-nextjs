import React from 'react'
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { format, getDate, yearsToDays } from "date-fns";
import ListOfTask from '../components/ListOfTask';

async function TodayTask() {
  const session = auth();
  const newDate = new Date();
  const dateToday = format(newDate, "PP")
  const dateYesterday = format(newDate.setDate(newDate.getDate() - 1), "PP")
  
  const listToday = await prisma.todo.findMany({
    where: {
      when: dateToday,
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 10,
  })

  const listYesterday = await prisma.todo.findMany({
    where: {
      when: dateYesterday,
    },
    orderBy: {
      createdAt: "desc",
    }
  })

  if (!session?.user)  {
    <div>
      <p className="text-gray-500 ">Sign In first</p>
    </div>
  }
  
  return (
    <>
      <div>
        <h1 className='text-2xl font-bold my-2'>Today Task</h1>
        <div className='dark:bg-black border-[1px] p-4 rounded-md bg-white'>
          {!listToday.length && <p>No task today yet.</p>} 
          <ListOfTask list={listToday} path={"/today"}/>
        </div>
      </div>

      <div className='border-t-[1px]'>
        <h1 className='text-2xl font-bold my-2'>Yesterday</h1>
        <div className='dark:bg-black border-[1px] p-4 rounded-md bg-white'>
          <ListOfTask list={listYesterday} path={"/today"}/>
        </div>
      </div>
    </>
  );
}

export default TodayTask