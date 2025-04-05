"use client";
import { DotIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserType } from "./types";
import { CommentIcon, LikeIcon, ShareIcon } from "./icons";


export default function Post({ USER }: { USER: UserType }) {

  return (
    <div className=" rounded-[10px] bg-white py-6 shadow-1 max-w-[700px] p-5 pt-8 dark:bg-gray-dark dark:shadow-card ">

      <figure className="flex items-center gap-2.5 ">
        <Image
          src={USER.img}
          className="size-12"
          alt={`Avatar for ${USER.name}`}
          role="presentation"
          width={200}
          height={200}
        />

        <figcaption className="space-y-1 text-base font-medium">
          <div className="flex items-start justify-between">
            <div className="mb-2 leading-none text-dark dark:text-gray-4">
              {USER.name}
            </div>
            <div className="text-base dark:text-gray-4 text-dark leading-none">{USER.time}</div>
          </div>

          <div
            className="leading-none text-ellipsis overflow-hidden whitespace-nowrap w-full max-w-[580px] text-gray-6 inline-block"
          >
            {USER.description}
          </div>
        </figcaption>
      </figure>

      <div className="mt-6 ">
        <Image
          className="rounded-2xl w-full h-auto object-contain"
          alt="Picture"
          src={USER.post}
          width={600}
          height={600}
        />
      </div>

      <div className="mt-5 ml-1 font-medium">{USER.postDescription}</div>

      <div className="mt-3 text-gray-7 font-medium dark:text-gray-4 ml-1 flex justify-between">
        <div>{USER.likes} likes</div>
        <div>{USER.comments} comments</div>
      </div>
      <div className="">
        <div className="flex mt-3">
          <button className="flex w-full justify-center rounded-l-lg items-center gap-x-3  bg-gray-2 dark:bg-dark p-[13px] font-medium text-black dark:text-white hover:bg-gray-3 dark:hover:bg-dark-2">
            <LikeIcon /> Like
          </button>
          <button className="flex w-full justify-center items-center bg-gray-2 dark:bg-dark p-[13px] gap-x-3 font-medium text-black dark:text-white hover:bg-gray-3 dark:hover:bg-dark-2">
           <CommentIcon /> Comment
          </button>
          <button className="flex w-full justify-center items-center gap-x-3  rounded-r-lg  bg-gray-2 dark:bg-dark p-[13px] font-medium text-black dark:text-white hover:bg-gray-3 dark:hover:bg-dark-2">
            <ShareIcon /> Share
          </button>
        </div>
      </div>


    </div>
  );
}
