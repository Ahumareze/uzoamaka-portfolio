export default function Page(){
    return(
        <div className="h-screen w-full bg-red-500 flex flex-col items-center justify-center">

<div className="flex justify-center items-center h-screen">
      <div
        className="flex flex-col justify-center transform-gpu"
        style={{
          width: '1000px',
          height: '200px',
          transformStyle: 'preserve-3d',
          perspective: '1500px',
        }}
      >
        <div
          className="w-[1000px] h-[50px] bg-blue-500 flex items-center"
          style={{
            transform: 'rotateY(30deg)', // Apply the horizontal rotation to bend it like a crowbar
          }}
        >
          <div className="text-white text-center flex-1">2020</div>
          <div className="text-white text-center flex-1">2021</div>
          <div className="text-white text-center flex-1">2022</div>
          <div className="text-white text-center flex-1">2023</div>
        </div>
        <div className="h-[1px] w-[1000px] bg-white" />
      </div>
    </div>            

        </div>
    )
}