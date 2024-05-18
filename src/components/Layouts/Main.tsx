const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-wrap items-center">
                <div className="hidden w-full xl:block">
                    <div className="px-10 py-10.5 ">{children}</div>
                </div>
            </div>
        </div>
    )
}
export default Main
