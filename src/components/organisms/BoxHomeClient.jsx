
import ActionButton from '../molecules/ActionButton';

function BoxHomeClient({ onRunClick, onFutClick, onCasualClick }) {
    return (
        <div className="flex justify-evenly mt-5 border-slate-950 font-bold text-2xl text-white ">
            <ActionButton
                imageSrc="/correrGIF.gif" 
                label="Running" 
                onClick={onRunClick}
                className="bg-white text-black "
            />
            <ActionButton 
                imageSrc="/futGIF.gif" 
                label="Futbol" 
                onClick={onFutClick} 
                className="bg-white text-black"
            />
            <ActionButton 
                imageSrc="/casualGIF.gif" 
                label="Casual" 
                onClick={onCasualClick}
                className="bg-white text-black"
            />
        </div>
    );
}

export default BoxHomeClient;
