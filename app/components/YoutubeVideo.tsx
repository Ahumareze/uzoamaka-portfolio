export default function YoutubeVideo(){
    return(
        <div className="h-full w-full bg-black/10 rounded-xl ovefflow-hidden" data-aos="fade-up">
            <iframe 
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
                src="https://www.youtube.com/embed/eAmCQPAcJfU?si=yFVfWYkc2bsuXiwL" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            >
            </iframe>
        </div>
    )
}