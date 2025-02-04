import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from "@/components/ui/input"
import Calendarr from './calendar';

function AddTaskCard() {
  const [when, setWhen] = useState(null);

  const handleWhen = (date) => {
    setWhen(date)
  }

  return (
    <Card>
      <CardHeader>
        <Input type="text" placeholder="Title" />
        <Input type="text" placeholder="Description" />
      </CardHeader>

      <CardContent>
        <Popover>
          <PopoverTrigger>{when || "when"}</PopoverTrigger>
          <PopoverContent className="w-full p-0 shadow-none ">
            <Calendarr handleWhen={handleWhen} />
            
          </PopoverContent>
        </Popover>
      </CardContent>

      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>  
  )
}

export default AddTaskCard