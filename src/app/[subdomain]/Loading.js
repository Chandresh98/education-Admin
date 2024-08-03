import Image from 'next/image'

const Loading = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
            <div className="text-center">
                <Image src="/images/logo/logo-b.png" width={100} height={100} />
                <p>Loading...</p>
            </div>
        </div>
    )
}

export default Loading
