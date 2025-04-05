"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import Post from "./post";
import { UserType } from "./types";

const USER: UserType[] = [{
    name: "Vashisht Haraamjada",
    email: "johnson@nextadmin.com",
    img: "/images/user/user-03.png",
    description: "Two times gold medalist in the Olympics | World Champion | 5 times National Champion | 10 times State Champion | 20 times District Champion | 100 times Local Champion",
    post: "/images/post/post-01.png",
    postDescription: "I am a two-time gold medalist in the Olympics and a world champion. I have also won 5 national championships, 10 state championships, 20 district championships, and 100 local championships. I am proud of my achievements and look forward to continuing to excel in my sport.",
    time: "2h ago",
    likes: 20,
    comments: 5
},
{
    name: "Vashisht Haraamjada",
    email: "johnson@nextadmin.com",
    img: "/images/user/user-03.png",
    description: "Two times gold medalist in the Olympics | World Champion | 5 times National Champion | 10 times State Champion | 20 times District Champion | 100 times Local Champion",
    post: "/images/post/post-02.png",
    postDescription: "I am a two-time gold medalist in the Olympics and a world champion. I have also won 5 national championships, 10 state championships, 20 district championships, and 100 local championships. I am proud of my achievements and look forward to continuing to excel in my sport.",
    time: "2h ago",
    likes: 20,
    comments: 5
},
{
    name: "Vashisht Haraamjada",
    email: "johnson@nextadmin.com",
    img: "/images/user/user-03.png",
    description: "Two times gold medalist in the Olympics | World Champion | 5 times National Champion | 10 times State Champion | 20 times District Champion | 100 times Local Champion",
    post: "/images/post/post-03.png",
    postDescription: "I am a two-time gold medalist in the Olympics and a world champion. I have also won 5 national championships, 10 state championships, 20 district championships, and 100 local championships. I am proud of my achievements and look forward to continuing to excel in my sport.",
    time: "2h ago",
    likes: 20,
    comments: 5
}];


export default function Page() {
    return (
        <>
            <Breadcrumb pageName="Community" />

            <div className="flex flex-col items-center gap-y-6">
                {USER.map((user, index) => (
                    <Post key={index} USER={user} />
                ))}
            </div>

        </>
    );
}
