import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { uploadImage } from '../../lib/utils/imageUtils';

interface ImageUploadProps {
  currentImage?: string;
  onImageUpload: (url: string) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ currentImage, onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload file
    setIsUploading(true);
    try {
      const url = await uploadImage(file);
      if (url) {
        onImageUpload(url);
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Zdjęcie produktu
      </label>
      
      <div className="relative">
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Podgląd"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => {
                setPreview(null);
                onImageUpload('');
              }}
              className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-emerald-500 hover:bg-emerald-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="h-12 w-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                {isUploading ? (
                  'Przesyłanie...'
                ) : (
                  <>
                    <span className="font-medium text-emerald-600">
                      Kliknij aby wybrać
                    </span>{' '}
                    lub przeciągnij i upuść
                  </>
                )}
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              disabled={isUploading}
            />
          </label>
        )}
      </div>
    </div>
  );
};