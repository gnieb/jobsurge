export default function Job({j}) {
    return (
        <div>
            <a className="font-bold" href={j.link}>{j.title}</a>
        </div>
    )
}