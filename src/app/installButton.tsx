"use client";
import { useState, useEffect } from "react";

interface InstallButtonProps {}

const InstallButton: React.FC<InstallButtonProps> = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [appInstalled, setAppInstalled] = useState<boolean>(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      console.log("beforeinstallprompt event fired");
      setDeferredPrompt(e);
    };

    window?.addEventListener("beforeinstallprompt", handler);

    return () => {
      window?.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  useEffect(() => {
    if (window?.matchMedia("(display-mode: standalone)").matches) {
      setAppInstalled(true);
    } else {
      setAppInstalled(false);
    }
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      console.log("Installing app...");
      (deferredPrompt as any).prompt();
      const choiceResult = await (deferredPrompt as any).userChoice;
      console.log("User choice:", choiceResult);
      setDeferredPrompt(null);
    }
  };

  return (
    !appInstalled && (
      <button onClick={handleInstall} disabled={!deferredPrompt}>
        Install App s
      </button>
    )
  );
};

export default InstallButton;
