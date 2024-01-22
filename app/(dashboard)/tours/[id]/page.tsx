"use client";
import { useParams } from "next/navigation";
export default function NewTour() {
  const params = useParams();

  console.log("params", params);

  return <div></div>;
}
