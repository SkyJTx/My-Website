import React, { ReactElement, ReactNode } from 'react'

interface ArticleProps {
    title: string,
    date: string,
    children: ReactNode
}

const Article = ({title, date, children}: ArticleProps) => {
    const modifyChildren = (child: ReactNode) => {
        if (React.isValidElement(child)) {
            if (child.type === 'p') {
                return React.cloneElement(child as ReactElement, {className: 'text-lg'})
            } else if (child.type === 'ul') {
                return React.cloneElement(child as ReactElement, {className: 'list-disc list-inside'})
            } else if (child.type === 'li') {
                return React.cloneElement(child as ReactElement, {className: 'text-lg'})
            } else if (child.type === 'hr') {
                return React.cloneElement(child as ReactElement, {className: 'm-3 border-slate-400 border-2 rounded'})
            }
        }
        return child
    }

    const modifiedChildren = React.Children.map(children, modifyChildren)

    return (
        <article className="m-10 p-4 py-8 bg-slate-800 rounded-xl shadow-2xl">
            <h2 className="text-center font-bold text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                {title}
            </h2>
            <div className="m-5">
                {modifiedChildren}
            </div>
            <p className="text-right text-sm">
                {date}
            </p>
        </article>
    )
}

export default Article