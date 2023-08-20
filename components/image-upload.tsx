"use client";

import * as React from "react";
import Image from "next/image";
import { ImagePlus, Trash } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  disabled?: boolean;
  values: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

export function ImageUpload({
  disabled,
  values,
  onChange,
  onRemove,
}: ImageUploadProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) return null;

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        {values.map((value) => (
          <div
            key={value}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="absolute top-2 right-2 z-10">
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => onRemove(value)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
            <Image
              fill
              className="object-cover"
              src={value}
              alt={`${value} Image`}
            />
          </div>
        ))}
      </div>

      <CldUploadWidget onUpload={handleUpload} uploadPreset="rxceqdqx">
        {({ open }) => (
          <Button
            type="button"
            disabled={disabled}
            variant="secondary"
            onClick={() => open()}
          >
            <ImagePlus className="w-4 h-4 mr-2" />
            Upload image
          </Button>
        )}
      </CldUploadWidget>
    </>
  );
}
