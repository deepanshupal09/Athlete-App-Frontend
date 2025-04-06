"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import Post from "./post";
import { UserType } from "./types";

const USER: UserType[] = [
    {
      name: "Coach Avni Malhotra",
      email: "coach.arjun@elitecoaching.in",
      img: "/images/user/user-02.png",
      description: "Senior Football Coach | Ex-ISL Player | Mentor",
      post: "/images/post/image2.jpg",
      postDescription: "🎯 We’re expanding! Elite Coaching Academy is looking for assistant coaches (Football & Athletics) across Bengaluru and Hyderabad. Fresh graduates welcome! Training and growth assured. DM for details or email: join@elitecoaching.in",
      time: "3h ago",
      likes: 42,
      comments: 11
    },
    {
      name: "Aditya Mehta",
      email: "anjali.mehta@athletesunited.org",
      img: "/images/user/user-04.png",
      description: "Indian Badminton Player | Represented India in Asian Games",
      post: "/images/post/image3.jpeg",
      postDescription: "🏆 Just clinched the **All India National Badminton Championship** title! Months of training, sweat, and setbacks finally paid off. Huge thanks to my coach, family, and everyone who stood by me! Onward to the international season 💪",
      time: "6h ago",
      likes: 87,
      comments: 24
    },
    {
      name: "Sports Digest India",
      email: "editor@sportsdigest.in",
      img: "/images/user/user-05.png",
      description: "Daily Sports News | Updates, Interviews & Features",
      post: "/images/post/image4.webp",
      postDescription: "🎙️ India’s U-19 Women’s Hockey team has advanced to the World Cup semifinals after a stunning 4-1 win over Germany! The future of Indian hockey is bright. Full report on our website. 🏑🇮🇳",
      time: "9h ago",
      likes: 61,
      comments: 15
    },
    {
        name: "Neha Reddy",
        email: "neha.reddy@sportsjobs.com",
        img: "/images/user/user-01.png",
        description: "Sports HR Executive | Hiring Talent Across India",
        post: "/images/post/image1.jpg",
        postDescription: "📢 We’re hiring! Looking for a qualified Strength & Conditioning Coach for our Pune training center. Must have a valid NSCA certification and 3+ years of experience. Apply now via careers@sportsjobs.com!",
        time: "1h ago",
        likes: 34,
        comments: 8
      },
  ];


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
