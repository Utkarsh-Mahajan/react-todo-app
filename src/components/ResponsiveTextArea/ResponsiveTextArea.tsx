import { useEffect, useRef } from "react";
import "./ResponsiveTextArea.css";
const ResponsiveTextArea = ({
    placeholder = "",
    content,
    setContent,
}: {
    placeholder: string;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const textArea = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textArea.current) {
            
            textArea.current.style.height = "41px";
            textArea.current.style.height = `${textArea.current.scrollHeight}px`; //scroll height is the min height a container should have so it can display its conetent wihtout scroll bar
            // scroll height is always >= height
        }
    
    
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);

        // if (textArea.current) {
        //     textArea.current.style.height = `${textArea.current.scrollHeight}px`;
        // }
    };
    return (
        <textarea
            className="textarea"
            placeholder={placeholder}
            ref={textArea}
            value={content}
            onChange={handleChange}
        ></textarea>
    );
};

export default ResponsiveTextArea;
