import { useEffect } from "react";

const InactivityLogout = (
  timeoutDuration: number,
  logoutFunction: () => void
): void => {
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        logoutFunction();
      }, timeoutDuration);
    };

    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
    };
  }, [timeoutDuration, logoutFunction]);
};

export default InactivityLogout;
