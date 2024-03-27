import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useState, useEffect } from 'react';
import { getReadBooks } from '../../Utility/SaveReadBook';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PageToRead() {
    const Books = useLoaderData()

    const [readBooks, setReadBooks] = useState([])
    useEffect(() => {
        const storedBooksId = getReadBooks()
        if (Books.length > 0) {

            const saveReadBooks = []
            for (const id of storedBooksId) {
                const readBook = Books.find(book => book.bookId === id)
                if (readBook) {
                    saveReadBooks.push(readBook)
                }
            }
            setReadBooks(saveReadBooks)
        }
    }, [])

    return (
        <div className='max-w-[1170px] mx-auto'>
            <BarChart
                width={1170}
                height={500}
                data={readBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="yearOfPublishing" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}