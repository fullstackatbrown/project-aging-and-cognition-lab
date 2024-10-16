import React from 'react'

interface PublicationProps {
    title: string;
    authors: string;
    journal: string;
    date: string;
}

export default function Publication({ title, authors, journal, date }: any) {
    return (
        <div>
            <h3>{title}</h3>
            <p><strong>Authors:</strong> {authors}</p>
            <p><strong>Journal:</strong> {journal}</p>
            <p><strong>Date:</strong> {date}</p>
        </div>
    )
}
