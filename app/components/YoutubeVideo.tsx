export default function YoutubeVideo(){
    return(
        <div className="h-full w-full bg-black/10 rounded-xl ovefflow-hidden">
            <iframe 
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
                src="https://www.youtube.com/embed/eAmCQPAcJfU?si=yFVfWYkc2bsuXiwL" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            >
            </iframe>
        </div>
    )
}