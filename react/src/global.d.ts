interface CloudinaryResultInfo {
  secure_url: string;
  // Add other properties you need
}

interface CloudinaryCallbackResult {
  event: string;
  info: CloudinaryResultInfo;
}

interface CloudinaryWidget {
  createUploadWidget: (
    options: CloudinaryWidgetOptions,
    callback: (error: Error | null, result: CloudinaryCallbackResult) => void
  ) => CloudinaryInstance;
  // Add other methods/types as needed
}

interface CloudinaryWidgetOptions {
  cloudName: string;
  uploadPreset: string;
  // Add other options you need
}

interface CloudinaryInstance {
  open: () => void;
  // Add other methods/types as needed
}

declare global {
  interface Window {
    cloudinary: CloudinaryWidget;
  }
}
