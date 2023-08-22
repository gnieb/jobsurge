export default function Job({j}) {
    return (
        <div>
            <a className="font-bold hover:text-orange-600" target="_blank" rel="noreferrer" href={j.link}>{j.title}</a>
        </div>
    )
}