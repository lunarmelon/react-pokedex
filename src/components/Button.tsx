import './button.css';

interface ButtonProps{
    color?: string;
    label:string;
    onClick:()=>void;
}

export default function Button(props:ButtonProps){
    return (
        <button className={`btn ${!props.color?'btn-colorTeclado':''} ${props.color==='green'?'btn-green':''} ${props.color==='teclado'?'btn-colorTeclado':''} ${props.color==='red'?'btn-red':''}`} onClick={props.onClick}>{props.label}</button>
    )
}