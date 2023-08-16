import React, { useCallback, useEffect, useRef } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import styled from "styled-components";

const uploadPreset = "pgc9ehd5";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const widgetRef = useRef<CloudinaryInstance | null>(null);

  useEffect(() => {
    if ((window as any).cloudinary) {
      widgetRef.current = (window as any).cloudinary.createUploadWidget(
        {
          cloudName: "YOUR_CLOUD_NAME",
          uploadPreset: uploadPreset,
        },
        (error: Error | null, result: CloudinaryCallbackResult) => {
          if (!error && result && result.event === "success") {
            onChange(result.info.secure_url);
          }
        }
      );
    }
  }, [onChange]);

  const handleUploadClick = useCallback(() => {
    widgetRef.current?.open();
  }, []);

  return (
    <UploadContainer onClick={handleUploadClick}>
      <TbPhotoPlus size={50} />
      <UploadText>Click to upload</UploadText>
      {value && <UploadedImg src={value} alt="House" />}
    </UploadContainer>
  );
};

export default ImageUpload;

const UploadContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: opacity 0.3s;
  border: 2px dashed #d1d5db; // equivalent to tailwind's border-neutral-300
  padding: 5rem; // equivalent to tailwind's p-20
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem; // equivalent to tailwind's gap-4
  color: #6b7280; // equivalent to tailwind's text-neutral-600

  &:hover {
    opacity: 0.7;
  }
`;

const UploadText = styled.div`
  font-weight: 600; // equivalent to tailwind's font-semibold
  font-size: 1.125rem; // equivalent to tailwind's text-lg
`;

const UploadedImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
