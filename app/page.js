"use client";
// https://nextjs.org/docs/app/building-your-application/rendering/client-components

import { useState } from "react";

// Si quieren usar los module aliases (@/components)
// https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { EventList } from "@/components/EventList";
import useEventByCategoryList from "@/hooks/useEventByCategoryList";

// Como este archivo page.js esta en el root
// del proyecto, es tratado como el "index" o home
export default function Home() {
  // Se puede usar SWR en lugar de este custom hook
  const [eventList, status, setEventList] = useEventByCategoryList();
  const [categoryId, setCategoryId] = useState();

  const onTabChange = (e) => {
    const category = e.target.dataset.category;

    setCategoryId(categoryId);
    setEventList(category);
  };

  return (
    <>
      <Header onTabChange={onTabChange} />
      <MainContent>
        <EventList eventList={eventList} status={status} />
      </MainContent>
    </>
  );
}
