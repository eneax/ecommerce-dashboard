"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/modals/modal";

interface AlertModalProps {
  loading: boolean;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex items-center justify-end w-full space-x-2 pt-6">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
