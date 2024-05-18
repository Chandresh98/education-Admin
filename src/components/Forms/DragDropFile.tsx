'use client'
import Image from 'next/image'
import { Dispatch, useState } from 'react'

interface setFileParams {
    file: string
    setFile: Dispatch<string>
}

const DragDropFile = ({ file, setFile }: setFileParams) => {
    // const [file, setFile] = useState<string>()
    const [fileEnter, setFileEnter] = useState(false)
    return (
        <div className="container px-4 max-w-5xl mx-auto">
            {!file ? (
                <div
                    onDragOver={e => {
                        e.preventDefault()
                        setFileEnter(true)
                    }}
                    onDragLeave={e => {
                        setFileEnter(false)
                    }}
                    onDragEnd={e => {
                        e.preventDefault()
                        setFileEnter(false)
                    }}
                    onDrop={e => {
                        e.preventDefault()
                        setFileEnter(false)
                        if (e.dataTransfer.items) {
                            ;[...e?.dataTransfer?.items].forEach((item, i) => {
                                if (item.kind === 'file') {
                                    const file = item.getAsFile()
                                    if (file) {
                                        let blobUrl = URL.createObjectURL(file)
                                        setFile(blobUrl)
                                    }
                                    console.log(
                                        `items file[${i}].name = ${file?.name}`,
                                    )
                                }
                            })
                        } else {
                            ;[...e.dataTransfer.files].forEach((file, i) => {
                                console.log(`… file[${i}].name = ${file.name}`)
                            })
                        }
                    }}
                    className={`${
                        fileEnter ? 'border-4' : 'border-2'
                    } w-full rounded border-[1.5px] border-stroke border-dashed bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-50`}>
                    <label
                        htmlFor="file"
                        className="h-full flex flex-col justify-center text-center">
                        Click to upload or drag and drop
                    </label>
                    <input
                        id="file"
                        type="file"
                        className="hidden"
                        onChange={e => {
                            console.log(e.target.files)
                            let files = e.target.files
                            if (files && files[0]) {
                                let blobUrl = URL.createObjectURL(files[0])
                                setFile(blobUrl)
                            }
                        }}
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <Image
                        className="rounded-md w-full max-w-xs h-50"
                        src={file}
                        alt="file"
                        width={50}
                        height={50}
                        // type="image/png" //need to be updated based on type of file
                    />
                    <button
                        onClick={() => setFile('')}
                        className="px-4 mt-10 uppercase py-2 tracking-widest outline-none bg-red-600 text-white rounded">
                        Reset
                    </button>
                </div>
            )}
        </div>
    )
}

export default DragDropFile
