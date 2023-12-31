import React, { ReactElement, ReactNode } from 'react'

interface ArticleProps {
    title?: string,
    date?: string,
    modify?: boolean,
    children?: ReactNode
}

const Article = ({title, date, modify = true, children}: ArticleProps) => {
    const modifyChildren = (child: ReactNode) => {
        if (React.isValidElement(child) && modify) {
            let newClassName = ''
            let existingClassName = ''

            if (child.props.className) {
                existingClassName = child.props.className + ' '
            }

            if (child.type === 'p') {
                newClassName = 'text-lg text-white'
            } else if (child.type === 'ul') {
                 newClassName = 'list-disc list-inside'
            } else if (child.type === 'li') {
                newClassName = 'text-lg text-white'
            } else if (child.type === 'hr') {
                newClassName = 'm-3 border-slate-400 border-2 rounded'
            }
      
            const mergedClassName = existingClassName + newClassName
      
            return React.cloneElement(child as ReactElement, {className: mergedClassName.trim()})
        }
      
        return child;
    }

    const modifiedChildren = React.Children.map(children, modifyChildren)

    return (
        <article className="m-10 p-4 py-8 bg-slate-800 rounded-xl shadow-2xl">
            <h2 className="m-auto p-0 text-center font-bold text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                {title}
            </h2>
            <div className="m-5">
                {modifiedChildren}
            </div>
            <p className="text-right text-sm text-white">
                {date}
            </p>
        </article>
    )
}

export default Article