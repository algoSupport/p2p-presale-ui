import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useProvider } from "wagmi";
import { HARD_CAP, CLI_PRICE } from "@/constants";
import { getRemainCil } from "@/utils/app";
import GradientSVG from "./gradientSVG";

const PresaleInfo = () => {
  const provider = useProvider();
  const [sold, setSold] = useState<number>(0);

  useEffect(() => {
    getRemainCil(provider).then((remain) => setSold(HARD_CAP - remain));
  }, [provider]);

  const hardCap = () => {
    return `$${HARD_CAP * CLI_PRICE}`;
  };

  const percentage = () => {
    return (sold * 100) / HARD_CAP;
  };

  return (
    <div className="flex flex-col w-full items-center space-y-2">
      <div className="h-96 w-96 relative">
        <GradientSVG />
        <CircularProgressbar
          value={percentage()}
          strokeWidth={4}
          styles={{
            path: { stroke: `url(#hello)`, height: "100%" },
            trail: {
              stroke: "#141a2c",
            },
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
          <span className="text-5xl font-medium text-white pb-2">{sold}</span>
          <span className="text-md font-medium text-slate-500">
            / {HARD_CAP} CIL
          </span>
        </div>
      </div>
    </div>
  );
};

export default PresaleInfo;
