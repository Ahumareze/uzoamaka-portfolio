import classes from './animations.module.css';

export default function RecordingText(){
    return(
        <div className="flex items-center gap-3">
            <div className={`${classes.recordintTextDiv} h-[10px] w-[10px] rounded-full`} />
            <p className="text-xl font-medium text-white">REC</p>
        </div>
    )
}