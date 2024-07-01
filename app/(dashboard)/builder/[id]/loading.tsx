import React from "react";
import { ImSpinner2 } from "react-icons/im";
import { LuLoader2 } from "react-icons/lu";

function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <LuLoader2 className="animate-spin h-12 w-12" />
      Loading the builder
    </div>
  );
}

export default Loading;
