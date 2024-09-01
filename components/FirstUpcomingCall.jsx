// UpcomingCall.jsx
"use client";

import React from "react";
import { useGetCalls } from "@/hooks/useGetCall";

const UpcomingCall = () => {
  const { upcomingCalls } = useGetCalls();

  const firstUpcomingCallDate =
    upcomingCalls && upcomingCalls.length > 0
      ? new Date(upcomingCalls[0]?.state?.startsAt || "").toLocaleString()
      : null;

  return (
    <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
      {firstUpcomingCallDate
        ? `Upcoming meeting starts at: ${firstUpcomingCallDate}` // Show date with text
        : "No upcoming meeting"}
    </h2>
  );
};

export default UpcomingCall;
