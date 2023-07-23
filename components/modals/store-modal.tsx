"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/modals/modal";

export const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();

  return (
    <Modal
      title="Create a store"
      description="Create a store to manage your products"
      isOpen={isOpen}
      onClose={onClose}
    >
      Store Modal
    </Modal>
  );
};
