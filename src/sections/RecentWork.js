import React from 'react'
import '../App.css'
import RecentWorkCard from '../components/RecentWorkCard'
import LineSeparator from '../components/LineSeparator'

function RecentWork({ content }) {

    return (
        <section className="recent-work">
            <LineSeparator title="RECENT WORK" />
            <div className="recent-work">
                <div className="recent-work-content">
                    {content.map((work, index) => {
                        const { image, title, text } = work
                        return (
                            <RecentWorkCard
                                key={index}
                                image={image}
                                title={title}
                                text={text} />
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default RecentWork