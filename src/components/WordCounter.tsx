import { useState, ChangeEvent } from 'react';

const WordCounter = () => {
    const [text, setText] = useState('');
    const wordCount = text.trim().split(/\s+/).length;
    const charCount = text.length;
    const numberCount = (text.match(/\d+/g) || []).join('').length;

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text here..."
            />
            <p>Word count: {wordCount}</p>
            <p>Character count: {charCount}</p>
            <p>Number count (excluding spaces): {numberCount}</p>
        </div>
    );
};

export default WordCounter;