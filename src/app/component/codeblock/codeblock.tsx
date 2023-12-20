import Article from "../main/article"

export default function Codeblock({title, description, language ,children}: {title: string, description: string, language: string,children: any}) {
    return (
        <Article title={title} date={`Language: ${language}`} modify={true}>
            <p className="text-center">
                {description}
            </p>
            <div className="m-5">
                <pre>
                    <code>
                        {children}
                    </code>
                </pre>
            </div>
        </Article>
    )
}