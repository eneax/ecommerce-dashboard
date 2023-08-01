"use client";

import * as React from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

export default function SetupPage() {
  const { isOpen, onOpen } = useStoreModal();

  React.useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null
}
