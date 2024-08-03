import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
}

const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]

interface RichTextEditorProps {
    value: string
    onChange: (content: string) => void
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
    return (
        <div className="w-full min-h-60 max-h-fit rounded-sm border border-stroke dark:border-strokedark">
            <ReactQuill
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                theme="snow"
            />
        </div>
    )
}

export default RichTextEditor
