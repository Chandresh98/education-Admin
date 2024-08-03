import React, { useState, ChangeEvent } from 'react'

interface ImageUploadProps {
    label: string
    onFileChange: (file: File | null) => void
    error?: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    label,
    onFileChange,
    error,
}) => {
    const [preview, setPreview] = useState<string | null>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        onFileChange(file)

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        } else {
            setPreview(null)
        }
    }

    return (
        <div className="w-full mb-4.5 ">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type="file"
                onChange={handleChange}
                className={`mt-1 block w-full ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="mt-2"
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
        </div>
    )
}

export default ImageUpload
