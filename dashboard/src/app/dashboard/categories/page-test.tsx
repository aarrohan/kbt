"use client";
import { useEffect, useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import { Input } from "@/components/ui/input";

export default function Categories() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      alert("Upload complete");
    },
    onUploadProgress: (progress) => {
      setUploadProgress(progress);
    },
  });

  const uploadFiles = () => {
    if (files) {
      startUpload(files);
    } else {
      alert("No files selected");
    }
  };

  return (
    <>
      {isUploading && <p>Progress: {uploadProgress}%</p>}

      <Input
        onChange={(e) => {
          if (e.target.files) {
            setFiles(Array.from(e.target.files));
          }
        }}
        multiple
        type="file"
      />

      <button onClick={uploadFiles}>Upload</button>
    </>
  );
}
