
const VideoTitle = ({title, overview}) => {
 // console.log(title)
  return (
    <div className="w-screen aspect-video pt-[20%] p-10 absolute text-white bg-gradient-to-rfrom black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className=" space-x-3">
        <button className="bg-white hover:bg-slate-100 text-black rounded-sm font-bold px-6">▷ Play</button>
        <button className="bg-white bg-opacity-40 text-balck rounded-sm font-bold px-6">More info?</button>
      </div>
    </div>
  )
}

export default VideoTitle
